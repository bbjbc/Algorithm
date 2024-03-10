// 배열을 오름차순으로 정렬
// 계산의 편의성을 위해서 시간을 분으로 변경(10분 청소 시간까지 추가해줌.)
// 이제 예약 처리 과정을 진행
// 예약 가능한 방이 있는지 확인하기 위해 isContinue 변수 사용
// 내부 반복문에서는 현재 예약 요청의 시작 시간과 각 방의 종료 시간을 비교하여 예약 가능한 방을 찾음
// 예약 가능한 방이 있다면 해당 방에 예약을 할당하고 isContinue 변수를 true로 설정한 후 내부 반복문 종료
// 예약 가능한 방이 없다면 isContinue 변수는 false이므로 새로운 방을 추가
// 예약 가능한 방이 있는지 확인하는 과정을 모든 예약 요청에 대해 반복

function solution(book_time) {
  const room = [];
  const arr = [];
  const bookingTime = book_time.sort();

  // 시간을 분으로 변환
  for (let i = 0; i < bookingTime.length; i++) {
    let [startHour, startMin] = bookingTime[i][0].split(":");
    let [endHour, endMin] = bookingTime[i][1].split(":");
    let startTime = parseInt(startHour) * 60 + parseInt(startMin);
    let endTime = parseInt(endHour) * 60 + (parseInt(endMin) + 10);

    arr.push([startTime, endTime]);
  }
  // console.log(arr)
  // [
  //   [ 850, 1170 ],
  //   [ 860, 930 ],
  //   [ 900, 1030 ],
  //   [ 1000, 1110 ],
  //   [ 1100, 1290 ]
  // ]

  // 예약 처리 과정
  for (let i = 0; i < arr.length; i++) {
    let isContinue = false;

    for (let j = 0; j < room.length; j++) {
      if (arr[i][0] >= room[j][1]) {
        isContinue = true;
        room[j] = arr[i];
        break;
      }
    }
    if (!isContinue) {
      room.push(arr[i]);
    }
  }

  return room.length;
}

console.log(
  solution([
    ["14:10", "19:20"],
    ["14:20", "15:20"],
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["18:20", "21:20"],
  ])
);
