function solution(progresses, speeds) {
  const arr = [];
  const counts = {};
  const result = [];

  // 개발에 걸리는 일 수
  for (let i = 0; i < progresses.length; i++) {
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);
    arr.push(day);
  }

  // 전단계 개발이 안끝났다면 복사
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      arr[i + 1] = arr[i];
    }
  }

  // 일 수의 카운팅
  arr.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  });

  // 카운팅결과 push
  Object.values(counts).forEach((c) => {
    result.push(c);
  });

  return result;
}
