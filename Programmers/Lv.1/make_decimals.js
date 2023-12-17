function solution(nums) {
  let count = 0;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        result.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  for (const a of result) {
    let s = true;
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) s = false;
    }
    count += s ? 1 : 0;
  }
  return count;
}
