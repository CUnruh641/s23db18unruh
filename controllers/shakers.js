var Shaker = require('../models/shaker');

//List of All Shakers.
exports.shaker_list = async function(req, res) {
    try{
        theShakers = await Shaker.find();
        res.send(theShakers);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

//For a Specific Shaker.
exports.shaker_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await  Shaker.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
}

// Handle Shaker Create on POST.
exports.shaker_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Shaker();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.shaker_type = req.body.shaker_type;
    document.shaker_size = req.body.shaker_size;
    document.shaker_cost = req.body.shaker_cost;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Shaker Delete Form on DELETE.
exports.shaker_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Shaker Delete DELETE ' + req.params.id);
}

// Handle Shaker Update Form on PUT.
exports.shaker_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Shaker Update PUT' + req.params.id);
}

// VIEWS
// Handle a Show All View.
exports.shaker_view_all_Page = async function(req, res) {
    try{
        theShakers = await Shaker.find();
        res.render('shaker', { title: 'Shaker Search Results', results: theShakers });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}