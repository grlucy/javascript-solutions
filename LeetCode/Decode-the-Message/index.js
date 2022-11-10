/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const frmt = key.replaceAll(' ', '').split('')
    const arr = []
    frmt.forEach(ltr => {
        if (!arr.includes(ltr)) {
            arr.push(ltr)
        }
    })
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    const obj = {}
    arr.forEach((ltr, i) => {
        obj[ltr] = alph[i]
    })
    return message.split('').map(ltr => obj[ltr] ?? ' ').join('')
}