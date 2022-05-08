const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const auth = require('../utils/auth'); 

router.get('/', async (req, res) => {
    try {
        res.render('home')
    } catch (err) {
        console.log(err); 
        res.status(500).json(err);
    }
    
})


module.exports = router;

