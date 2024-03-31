/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// ⓐ 시간초과
var subarraysWithKDistinct = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let numSet = new Set();

    for (let j = i; j < nums.length; j++) {
      numSet.add(nums[j]);

      if (numSet.size === k) {
        count++;
      } else if (numSet.size > k) {
        break;
      }
    }
  }

  return count;
};

// ⓑ 이것마저 시간초과 (슬라이딩 윈도우)
var subarraysWithKDistinct = function (nums, k) {
  function most(nums, k) {
    const freq = {};
    let left = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
      freq[nums[right]] = (freq[nums[right]] || 0) + 1;

      while (Object.keys(freq).length > k) {
        freq[nums[left]]--;
        if (freq[nums[left]] === 0) {
          delete freq[nums[left]];
        }
        left++;
      }

      count += right - left + 1;
    }

    return count;
  }

  // most(nums, k) → 서로 다른 정수가 최대 k개인 부분 배열의 수를 반환
  // most(nums, k - 1) → 서로 다른 정수가 최대 k - 1개인 부분 배열의 수를 반환
  // 따라서, most(nums, k) - most(nums, k - 1) → 서로 다른 정수가 exactly k개인 부분 배열의 수를 반환
  return most(nums, k) - most(nums, k - 1);
};

// ⓒ 시간초과 해결
// Object.keys(freq).length 대신에 윈도우 내의 서로 다른 숫자의 개수를 추적하는 변수를 사용
// freq 객체를 삭제하거나 수정하는 대신에 윈도우 내의 숫자의 개수를 직접 업데이트
// 특히 Object.keys(freq).length를 호출하는 부분에서 매번 freq 객체의 키 배열을 생성하는 것은 비효율적일 수 있음. 또한 매번 delete 연산을 수행하여 객체를 업데이트하기 때문에 시간이 소요
var subarraysWithKDistinct = function (nums, k) {
  function most(nums, k) {
    const freq = {};
    let left = 0;
    let count = 0;
    let distinctCount = 0;

    for (let right = 0; right < nums.length; right++) {
      if (!freq[nums[right]]) {
        distinctCount++;
      }
      freq[nums[right]] = (freq[nums[right]] || 0) + 1;

      while (distinctCount > k) {
        freq[nums[left]]--;
        if (freq[nums[left]] === 0) {
          distinctCount--;
        }
        left++;
      }

      count += right - left + 1;
    }

    return count;
  }

  return most(nums, k) - most(nums, k - 1);
};

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3));
