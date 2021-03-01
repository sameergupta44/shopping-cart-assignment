let express = require('express');
let app = express();
app.use('/static', express.static('static'))
const port = 3001;
app.listen(port);

console.log('Server listening on: ' + port);