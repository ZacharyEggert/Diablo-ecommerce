const router = require('express').Router();

router.use('/item', require('./item'));

router.get('/', (req, res) => {
    res.json({ message: 'Hello API!' });
});

module.exports = router;
