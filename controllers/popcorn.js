var popcorn = require('../models/popcorn'); 
 
// List of all popcorn
//exports.popcorn_list = function(req, res) { 
   // res.send('NOT IMPLEMENTED: popcorn list'); 
//}; 
exports.popcorn_list = async function(req, res) {
    try{
    thePopcorn = await popcorn.find();
    res.send(thePopcorn);
    }
    catch(err){
    //res.error(500,`{"error": ${err}}`);
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
// for a specific popcorn. 
exports.popcorn_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: popcorn detail: ' + req.params.id); 
}; 
 
// Handle popcorn create on POST. 
exports.popcorn_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: popcorn create POST'); 
}; 
 
// Handle popcorn delete form on DELETE. 
exports.popcorn_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: popcorn delete DELETE ' + req.params.id); 
}; 
 
// Handle popcorn update form on PUT. 
exports.popcorn_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: update PUT' + req.params.id); 
}; 