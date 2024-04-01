/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */

// 1. minK보다 작거나 maxK보다 큰 값이 나오면 leftIdx를 i로 갱신
// 2. minK와 maxK의 인덱스를 갱신
// 3. minK와 maxK의 인덱스 중 작은 값을 구하고 leftIdx를 빼준다.
// 4. count가 양수이면 result에 더해준다.
var countSubarrays = function (nums, minK, maxK) {
  let minIdx = -1;
  let maxIdx = -1;
  let leftIdx = -1;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // minK보다 작거나 maxK보다 크면 leftIdx를 i로 갱신
    if (nums[i] < minK || nums[i] > maxK) {
      leftIdx = i;
    }
    if (nums[i] === minK) {
      minIdx = i;
    }
    if (nums[i] === maxK) {
      maxIdx = i;
    }

    // 작은 값을 구하는 이유 → 더 작은 값이 배열의 시작점이 되어야 하기 때문
    let count = Math.min(maxIdx, minIdx) - leftIdx;
    if (count > 0) result += count;
  }

  return result;
};

console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)); // 2
