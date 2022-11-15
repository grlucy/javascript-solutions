/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let res = 0
    for (let i = 0; i < s.length; i++){
        const ltr = s[i]
        switch (ltr) {
            case 'I':
                if (s[i+1] === 'V' || s[i+1] === 'X') {
                    res-=1
                } else {
                    res+=1
                }
                break
            case 'X':
                if (s[i+1] === 'L' || s[i+1] === 'C') {
                    res-=10
                } else {
                    res+=10
                }
                break
            case 'C':
                if (s[i+1] === 'D' || s[i+1] === 'M') {
                    res-=100
                } else {
                    res+=100
                }
                break
            default:
                res += obj[ltr]
        }
    }
    return res
}