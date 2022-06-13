const style = require('ansi-styles')

console.log(`${style.green.open}Hello world!${style.green.close}`);


// Color conversion between 256/truecolor
// NOTE: When converting from truecolor to 256 colors, the original color
//       may be degraded to fit the new color palette. This means terminals
//       that do not support 16 million colors will best-match the
//       original color.
console.log(`${style.color.ansi256(style.rgbToAnsi256(199, 20, 250))}Hello World${style.color.close}`)
console.log(`${style.color.ansi16m(...style.hexToRgb('#abcdef'))}Hello World${style.color.close}`)

console.log(`${style.reset.open}Reset${style.reset.close}`)

console.log(`${style.bold.open}Bold${style.bold.close}`)
console.log(`${style.dim.open}Dim${style.dim.close}`)

console.log(`${style.underline.open}Underline${style.underline.close}`)
console.log(`${style.overline.open}Overline${style.overline.close}`)
console.log(`${style.inverse.open}Inverse${style.inverse.close}`)
console.log(`${style.hidden.open}Hidden${style.hidden.close}`)

// (Not widely supported)
console.log(`${style.strikethrough.open}Strikethrough${style.strikethrough.close}`)