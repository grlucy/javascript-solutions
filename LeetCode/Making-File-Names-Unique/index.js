/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
    const obj = {}
    const arr = []
    for (let i = 0; i < names.length; i++) {
        if (obj[names[i]]) {
            let str = names[i] + `(${obj[names[i]]})`
            obj[names[i]]++
            while (obj[str]) {
                str = names[i] + `(${obj[names[i]]})`
                obj[names[i]]++
            }
            obj[str] = 1
            arr.push(str)
        } else {
            obj[names[i]] = 1
            arr.push(names[i])
        }
    }
    return arr
}