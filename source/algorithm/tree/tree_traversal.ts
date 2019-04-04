// 二叉树的先序，中序，后序遍历

class TreeNode {
  value;
  left;
  right;

  constructor(value) {
    this.value;
    this.left = this.right = null;
  }
}

// 递归实现
function traversal(root: TreeNode) {
  if (root) {
    // 先序
    console.log(root.value);
    traversal(root.left);
    // 中序
    // console.log(root.value);
    traversal(root.right);
    // 后序
    // console.log(root.value);
  }
}
