// 1 - 빵, 2 - 야채, 3 - 고기
// 완전한 햄버거 -> 1-2-3-1
// 반복문을 순회하며 arr에 요소 삽입.
// 스택의 윗부분에서 4개를 자르는 slice(-4)를 사용하여 붙인값이 1231인지 확인.
// 맞으면 count 올려주고, 1231이었던 것은 splice를 사용하여 제거해줌.

// 1. 새로운 배열에 삽입하여 비교
function solution(ingredient) {
  let count = 0;
  const arr = [];

  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);

    if (arr.slice(-4).join("") === "1231") {
      count++;
      // arr.splice(-4)
      for (let i = 0; i < 4; i++) {
        arr.pop();
      }
    }
  }

  return count;
}

// 2. 기존 배열에서 비교 - 시간이 오래 걸림. 왜 그럴까? 인덱스를 계속해서 재설정하기 때문.
function solution(ingredient) {
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      count++;
      ingredient.splice(i, 4);
      i -= 3;
    }
  }

  return count;
}
