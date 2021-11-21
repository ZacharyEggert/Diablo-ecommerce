import { Request, Response } from 'express';
import { RequestWithUser } from 'server/types';
import { User } from '@models';

export function login(req: RequestWithUser, res: Response) {
    // console.log(req.body);
    User.findOne({
        where: {
            email: req.body.email,
        },
    })
        .then(function (user) {
            if (user) {
                // console.log(user);
                user.comparePassword(req.body.password, (err: Error | undefined, isMatch: boolean) => {
                    if (err) {
                        console.error(err);
                    } else {
                        // console.debug({ isMatch });
                        if (isMatch) {
                            req.session.user = user;
                            res.json({
                                user: user,
                                message: 'Successfully logged in',
                            });
                        } else {
                            res.json({
                                message: 'Incorrect password',
                            });
                        }
                    }
                });
            } else {
                res.json({
                    error: { field: 'email', message: 'User not found' },
                });
            }
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json(err);
        });
}
export function logout(req: RequestWithUser, res: Response) {
    req.session!.destroy(() => { });
    res.json({
        message: 'Logged out',
    });
}
export function register(req: RequestWithUser, res: Response) {
    User.create(req.body)
        .then(function (user) {
            req.session!.user = user;
            res.json(user);
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json(err);
        });
}
export function getUser(req: Request, res: Response) {
    User.findOne({
        where: {
            _id: req.params.id,
        },
    })
        .then(function (user) {
            res.json(user);
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json(err);
        });
}
export function getUserByEmail(req: Request, res: Response) {
    User.findOne({
        where: {
            email: req.params.email,
        },
    })
        .then(function (user) {
            res.json(user);
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json(err);
        });
}
export function getAllUsers(_: Request, res: Response) {
    User.find({})
        .then(function (users) {
            res.json(users);
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json(err);
        });
}
export function validate(req: RequestWithUser, res: Response) {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.json({
            error: 'User not logged in',
        });
    }
}
