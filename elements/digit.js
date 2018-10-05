const Tram = require('tram-one')
const html = Tram.html({
  'led': require('./led')
})

module.exports = (attrs) => {
  const style = `

  `

  const binary = parseInt(attrs.value).toString(2)
  const paddedValue = '0000'.slice(0, 4 - binary.length).concat(binary)

  return html`
    <div style=${style} >
      <led size="3em" ${paddedValue[0] === '1' ? 'on' : ''} />
      <led size="3em" ${paddedValue[1] === '1' ? 'on' : ''} />
      <led size="3em" ${paddedValue[2] === '1' ? 'on' : ''} />
      <led size="3em" ${paddedValue[3] === '1' ? 'on' : ''} />
    </div>
  `
}

