/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 1. 시간이 너무 오래 걸림.
// 이중 포문을 통해서 해결
// product 변수에 값을 곱해가면서 k보다 작은 경우 count를 증가시킴
// product가 k보다 커지면 break
// 시간 복잡도가 O(n^2)이기 때문에 시간이 너무 오래 걸림
var numSubarrayProductLessThanK = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = i; j < nums.length; j++) {
      product *= nums[j];

      if (product < k) {
        count++;
      } else break;
    }
  }

  return count;
};

// 2. Two Pointers 방법
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0; // k가 1보다 작거나 같은 경우, 부분 배열의 곱이 k보다 작을 수 없습니다.

  let count = 0;
  let start = 0;
  let product = 1;

  for (let end = 0; end < nums.length; end++) {
    product *= nums[end]; // 끝점을 오른쪽으로 이동하면서 현재 부분 배열의 곱 갱신

    while (product >= k) {
      // 현재 부분 배열의 곱이 k 이상일 때 시작점 이동
      product /= nums[start];
      start++;
    }

    count += end - start + 1; // 가능한 부분 배열의 수는 (끝점 - 시작점 + 1)
  }

  return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
