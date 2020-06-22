var longestCommonPrefix = function (strs) {
  // Return early for edge case
  if (!strs.length) {
    return "";
  }

  let prefix = strs[0];

  // If there is more than one string:
  if (strs.length > 1) {
    // Compare remaining strings to prefix
    for (let i = 1; i < strs.length; i++) {
      let comparison = "";
      for (let j = 0; j < prefix.length; j++) {
        if (strs[i][j] === prefix[j]) {
          comparison += strs[i][j];
        } else {
          break;
        }
      }
      if (comparison.length < prefix.length) {
        prefix = comparison;
      }
      if (prefix === "") {
        return prefix;
      }
    }
  }

  // Return common prefix
  return prefix;
};
