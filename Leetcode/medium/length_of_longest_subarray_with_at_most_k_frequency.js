/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// sliding window
// 1. left, right 포인터를 이용해 윈도우를 이동시킴
// 2. right 포인터를 이동시키면서 count 객체에 숫자의 개수를 저장함
// 3. left 포인터를 이동시키면서 count 객체에 저장된 숫자의 개수가 k를 초과하면 left 포인터를 이동시킴
// 4. maxLength를 갱신함
// 5. right 포인터가 nums.length까지 이동하면 종료함

var maxSubarrayLength = function (nums, k) {
  const count = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    count[nums[right]] = (count[nums[right]] || 0) + 1;

    while (count[nums[right]] > k) {
      count[nums[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2));
