var express = require('express'),
    app = express();
app.use(express.static('www'));
app.set('port', 8080);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});