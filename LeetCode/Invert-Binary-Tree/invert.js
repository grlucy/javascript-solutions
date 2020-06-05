var invertTree = (root) => {
  if (!root) {
    return root;
  }
  let x = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(x);
  return root;
};
