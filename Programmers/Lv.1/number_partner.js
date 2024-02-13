function solution(X, Y) {
  const x = [...X];
  const y = [...Y];
  const countX = {};
  const countY = {};
  const arr = [];

  // x, y 안에 각자 원소 개수 카운트
  x.forEach((i) => {
    countX[i] = (countX[i] || 0) + 1;
  });

  y.forEach((i) => {
    countY[i] = (countY[i] || 0) + 1;
  });

  // 같은 숫자 뽑기 (같은 숫자를 뽑아도 중복값이 필요할 때도 있고 아닐 때도 있음)
  // 각자 갖고 있는 같은 숫자에서 최솟값을 뽑아야함.
  // Set으로 중복처리 하려 했다가 상황에 따라 중복처리 해야해서 로직 엎음.
  for (let num in countX) {
    if (num in countY) {
      const minCount = Math.min(countX[num], countY[num]);
      for (let i = 0; i < minCount; i++) {
        arr.push(num);
      }
    }
  }
  // 가장 큰 수이므로 내림차순 정렬
  arr.sort((a, b) => b - a);

  if (arr.length === 0) return "-1";
  // "00"인 경우가 발생하더라. 이 경우 따로 처리.
  // 처음에는 String(Number(arr.join(''))) 이렇게 처리했다가 TC가 고정적으로 통과가 안됨.
  // (3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.) ← 이 조건 때문인듯.
  // 300만 x 300만 까지 될 수가 있어서 int 허용범위를 넘어섬. (int 범위 : -2,147,483,648 ~ 2,147,483,647)
  // 그래서 형 변환을 하지말고 따로 처리를 아래와 같이 해주면 됨.
  if (arr[0] === "0") return "0";

  return arr.join("");
}
