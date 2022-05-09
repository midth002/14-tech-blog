const router = require('express').Router();

const { User, Post, Comment } = require('../../models');


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



//get the specific post with all of its comments.
router.get('/:id', async (req, res) => {
    try {
        
        const post = await Post.findByPk(req.params.id, {
            include: [
                {
                model: Comment,
                include: [
                    {
                        model: User
                    }
                ]
            }
        ]
        });
        const singlePost = post.get({ plain: true });
            res.status(200).json({singlePost})
        } catch (err) {
            console.error(err);
            res.status(400).json(err);
    }
});


router.post('/', async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            contents: req.body.contents,
            // user_id: req.session.user_id 
        });
        res.status(200).json({post})
    } catch (err) {
        res.status(500).json(err);
    }
})

// router.post('/:id', async (req, res) => {
//     try {
//         const post = await Comments.create({
//             ...req.body,
//             post_id: req.params.id,
//             user_id: req.session.user_id
//         });
//         res.status(200).json({message})
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

module.exports = router;