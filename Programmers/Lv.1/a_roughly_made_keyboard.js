// 각 target에 대해 count를 초기화.
// 각 target의 문자를 순회하며 keymap에서 최소 인덱스를 찾음.
// 문자가 keymap의 어떤 keyWord에도 없으면 -1을 반환.
// 문자가 있으면 최소 인덱스를 count에 더함.

function solution(keymap, targets) {
  const resultArr = targets.map((target) => {
    let count = 0;

    for (let i = 0; i < target.length; i++) {
      let minIdx = Infinity;
      let flag = false;

      keymap.forEach((keyWord) => {
        const index = keyWord.indexOf(target[i]);
        if (index !== -1) {
          flag = true;
          minIdx = Math.min(minIdx, index);
        }
      });

      if (flag) {
        count += minIdx + 1;
      } else {
        return -1;
      }
    }
    return count;
  });

  return resultArr;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]
