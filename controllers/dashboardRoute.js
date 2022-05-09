const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const auth = require('../utils/auth'); 

router.get('/', async (req, res) => {
    try {
        
        const user = await Post.findAll({
            where : {
                user_id : req.session.user_id
            }, include : [{
                model: Comment, 
                include : {
                    model : User,
                    attributes : ['user_name']
                }
            }]
        }, 
        );


        const userPosts = user.map((post) => post.get({ plain: true}));
            // res.status(200).json({userPosts})
            res.render('dashboard', {userPosts});
        } catch (err) {
            console.error(err);
            res.status(400).json(err);
    }
});

module.exports = router;
