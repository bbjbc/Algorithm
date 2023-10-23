function solution(my_string) {
  let result = Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    let c = my_string.charCodeAt(i);
    // console.log(c);

    if (c >= 65 && c <= 90) {
      result[c - 65] += 1;
    } else if (c >= 97 && c <= 122) {
      result[c - 97 + 26] += 1;
    }
    console.log(result);
  }
  return result;
}

// charCodeAt()은 문자열중 하나를 선택하여 아스키코드 번호로 변환해주는 함수
