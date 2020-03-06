const express = require('express');
const burger = require('../models/burger');

const router = express.Router();


router.get('/', (req, res) => {
    burger.viewBurgers((result) => {
        console.log('View Burgers was Successful!');

        let hbsObject = { burgers: result };

        res.render('index', hbsObject);
    });
});

router.post('/api/burger', (req, res) => {
    burger.addBurger(req.body.name, (result) => {
        console.log("Burger Added Successfully!")
        res.json({ id: result.insertID });
    });
});




module.exports = router;