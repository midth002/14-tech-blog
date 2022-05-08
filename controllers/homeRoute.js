const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const auth = require('../utils/auth'); 

router.get('/', auth, async (req, res) => {
    try {
        res.render('home', {

        })
    } catch (err) {
        console.log(err); 
        res.status(500).json(err);
    }
    
});

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
     res.render('login');
  });

  router.get('/signup',  (req, res)=> {
    try {
  
      res.render('signup');
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



module.exports = router;

