// * Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */

// depth가 1이면 문제에서 말한대로 새 루트로 val 값을 사용하여 트리 노드를 만들고 원래 트리는 새 루트의 왼쪽 하위 트리이다.
// depth가 2이면 루트의 왼쪽과 오른쪽에 새 노드를 추가하고 원래 트리를 새 노드의 왼쪽과 오른쪽에 추가한다.
// 그렇지 않으면 재귀적으로 왼쪽과 오른쪽 하위 트리에 대해 함수를 호출한다.
// 마지막으로 루트를 반환한다.

var addOneRow = function (root, val, depth) {
  if (!root) {
    return root;
  }

  if (depth === 1) {
    const tree = new TreeNode(val);
    tree.left = root;
    return tree;
  }

  if (depth === 2) {
    const left = root.left;
    const right = root.right;
    root.left = new TreeNode(val);
    root.right = new TreeNode(val);
    root.left.left = left;
    root.right.right = right;
    return root;
  }

  root.left = addOneRow(root.left, val, depth - 1);
  root.right = addOneRow(root.right, val, depth - 1);

  return root;
};

console.log(addOneRow([4, 2, 6, 3, 1, 5], 1, 2)); // [4, 1, 1, 2, null, null, 6, 3, 1, 5]
console.log(addOneRow([4, 2, null, 3, 1], 1, 3)); // [4, 2, null, 1, 1, 3, null, null, 1]
