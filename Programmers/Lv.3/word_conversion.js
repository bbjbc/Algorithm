// 깊이 우선 탐색
// 1. 깊이 우선 탐색으로 해결하였음.
// 2. 방문한 단어를 저장하는 visited 배열과 탐색할 단어를 저장하는 queue 배열을 사용함.
// 3. queue 배열에서 shift()로 하나씩 빼서 탐색하며, target과 같은 단어가 나오면 count를 반환함.
// 4. 단어를 비교할 때, 한 글자만 다른 단어를 찾아야 하므로 notEqual 변수를 사용함.
// 5. notEqual이 1이면 queue에 추가하고, visited에 추가함.
// 6. visited에 추가한 단어는 다시 탐색하지 않도록 함.
// 7. target과 같은 단어가 나오면 count를 반환함.
// 8. target이 없으면 0을 반환함.

function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  let queue = [];

  if (!words.includes(target)) return 0;
  queue.push([begin, answer]);

  while (queue) {
    let [v, count] = queue.shift();
    if (v === target) return count;

    words.forEach((word) => {
      let notEqual = 0;
      if (visited.includes(word)) return;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) notEqual++;
      }
      if (notEqual === 1) {
        queue.push([word, ++count]);
        visited.push(word);
      }
    });
  }

  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
