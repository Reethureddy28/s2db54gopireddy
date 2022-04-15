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
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
// for a specific popcorn. 
exports.popcorn_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: popcorn detail: ' + req.params.id); 
}; 
 
// Handle popcorn create on POST. 
//exports.popcorn_create_post = function(req, res) { 
    //res.send('NOT IMPLEMENTED: popcorn create POST'); 
//}; 
// Handle Costume create on POST. 
exports.popcorn_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new popcorn(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.popcorn_flavour = req.body.popcorn_flavour; 
    document.popcorn_quantity = req.body.popcorn_quantity; 
    document.popcorn_cost = req.body.popcorn_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle popcorn delete form on DELETE. 
exports.popcorn_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: popcorn delete DELETE ' + req.params.id); 
}; 
 
// Handle popcorn update form on PUT. 
exports.popcorn_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.popcorn_view_all_Page = async function(req, res) { 
    try{ 
        thePopcorn = await popcorn.find(); 
        res.render('popcorn', { title: 'popcorn Search Results', results: thePopcorn }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 