const key = {}
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const encoded = Math.random().toString(36).slice(-6)
    key[encoded] = longUrl
    return "http://tinyurl.com/" + encoded
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const encoded = shortUrl.replace("http://tinyurl.com/", "")
    return key[encoded]
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */