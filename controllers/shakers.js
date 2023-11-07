var Shaker = require('../models/shaker');

// List of all Costumes
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

// for a specific Costume.
exports.shaker_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Shaker Detail: ' + req.params.id);
}

// Handle Costume create on POST.
exports.shaker_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Shaker Create POST');
}

// Handle Costume delete form on DELETE.
exports.shaker_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Shaker Delete DELETE ' + req.params.id);
}

// Handle Costume update form on PUT.
exports.shaker_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Shaker Update PUT' + req.params.id);
}

// VIEWS
// Handle a show all view
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