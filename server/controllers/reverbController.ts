import ReverbApiClient from '@zacharyeggert/reverb-api';
import { Request, Response } from 'express';
// const fs = require('fs');

import { Reverb, Item } from '@models';

export async function updateRecent(_: Request, res: Response) {
    //fetch reverb posts from the reverb api
    const reverb = new ReverbApiClient(process.env.REVERB_API_KEY);
    res.json({ message: 'updating reverb table' });

    const listings = await reverb.getMyListingsRecent();
    // console.debug(`fetched ${listings.length} listings`);
    Reverb.find({})
        .then((indexedReverbListings: any[]) =>
            indexedReverbListings.map((listing) => listing.id)
        )
        .then((indexedReverbListingsIds: number[]) =>
            listings.filter(
                (listing: any) => !indexedReverbListingsIds.includes(listing.id)
            )
        )
        .then((newListings) => {
            // console.debug(`found ${newListings.length} new listings`);
            newListings.forEach(async (listing: any) => {
                await Reverb.create(newListings)
                    .then(() => {
                        console.debug(
                            `added listing ${listing.id} to reverb table`
                        );
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            });
        })
        .then(() => {
            console.debug('reverb table updated');
        })
        .catch((err) => {
            console.error(err);
        });
}
export async function updateAll(_: Request, res: Response) {
    //fetch reverb posts from the reverb api
    const reverb = new ReverbApiClient(process.env.REVERB_API_KEY);
    // res.json({message: 'updating reverb table'});
    console.debug('fetching listings');
    const listings = reverb.getMyListings();

    await Reverb.deleteMany({});
    Reverb.insertMany(await listings)
        .then(() => {
            res.json({ message: 'updated reverb table' });
        })
        .catch((err) => {
            console.error(err);
            res.json({ message: 'error updating reverb table' });
        });
}
export async function findAll(req: Request, res: Response) {
    Reverb.find(req.query)
        .then((dbReverb) => res.status(200).json(dbReverb))
        .catch((err) => res.status(422).json(err));
}
export async function findById(req: Request, res: Response) {
    //find a single reverb post
    //return the reverb post
    Reverb.findById(req.params.id)
        .then((dbReverb) => res.status(200).json(dbReverb))
        .catch((err) => res.status(422).json(err));
}
export async function importById(req: Request, res: Response) {
    //find a single reverb post
    //return the reverb post
    Reverb.findById(req.params.id)
        .then(async (dbReverb) => {
            try {
                await Item.findByIdAndDelete(req.params.id);
            } catch (err) {
                console.error(err);
            }
            const reverb = new ReverbApiClient(process.env.REVERB_API_KEY);
            let imported = await reverb.get(dbReverb._links.self.href);
            Item.create({ ...imported.data, _id: req.params.id })
                .then(() => {
                    res.json({ message: 'imported reverb post' });
                })
                .catch((err) => {
                    console.error(err);
                    res.json({ message: 'error importing reverb post' });
                });
        })
        .catch((err) => res.status(422).json(err));
}
