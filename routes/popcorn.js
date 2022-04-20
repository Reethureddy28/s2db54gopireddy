var express = require('express'); 
const popcorn_controlers= require('../controllers/popcorn'); 
var router = express.Router(); 
 
/* GET popcorn */ 
router.get('/', popcorn_controlers.popcorn_view_all_Page ); 

// GET request for one popcorn. 
router.get('/popcorn/:id', popcorn_controlers.popcorn_detail); 

/* GET detail popcorn page */ 
router.get('/detail', popcorn_controlers.popcorn_view_one_Page); 
 

module.exports = router; 