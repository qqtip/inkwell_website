const express = require('express');
const path = require('path');
const app = express();

// Force HTTPS connections
// const enforce = require('express-sslify');
//app.use(enforce.HTTPS({trustProtoHeader: true}));

// serve static assets normally
app.use(express.static(__dirname + '/app/'));

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'app', 'index.html'))
});

app.listen(process.env.PORT || 8080);