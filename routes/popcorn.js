var express = require('express'); 
const popcorn_controlers= require('../controllers/popcorn'); 
var router = express.Router(); 
 
/* GET popcorn */ 
router.get('/', popcorn_controlers.popcorn_view_all_Page ); 

// GET request for one popcorn. 
router.get('/popcorn/:id', popcorn_controlers.popcorn_detail); 

/* GET detail popcorn page */ 
router.get('/detail', popcorn_controlers.popcorn_view_one_Page); 

/* GET create popcorn page */ 
router.get('/create', popcorn_controlers.popcorn_create_Page); 

/* GET create update page */ 
router.get('/update', popcorn_controlers.popcorn_update_Page); 

/* GET delete popcorn page */ 
router.get('/delete', popcorn_controlers.popcorn_delete_Page); 
 

module.exports = router; 