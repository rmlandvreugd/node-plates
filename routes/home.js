var lib = require('../lib');

exports.index = function(req, res){
    res.format({
        json: function(){
            res.json(lib.api.get());
        },
        html: function(){
            res.render('index', lib.api.get());
        }
    })
};