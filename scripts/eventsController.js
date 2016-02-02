var fs = require('fs');

//Get an event
module.exports.get = function(req, res) {
    var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

//Get all events
module.exports.getAll = function(req, res) {
    var path = "app/data/event/";
    var files = [];
    try {
        files = fs.readdirSync(path);
    } catch (e) {
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") === files[idx].length - 5) {
            results += fs.readFileSync(path + "/" + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";
    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
};

//Saves Event
module.exports.saveEvent = function(req, res) {
    console.log('In save event web service');
    var event = req.body;
    console.log(req);
    fs.writeFileSync('app/data/event/' + req.params.id + '.json', JSON.stringify(event));
    res.send(event);
};

//Saves person
module.exports.save = function(req, res) {
    console.log('In save person web service');
    var event = req.body;
    fs.writeFileSync('app/data/person/' + req.params.id + '.json', JSON.stringify(event));
    res.send(event);
};
