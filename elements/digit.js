const Tram = require('tram-one')
const html = Tram.html({
  'led': require('./led')
})

module.exports = (attrs) => {
  const binaryValue = parseInt(attrs.value).toString(2)
  const fullBinaryString = '0000'.slice(0, 4 - binaryValue.length).concat(binaryValue)
  const isOn = fullBinaryString.split('').map(value => value === '1')

  return html`
    <div>
      <led size=${attrs.size} ${isOn[0] ? 'on' : ''} />
      <led size=${attrs.size} ${isOn[1] ? 'on' : ''} />
      <led size=${attrs.size} ${isOn[2] ? 'on' : ''} />
      <led size=${attrs.size} ${isOn[3] ? 'on' : ''} />
    </div>
  `
}

