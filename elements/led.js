const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {
  const style = `
    width: ${attrs.size};
    height: ${attrs.size};
    background: ${attrs.on ? 'red': 'pink'};
    border-radius: 50%;
  `
  return html`
    <div style=${style} />
  `
}
