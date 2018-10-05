const Tram = require('tram-one')
const html = Tram.html({
  'digit': require('../elements/digit')
})

module.exports = (attrs) => {
  const style = `
    display: flex;
    justify-content: center;
  `
  const time = new Date()
  const timeString = time.toLocaleTimeString('en-US', {hour12: false}).split(':').join('')
  return html`
    <div style=${style}>
      <digit value=${timeString[0]} />
      <digit value=${timeString[1]} />
      <digit value=${timeString[2]} />
      <digit value=${timeString[3]} />
      <digit value=${timeString[4]} />
      <digit value=${timeString[5]} />
    </div>
  `
}

