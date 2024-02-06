function solution(N, stages) {
  const countUser = {};
  const failRate = {};
  const sorting = stages.sort((a, b) => a - b);
  let user = sorting.length;

  // 각 stage 당 user 수
  for (let i = 0; i < sorting.length; i++) {
    countUser[sorting[i]] = (countUser[sorting[i]] || 0) + 1;
  }

  // 실패율 계산
  for (let i = 1; i <= N; i++) {
    const stagePlayer = countUser[i] || 0;
    if (stagePlayer === 0) {
      failRate[i] = 0;
    } else {
      failRate[i] = stagePlayer / user;
      user -= stagePlayer;
    }
  }

  // 실패율 객체의 키 값 정렬
  const failure = Object.keys(failRate).sort((a, b) => {
    if (failRate[a] !== failRate[b]) {
      return failRate[b] - failRate[a];
    } else {
      return a - b;
    }
  });

  return failure.map((f) => +f);
}

// 리팩토링
// function solution(N, stages) {
//   const countUser = {};
//   const failRate = {};
//   let user = stages.length;

//   // 정렬 과정 대신 인원 수만 파악하면 됨.
//   stages.forEach((stage) => (countUser[stage] = (countUser[stage] || 0) + 1));

//   // 실패율 계산
//   for (let i = 1; i <= N; i++) {
//     const stagePlayer = countUser[i] || 0;
//     if (stagePlayer === 0) {
//       failRate[i] = 0;
//     } else {
//       failRate[i] = stagePlayer / user;
//       user -= stagePlayer;
//     }
//   }

//   // 실패율 객체의 키 값 정렬
//   const failure = Object.keys(failRate).sort((a, b) => {
//     if (failRate[a] !== failRate[b]) {
//       return failRate[b] - failRate[a];
//     }
//     return a - b;
//   });

//   return failure.map(Number);
// }
