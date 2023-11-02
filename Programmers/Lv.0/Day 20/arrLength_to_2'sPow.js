function solution(arr) {
  let len = arr.length;
  let num = 0;
  while (Math.pow(2, num) < len) num++;
  for (let i = 0; i < Math.pow(2, num) - len; i++) {
    arr.push(0);
  }
  return arr;
}
// arr.length로 사용하려 했지만 arr.push하면 arr.length는 재평가가 되어 만족할 수 없기에
// 변수를 선언하고 사용해야 함
