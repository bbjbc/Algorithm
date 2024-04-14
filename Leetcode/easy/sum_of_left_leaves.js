/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 왼쪽 자식이 존재하면 그 자식이 leaf node인지 확인하고, leaf node이면 값을 더함.
// leaf node가 아니면 다시 재귀적으로 호출.
// 오른쪽 자식도 같은 방식으로 호출.

var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0;
  }
  let sum = 0;

  if (root.left) {
    if (!root.left.left && !root.left.right) {
      sum += root.left.val;
    } else {
      sum += sumOfLeftLeaves(root.left);
    }
  }

  sum += sumOfLeftLeaves(root.right);

  return sum;
};
