const db = require('../models');

module.exports = {
    login: function (req, res) {
        // console.log(req.body);
        db.User.findOne({
            where: {
                email: req.body.email,
            },
        })
            .then(function (user) {
                if (user) {
                    // console.log(user);
                    user.comparePassword(req.body.password, (err, isMatch) => {
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
    },
    logout: function (req, res) {
        req.session.destroy();
        res.json({
            message: 'Logged out',
        });
    },
    register: function (req, res) {
        db.User.create(req.body)
            .then(function (user) {
                req.session.user = user;
                res.json(user);
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json(err);
            });
    },
    getUser: function (req, res) {
        db.User.findOne({
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
    },
    getUserByEmail: function (req, res) {
        db.User.findOne({
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
    },
    getAllUsers: function (req, res) {
        db.User.find({})
            .then(function (users) {
                res.json(users);
            })
            .catch(function (err) {
                console.error(err);
                res.status(500).json(err);
            });
    },
    validate: function (req, res) {
        if (req.session.user) {
            res.json(req.session.user);
        } else {
            res.json({
                error: 'User not logged in',
            });
        }
    },
};
