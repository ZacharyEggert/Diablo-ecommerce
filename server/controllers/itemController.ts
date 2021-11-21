import { default as ReverbApiClient } from '@zacharyeggert/reverb-api';
import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { Item, Reverb } from '@models';

export function create(req: Request, res: Response) {
    Item.create(req.body)
        .then((dbItem) => res.json(dbItem))
        .catch((err) => {
            res.json(err);
            console.error(err);
        });
}
export function findAll(req: Request, res: Response) {
    Item.find(req.query)
        .then((dbItem) => res.json(dbItem))
        .catch((err) => {
            res.json(err);
            console.error(err);
        });
}
export function findById(req: Request, res: Response) {
    if (!isValidObjectId(req.params.id)) {
        return res.status(422).json({ error: 'Invalid ID' });
    }
    Item.findById(req.params.id)
        .then((dbItem) => res.json(dbItem))
        .catch((err) => {
            res.json(err);
            console.error(err);
        });
}
export function update(req: Request, res: Response) {
    Item.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((dbItem) => res.json(dbItem))
        .catch((err) => {
            res.json(err);
            console.error(err);
        });
}
export function remove(req: Request, res: Response) {
    Item.findById({ _id: req.params.id })
        .then((dbItem) => dbItem.remove())
        .then((dbItem) => res.json(dbItem))
        .catch((err) => {
            res.json(err);
            console.error(err);
        });
}
export function importFromReverb(_: Request, res: Response) {
    res.json({ message: 'This May Take A While' });
    const ReverbClient = new ReverbApiClient(process.env.REVERB_API_KEY);
    Item.find({})
        .then((dbItems) => {
            Reverb.find({})
                .then((reverbItems) => {
                    let itemIds = dbItems.map((item) => item._id);
                    return reverbItems.filter(
                        (reverbItem) => !itemIds.includes(reverbItem._id)
                    );
                })
                .then((reverbItems) => {
                    reverbItems.forEach(async (reverbItem) => {
                        await ReverbClient.get(reverbItem._links.self.href)
                            .then(async (response) => {
                                response.status === 200 &&
                                    (await Item.create({
                                        ...response.data,
                                        _id: reverbItem._id,
                                    }));
                            })
                            .catch((err) => {
                                console.error(err);
                            });
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        })
        .catch((err) => {
            console.error(err);
        });
}
export function clearAndImportFromReverb(_: Request, res: Response) {
    res.json({ message: 'This Will Take A While' });
    const ReverbClient = new ReverbApiClient(process.env.REVERB_API_KEY);

    Reverb.find({}).then((reverbItems) => {
        Item.find({})
            .then((dbItems) => {
                let reverbIds = reverbItems.map((reverbItem) => reverbItem._id);
                return dbItems.filter((dbItem) =>
                    reverbIds.includes(dbItem._id)
                );
            })
            .then((dbItems) => {
                dbItems.forEach(async (dbItem) => {
                    await Item.findByIdAndDelete(dbItem._id);
                });
            })
            .then(() => {
                reverbItems.forEach(async (reverbItem) => {
                    await ReverbClient.get(reverbItem._links.self.href)
                        .then(async (response) => {
                            response.status === 200 &&
                                (await Item.create({
                                    ...response.data,
                                    _id: reverbItem._id,
                                }));
                        })
                        .catch((err) => {
                            console.error(err);
                        });
                });
            })
            .catch((err) => {
                console.error(err);
            });
    });
}
