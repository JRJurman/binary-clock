const Tram = require('tram-one')
require("babel-polyfill")

const app = new Tram()
app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))
app.addActions({
  clock: require('./actions/clock'),
  ticker: require('./actions/ticker')
})
app.start('.main')
