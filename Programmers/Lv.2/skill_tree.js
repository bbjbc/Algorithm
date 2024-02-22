// 스킬트리와 관련 없는 스킬 제거
// 스킬트리에 있는 스킬들을 배열에 담아서 순서대로 비교
// 순서대로 비교해서 같으면 result++

// ⓐ 스킬트리 순서대로 비교하는 방법
function solution(skill, skill_trees) {
  let result = 0;
  skill = skill.split("");

  for (let st of skill_trees) {
    const a = [];
    let isValid = true;

    for (let s of st) {
      if (skill.includes(s)) {
        a.push(s);
      }
    }

    for (let i = 0; i < a.length; i++) {
      if (skill[i] !== a[i]) {
        isValid = false;
        break;
      }
    }

    if (isValid) result++;
  }

  return result;
}

// ⓑ 더 간단한 방법
function solution(skill, skill_trees) {
  let result = 0;
  skill = skill.split("");

  for (let st of skill_trees) {
    const a = [];

    for (let s of st) {
      if (skill.includes(s)) {
        a.push(s);
      }
    }

    // startsWith()로 걸러낼 수 있음.
    if (skill.join("").startsWith(a.join(""))) result++;
  }
  return result;
}
