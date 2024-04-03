/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// 1. 중복된 값을 제거하기 위해 visited 사용
// 2. sum이 target과 같으면 result에 arr를 push.
// 3. sum이 target보다 크면 return
// 4. visited[i]가 true이거나 candidates[i] === candidates[i - 1] && !visited[i - 1]이면 continue
// 5. 4번을 하는 이유 → 중복된 값이 나오면 이전 값이 이미 사용되었는지 확인하기 위해서.
// 6. visited[i]를 true로 바꾸고 arr에 candidates[i]를 push한다.
// 7. dfs를 호출할 때 i + 1로 호출한다.
// 8. dfs를 호출한 후에는 visited[i]를 false로 바꿈 → 다음 dfs에서 사용할 수 있도록 (백트래킹)

var combinationSum2 = function (candidates, target) {
  const result = [];
  const arr = [];
  const visited = Array.from({ length: candidates.length }, () => false);

  candidates.sort((a, b) => a - b);

  const dfs = (start, sum) => {
    if (sum === target) {
      result.push([...arr]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      if (
        visited[i] ||
        (candidates[i] === candidates[i - 1] && !visited[i - 1])
      )
        continue;

      visited[i] = true;
      arr.push(candidates[i]);

      dfs(i + 1, sum + candidates[i]);

      arr.pop();
      visited[i] = false;
    }
  };

  dfs(0, 0);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1,1,6],[1,2,5],[1,7],[2,6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [[1,2,2],[5]]
