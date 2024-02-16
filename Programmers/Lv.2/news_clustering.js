function solution(str1, str2) {
  let gyo = 0,
    hap = 0;
  const set1 = splitString(str1);
  const set2 = splitString(str2);
  const multiSet = new Set([...set1, ...set2]);

  multiSet.forEach((m) => {
    const one = set1.filter((el) => el === m).length;
    const two = set2.filter((el) => el === m).length;
    hap += Math.max(one, two);
    gyo += Math.min(one, two);
  });
  const jaccard = hap === 0 ? 65536 : Math.floor((gyo / hap) * 65536);
  return jaccard;
}

function splitString(string) {
  let result = [];
  for (let i = 0; i < string.length - 1; i++) {
    let twoChar = string.slice(i, i + 2);
    if (twoChar.match(/[a-zA-Z]{2}/)) {
      result.push(twoChar.toUpperCase());
    }
  }
  return result;
}

// 통과되지 않은 이유 - 각 집합마다 중복 요소를 모두 1개로 만들어버림.
// 다중 집합의 중복 원소도 각 집합의 소중한 원소임. (없애지 말자)
// function solution(str1, str2) {
//   const set1 = splitString(str1);
//   const set2 = splitString(str2);
//   const hap = [...new Set([...set1, ...set2])]; // 합집합
//   const gyo = [...new Set(set1.filter((s) => set2.includes(s)))]; // 교집합
//   const jaccard =
//     hap.length === 0 ? 65536 : Math.floor((gyo.length / hap.length) * 65536);
//   return jaccard;
// }

// function splitString(string) {
//   let result = [];
//   for (let i = 0; i < string.length - 1; i++) {
//     let twoChar = string.slice(i, i + 2);
//     if (twoChar.match(/[a-zA-Z]{2}/)) {
//       result.push(twoChar.toUpperCase());
//     }
//   }
//   return result;
// }
