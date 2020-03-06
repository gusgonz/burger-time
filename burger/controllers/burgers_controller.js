const express = require('express');
const burger = require('../models/burger');

const router = express.Router();


router.get('/', (req, res) => {
    burger.viewBurgers((result) => {
        console.log('View Burgers was Successful!');

        let hbsObject = {
            burgers: result
        };

        res.render('index', hbsObject);
    });
});

router.post('/', (req, res) => {

});




module.exports = router;