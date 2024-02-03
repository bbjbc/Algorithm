function solution(clothes) {
  let answer = 1;
  const clothesType = {};
  clothes.forEach((c) => {
    const type = c[1];
    if (clothesType[type] === undefined) {
      clothesType[type] = [c[0]];
    } else {
      clothesType[type].push(c[0]);
    }
  });
  Object.values(clothesType).forEach((o) => {
    answer *= o.length + 1;
  });
  answer -= 1;
  return answer;
}

// 리팩토링 후 - 값에 대한 카운트만 알면 됨.
// function solution(clothes) {
//   let answer = 1;
//   const clothesType = {};
//   for (let c of clothes) {
//     clothesType[c[1]] = (clothesType[c[1]] || 0) + 1;
//   }
//   // { headgear: 2, eyewear: 1 }
//   for (let o in clothesType) {
//     answer *= clothesType[o] + 1;
//   }
//   return answer - 1;
// }
