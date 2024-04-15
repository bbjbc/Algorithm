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

// 노드가 리프노드라면 루트노드와 리프노드 사이의 경로를 문자열로 만들고 숫자로 변환하여 더함
// 리프노드가 아니라면 왼쪽 자식과 오른쪽 자식을 재귀적으로 호출

var sumNumbers = function (root) {
  let sum = 0;

  const dfs = (num, node) => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      sum += parseInt(num + node.val);
    } else {
      if (node.left) {
        dfs(num + node.val, node.left);
      }
      if (node.right) {
        dfs(num + node.val, node.right);
      }
    }
  };

  dfs("", root);
  return sum;
};

console.log(sumNumbers([1, 2, 3])); // 25
console.log(sumNumbers([4, 9, 0, 5, 1])); // 1026
