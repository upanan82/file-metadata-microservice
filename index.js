var express = require('express'),
    app = express(),
    upload = require('multer')(),
    path = require('path');

// Listen port
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

// Include home page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Output result
app.post('/file-size', upload.array('file'), function (req, res) {
    res.send(JSON.stringify({size: req.files[0].size}));
});