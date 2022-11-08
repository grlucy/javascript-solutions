/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    OrderedStream.prototype.total = n
    OrderedStream.prototype.values = {}
    for (let i = 1; i <= n; i++) {
        OrderedStream.prototype.values[i] = null
    }
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    OrderedStream.prototype.values[idKey] = value
    let res = []
    let added = []
    for (let i = 1; i <= OrderedStream.prototype.total; i++){
        if (OrderedStream.prototype.values[i]) {
            res.push(OrderedStream.prototype.values[i])
            added.push(i)
        } else if (OrderedStream.prototype.values[i] === null) {
            break
        }
    }
    added.forEach(i => delete OrderedStream.prototype.values[i])
    return res
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */