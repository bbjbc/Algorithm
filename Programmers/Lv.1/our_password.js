// 문자 -> 아스키코드 : charCodeAt()
// 아스키코드 -> 문자 : fromCharCode()
// 알파벳 소문자 아스키코드 97~122 (총 26개)

// s와 skip을 각각 배열로 만들어서 각각의 문자를 아스키코드로 변환한다.
// index의 크기만큼 순회하며 char 값을 소문자 범위를 넘어가지 않도록 올려준다.
// 만약 skip에 포함된 문자라면 다음 문자로 넘어가도록 한다.
// 넘어갈 때도 소문자 범위를 넘어가지 않도록 올려준다.
// 그리고 다시 문자로 변환하여 result에 저장한다.

function solution(s, skip, index) {
  let result = "";
  let arr = [];

  s = [...s].map((a) => a.charCodeAt(a));
  skip = [...skip].map((a) => a.charCodeAt(a));

  for (let char of s) {
    for (let i = 0; i < index; i++) {
      char = ((char - 97 + 1) % 26) + 97;

      for (let j = 0; j < skip.length; j++) {
        if (skip.includes(char)) {
          char = ((char - 97 + 1) % 26) + 97;
        }
      }
    }

    arr.push(char);
  }

  arr.forEach((a) => {
    result += String.fromCharCode(a);
  });

  return result;
}
