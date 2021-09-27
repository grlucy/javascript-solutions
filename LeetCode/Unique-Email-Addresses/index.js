/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const unique = []
    emails.forEach(email => {
        const domainName = email.split('@')[1]
        let localName = email.split('@')[0].split('+')[0]
        localName = localName.replace(/\./gi, '')
        const full = localName + '@' + domainName
        if (unique.indexOf(full) < 0) unique.push(full)
    })
    return unique.length
}