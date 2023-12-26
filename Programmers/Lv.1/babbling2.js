function solution(babbling) {
  const arr = [];
  let result = 0;
  for (let i = 0; i < babbling.length; i++) {
    let a = babbling[i];
    a = a.replaceAll("aya", "1");
    a = a.replaceAll("ye", "2");
    a = a.replaceAll("woo", "3");
    a = a.replaceAll("ma", "4");

    let continueNum = false;
    for (let j = 0; j < a.length; j++) {
      if (a[j] === a[j + 1]) {
        continueNum = true;
        break;
      }
    }
    let regEx = /^[1-4]+$/;
    if (!continueNum && regEx.test(a)) result++;
  }
  return result;
}

// test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환합니다.
