let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');


// connect to our contact Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the contact List page - READ Operation */
router.get('/', requireAuth, contactController.displayContactList);

/* GET Route for displaying the Update page - UPDATE Operation */
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);

/* POST Route for processing the Update page - UPDATE Operation */
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;