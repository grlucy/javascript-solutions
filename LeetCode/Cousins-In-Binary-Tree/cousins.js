/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var isCousins = function (root, x, y) {
  // create a map of the binary tree
  let map = [
    {
      index: 0,
      value: root[0],
      depth: 0,
    },
  ];

  let len = root.length;
  let k = 1;
  let j = 1;

  for (let i = 1; i < len; i++) {
    // update depth
    if (j > Math.pow(2, k)) {
      k++;
      j = 1;
    }
    // update map
    map.push({
      index: i,
      value: root[i],
      depth: k,
    });

    j++;
  }

  // store information about x and y
  let xObj = map.filter((object) => object.value === x)[0];
  let yObj = map.filter((object) => object.value === y)[0];

  // check if they have the same depth
  if (xObj.depth === yObj.depth) {
    // check if they have the same parents
    if (
      (xObj.index % 2 === 1 && yObj.index === xObj.index + 1) ||
      (yObj.index % 2 === 1 && xObj.index === yObj.index + 1)
    ) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

console.log(isCousins([1, 2, 3, 4], 4, 3));

//       1
//      / \
//     2   3
//    /
//   4
