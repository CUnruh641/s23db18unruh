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
}

// Handle Shaker Delete Form on DELETE.
exports.shaker_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Shaker.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
}
    

// Handle Shaker Update Form on PUT.
exports.shaker_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Shaker.findById( req.params.id)
        // Do updates of properties
        if(req.body.shaker_type)
        toUpdate.shaker_type = req.body.shaker_type;
        if(req.body.shaker_size) toUpdate.shaker_size = req.body.shaker_size;
        if(req.body.shaker_cost) toUpdate.shaker_cost = req.body.shaker_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

// Handle a show one view with id specified by query
exports.shaker_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Shaker.findById( req.query.id)
        res.render('shakerdetail', {title: 'Shaker Detail', toShow: result});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.shaker_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('shakercreate', { title: 'Shaker Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}

// Handle building the view for updating a costume.
// query provides the id
exports.shaker_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Shaker.findById(req.query.id)
        res.render('shakerupdate', { title: 'Shaker Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}
