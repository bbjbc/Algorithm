function solution(spell, dic) {
  let result = 0;
  let a = 0;
  for (let i = 0; i < dic.length; i++) {
    for (let j = 0; j < spell.length; j++) {
      if (dic[i].indexOf(spell[j]) === -1) a++;
    }
    a > 0 ? (result = 2) : (result = 1);
    a = 0;
    if (result === 1) break;
  }
  return result;
}

// some을 이용한 방법
// some() 메서드 - 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다.
// function solution(spell, dic) {
//     return dic.some(a=>spell.sort().toString()===[...a].sort().toString()) ? 1 : 2
// }
