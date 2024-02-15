const express= require('express');

const router= express.Router();

router.get('/home', (req, res) => {
    res.send('Home Page from Router');
  });
  
  router.get('/about', (req, res) => {
    res.send('About Us Page from Router');
  });

  module.exports = router;