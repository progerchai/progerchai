const crypto = require('crypto')
const bcrypt = require('bcrypt')

let str = 'rasmuslerdorf'
const cry = crypto.createHash('sha1')
cry.update(str)
console.log(cry.digest('hex'))
console.log('pass: $2y$07$BCryptRequires22Chrcte/VlQH0piJtjXl.0t1XkA8pw9dMXTpOq')


let saltRounds = 6 // 加密幂数
bcrypt.hash(str, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    if (err) {
        console.log('err: ', err)
    } else {
        console.log('hash: ', hash)
    }
});