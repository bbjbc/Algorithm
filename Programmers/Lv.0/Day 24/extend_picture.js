function solution(picture, k) {
  const extend = picture.map((a) =>
    Array(k).fill(
      a
        .split("")
        .map((b) => b.repeat(k))
        .join("")
    )
  );
  console.log(extend);
  return extend.flat();
}

// flat() - 모든 하위 배열 요소가 지정된 깊이까지 재귀적으로 연결된 새 배열을 생성함
// default는 1임

// 'console.log(extend)'
// [
//     [ '..xxxx......xxxx..', '..xxxx......xxxx..' ],
//     [ 'xx....xx..xx....xx', 'xx....xx..xx....xx' ],
//     [ 'xx......xx......xx', 'xx......xx......xx' ],
//     [ '..xx..........xx..', '..xx..........xx..' ],
//     [ '....xx......xx....', '....xx......xx....' ],
//     [ '......xx..xx......', '......xx..xx......' ],
//     [ '........xx........', '........xx........' ]
//   ]

// 'console.log(extned.flat())'
// [
//     '..xxxx......xxxx..',
//     '..xxxx......xxxx..',
//     'xx....xx..xx....xx',
//     'xx....xx..xx....xx',
//     'xx......xx......xx',
//     'xx......xx......xx',
//     '..xx..........xx..',
//     '..xx..........xx..',
//     '....xx......xx....',
//     '....xx......xx....',
//     '......xx..xx......',
//     '......xx..xx......',
//     '........xx........',
//     '........xx........'
//   ]
