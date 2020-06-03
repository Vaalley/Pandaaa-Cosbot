module.exports = function fillZeros(number, size) {
    let s = String(number);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
};