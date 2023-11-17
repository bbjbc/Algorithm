function solution(array) {
  let result = 0;
  const arr = array.map(String); // 숫자 배열을 문자열 배열로 변환

  for (let i = 0; i < arr.length; i++) {
    const strNum = arr[i];
    for (let j = 0; j < strNum.length; j++) {
      if (strNum[j] === "7") result++;
    }
  }
  return result;
}
