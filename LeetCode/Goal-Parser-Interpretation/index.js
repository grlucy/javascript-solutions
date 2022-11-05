/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let x = command.replaceAll("()", "o")
    x = x.replaceAll("(al)", "al")
    return x
}