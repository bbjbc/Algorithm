// 키패드 배열
// [0,0] [0,1] [0,2]
// [1,0] [1,1] [1,2]
// [2,0] [2,1] [2,2]
// [3,0] [3,1] [3,2]
// 현재 왼손의 위치 - [3,0]
// 현재 오른손의 위치 - [3,2]

// 키패드 좌표 기준으로 거리 계산
function solution(numbers, hand) {
  const result = [];
  let leftHandPosition = [3, 0];
  let rightHandPosition = [3, 2];
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  const getDistance = (a, b) => {
    return Math.abs(a[1] - b[1]) + Math.abs(a[0] - b[0]);
  };

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      result.push("L");
      leftHandPosition = keypad[number];
    } else if (number === 3 || number === 6 || number === 9) {
      result.push("R");
      rightHandPosition = [Math.floor(number / 3) - 1, 2];
    } else {
      const leftGetDistance = getDistance(keypad[number], leftHandPosition);
      const rightGetDistance = getDistance(keypad[number], rightHandPosition);

      if (leftGetDistance < rightGetDistance) {
        result.push("L");
        leftHandPosition = keypad[number];
      } else if (leftGetDistance > rightGetDistance) {
        result.push("R");
        rightHandPosition = keypad[number];
      } else {
        if (hand === "right") {
          result.push("R");
          rightHandPosition = keypad[number];
        } else {
          result.push("L");
          leftHandPosition = keypad[number];
        }
      }
    }
  });
  return result.join("");
}

// 왜인지 모르겠는데 통과가 안됨.
// function solution(numbers, hand) {
//   const result = [];
//   let leftHandPosition = [3, 0];
//   let rightHandPosition = [3, 2];

//   const getDistance = (number, currentHandPosition) => {
//     const keypad = [
//       [3, 1],
//       [0, 0],
//       [0, 1],
//       [0, 2],
//       [1, 0],
//       [1, 1],
//       [1, 2],
//       [2, 0],
//       [2, 1],
//       [2, 2],
//     ];
//     const currentNumber = keypad[number];
//     return (
//       Math.abs(currentNumber[1] - currentHandPosition[1]) +
//       Math.abs(currentNumber[0] - currentHandPosition[0])
//     );
//   };

//   numbers.forEach((number) => {
//     if (number === 1 || number === 4 || number === 7) {
//       result.push("L");
//       leftHandPosition = [Math.floor(number / 3), 0];
//     } else if (number === 3 || number === 6 || number === 9) {
//       result.push("R");
//       rightHandPosition = [Math.floor(number / 3) - 1, 2];
//     } else {
//       const leftGetDistance = getDistance(number, leftHandPosition);
//       const rightGetDistance = getDistance(number, rightHandPosition);

//       if (leftGetDistance < rightGetDistance) {
//         result.push("L");
//         leftHandPosition = [Math.floor(number / 3), 1];
//       } else if (leftGetDistance > rightGetDistance) {
//         result.push("R");
//         rightHandPosition = [Math.floor(number / 3), 1];
//       } else {
//         if (hand === "right") {
//           result.push("R");
//           rightHandPosition = [Math.floor(number / 3), 1];
//         } else {
//           result.push("L");
//           leftHandPosition = [Math.floor(number / 3), 1];
//         }
//       }
//     }
//   });
//   return result.join("");
// }
