// 1. 총 지불 비용을 계산하는 함수를 만듦.
// 2. 계산하기 편하게 시간을 분으로 변환하는 함수를 만듦.
// 3. records를 순회하며 주차장 이용 기록을 저장함.
// 4. 주차장 이용 기록을 순회하며 총 지불 비용을 계산함.
// 5. 문제 요구사항에 맞게 자동차 번호대로 오름차순으로 정렬함.
// 6. 출차하지 않은 차량에 대해 마지막 시간을 lastTime으로 설정하고 총 지불 비용을 계산함.

// 1. 올바른 풀이
function solution(fees, records) {
  const parking = {};
  const lastTime = 23 * 60 + 59;
  const [baseTime, baseFee, unitTime, unitFee] = fees;

  // 총 지불 비용 계산
  const calcFee = (time) => {
    if (time <= baseTime) return baseFee;
    return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
  };

  // 시간 분으로 변환
  const calcTime = (time) => {
    const [HH, MM] = time.split(":");
    return parseInt(HH) * 60 + parseInt(MM);
  };

  // 주차장 이용 기록
  records.forEach((record) => {
    const [time, carNumber, flag] = record.split(" ");
    const t = calcTime(time);
    parking[carNumber] = parking[carNumber] || {
      totalTime: 0,
      fee: 0,
      lastInTime: null,
    };

    if (flag === "IN") {
      parking[carNumber].lastInTime = t;
    } else {
      parking[carNumber].totalTime += t - parking[carNumber].lastInTime;
      parking[carNumber].lastInTime = null;
    }
  });

  const carNums = Object.keys(parking).sort((a, b) => a - b);
  const answer = carNums.map((carNumber) => {
    if (parking[carNumber].lastInTime !== null) {
      parking[carNumber].totalTime += lastTime - parking[carNumber].lastInTime;
    }
    return calcFee(parking[carNumber].totalTime);
  });

  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);

// 2. 입차 시간이 00:00일 경우 0으로 계산되는 문제의 풀이 → lastInTime을 0이 아니나 null로 초기화 해야 함.
// function solution(fees, records) {
//   const parking = {};
//   const lastTime = 23 * 60 + 59;
//   const [baseTime, baseFee, unitTime, unitFee] = fees;

//   // 총 지불 비용 계산
//   const calcFee = (time) => {
//     if (time <= baseTime) return baseFee;
//     return baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee;
//   };

//   // 시간 분으로 변환
//   const calcTime = (time) => {
//     const [HH, MM] = time.split(":");
//     return parseInt(HH) * 60 + parseInt(MM);
//   };

//   records.forEach((record) => {
//     const [time, carNumber, flag] = record.split(" ");
//     const t = calcTime(time);
//     parking[carNumber] = parking[carNumber] || {
//       totalTime: 0,
//       fee: 0,
//       lastInTime: 0,
//     };

//     if (flag === "IN") {
//       parking[carNumber].lastInTime = t;
//     } else {
//       parking[carNumber].totalTime += t - parking[carNumber].lastInTime;
//       parking[carNumber].lastInTime = 0;
//     }
//   });
//   console.log(parking);

//   const carNums = Object.keys(parking).sort((a, b) => a - b);
//   const answer = carNums.map((carNumber) => {
//     if (parking[carNumber].lastInTime !== 0) {
//       parking[carNumber].totalTime += lastTime - parking[carNumber].lastInTime;
//     }
//     return calcFee(parking[carNumber].totalTime);
//   });

//   return answer;
// }

// console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
