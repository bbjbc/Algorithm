// \D : 숫자가 아닌 문자
// \d : 숫자
// \D+ : 숫자가 아닌 문자가 1개 이상
// \d+ : 숫자가 1개 이상
// i : 대소문자 구분 없이 매칭

function solution(files) {
  return files.sort((a, b) => {
    const getHeadAndNumber = (str) => {
      const regex = /(\D+)(\d+)/i; // 문자+숫자 패턴
      // const match = str.match(regex) // [ 'img12', 'img', '12', index: 0, input: 'img12.png', groups: undefined ]
      const [, head, number] = str.match(regex);
      return [head.toLowerCase(), parseInt(number)];
    };

    const [headA, numberA] = getHeadAndNumber(a);
    const [headB, numberB] = getHeadAndNumber(b);

    // headA가 headB보다 사전순으로 앞에 있으면
    if (headA < headB) {
      return -1;
    }
    // headA가 headB보다 사전순으로 뒤에 있으면
    else if (headA > headB) {
      return 1;
    }
    // headA와 headB가 같으면 숫자 오름차순으로 정렬
    else {
      return numberA - numberB;
    }
  });
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
