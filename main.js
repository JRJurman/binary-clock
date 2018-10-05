const Tram = require('tram-one')
require("babel-polyfill")

const app = new Tram({
  defaultRoute: '/'
})
app.addRoute('/', require('./pages/home'))
app.addActions({
  clock: require('./actions/clock'),
  ticker: require('./actions/ticker')
})
app.start('.main')
