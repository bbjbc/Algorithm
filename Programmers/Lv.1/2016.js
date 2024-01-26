// new Date() 사용
// function solution(a, b) {
//     const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
//     let date = new Date(`2016-${a}-${b}`).getDay()
//     return week[date]
// }

// 객체 사용
function solution(a, b) {
  let answer = "";
  let days = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let months = {
    29: [2],
    30: [4, 6, 9, 11],
    31: [1, 3, 5, 7, 8, 10, 12],
  };
  let sum = 0;
  for (let day in months) {
    months[day].forEach((m) => {
      if (m < a) {
        sum += Number(day);
      }
    });
  }
  let checkedNum = (sum + b) % 7;
  answer = days[checkedNum];
  return answer;
}
