/**
 * @param {number[]} height
 * @return {number}
 */

// two pointers를 활용하여 해결함
// 높이 배열에서 왼쪽과 오른쪽에 포인터를 두고 시작.
// 두 포인터가 가리키는 높이 중 작은 높이를 택함. → 물이 차는 높이는 작은 높이에 의해 결정되기 때문.
// 높이가 작은 쪽의 포인터를 이동시키면서 물이 차는 양을 계산함.
// 양쪽 포인터가 만날 때까지 반복함.

var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let temp = 0;
  let temp2 = 0;
  let count = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= temp) {
        temp = height[left];
      } else {
        count += temp - height[left];
      }
      left++;
    } else {
      if (height[right] >= temp2) {
        temp2 = height[right];
      } else {
        count += temp2 - height[right];
      }
      right--;
    }
  }

  return count;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
