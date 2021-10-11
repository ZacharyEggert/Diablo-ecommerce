const router = require('express').Router();

router.use('/item', require('./item'));
// router.use('/user', require('./user'));
router.use('/reverb', require('./reverb'));

router.get('/', (req, res) => {
    res.json({ message: 'Hello API!' });
});

module.exports = router;
