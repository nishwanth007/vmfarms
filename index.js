const config = require('./config.js')
const app = require('./server.js')

app.listen(config.PORT, function () {
    console.log("App's running on port ",config.PORT);
})