var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var popcorn_controller = require('../controllers/popcorn'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// POPCORN ROUTES /// 
 
// POST request for creating a popcorn.  
router.post('/popcorn', popcorn_controller.popcorn_create_post); 
 
// DELETE request to delete popcorn. 
router.delete('/popcorn/:id', popcorn_controller.popcorn_delete); 
 
// PUT request to update popcorn. 
router.put('/popcorn/:id', popcorn_controller.popcorn_update_put); 
 
// GET request for one popcorn. 
router.get('/popcorn/:id', popcorn_controller.popcorn_detail); 
 
// GET request for list of all popcorn items. 
router.get('/popcorn', popcorn_controller.popcorn_list); 
 
module.exports = router;