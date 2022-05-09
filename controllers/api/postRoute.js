const router = require('express').Router();

const { User, Post, Comments } = require('../../models');


router.get('/', async (req, res) => {
    try{
        const postedData = await Post.findAll()
            const posts = postedData.map((post) => post.get({ plain: true }));
            // res.render('home', { posts });
            res.status(200).json({ posts });

    }catch (err) {
        res.status(500).json(err);
    }
        
});



//get the specific message with all of its comments.
router.get('/:id', async (req, res) => {
    try {
        console.log("WORKING>>>");
        const message = await Post.findByPk(req.params.id, {
            include: [
                {
                model: Comments,
                include: [
                    {
                        model: User
                    }
                ]
            }
        ]
        });
        const singlePost = message.get({ plain: true });
        console.log(singlePost)
            res.render('singleposts', { singlePost });
        } catch (err) {
            console.error(err);
            res.status(400).json(err);
    }
});


router.post('/', async (req, res) => {
    try {
        const post = await Post.create({
            ...req.body,
            user_id: req.session.user_id 
        });
        res.status(200).json({message})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/:id', async (req, res) => {
    try {
        const post = await Comments.create({
            ...req.body,
            post_id: req.params.id,
            user_id: req.session.user_id
        });
        res.status(200).json({message})
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;