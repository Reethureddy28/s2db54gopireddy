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
    exports.popcorn_detail = async function(req, res) { 
        console.log("detail"  + req.params.id) 
        try { 
            result = await popcorn.findById( req.params.id) 
            res.send(result) 
        } catch (error) { 
            res.status(500) 
            res.send(`{"error": document for id ${req.params.id} not found`); 
        } 
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
 

// Handle popcorn delete on DELETE. 
exports.popcorn_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await popcorn.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
 
// Handle popcorn update form on PUT. 
exports.popcorn_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await popcorn.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.popcorn_flavour)  
               toUpdate.popcorn_flavour = req.body.popcorn_flavour; 
        if(req.body.popcorn_cost) toUpdate.popcorn_cost = req.body.popcorn_cost; 
        if(req.body.popcorn_quantity) toUpdate.popcorn_quantity = req.body.popcorn_quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle a show one view with id specified by query 
exports.popcorn_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await popcorn.findById( req.query.id) 
        res.render('popcorndetail',  
{ title: 'popcorn Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 