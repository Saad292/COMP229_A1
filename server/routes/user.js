let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//connect to user module
let User = require('../models/user');

//Get Route for read operation

router.get('/', (req, res, next) => {
    User.find((err, UserList) => {
        if(err)
        {
            return console.error(err);
        }
        else{
            console.log(UserList)
        }
    });
});

module.exports = router;
