var toLowerCase = function (str) {
  // return str.toLowerCase();
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if (65 <= ascii && ascii <= 90) {
      newStr += String.fromCharCode(ascii + 32);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
