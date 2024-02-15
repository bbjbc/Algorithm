// 각 배열에서 서로 중복되는 값 제거 -> 중복되면 어차피 자신이 쓸거니까.
// lost에 있는 값 쁠마1 === reserve에 있는 값 이면 lost에서 shift()
// 전체 학생 수 n - lost의 길이
// result

// 방법 1
function solution(n, lost, reserve) {
  let result = 0;
  let filterLost = lost
    .filter((el) => !reserve.includes(el))
    .sort((a, b) => a - b);
  let filterReserve = reserve
    .filter((el) => !lost.includes(el))
    .sort((a, b) => a - b);

  for (let i = 0; i < filterLost.length; i++) {
    for (let j = 0; j < filterReserve.length; j++) {
      if (
        filterLost[i] + 1 === filterReserve[j] ||
        filterLost[i] - 1 === filterReserve[j]
      ) {
        filterLost.shift();
      }
    }
  }
  result = n - filterLost.length;
  return result;
}

// 방법 2
function solution(n, lost, reserve) {
  let filterLost = lost
    .filter((el) => !reserve.includes(el))
    .sort((a, b) => a - b);
  let filterReserve = reserve
    .filter((el) => !lost.includes(el))
    .sort((a, b) => a - b);

  const reserveSet = new Set(filterReserve);

  filterLost = filterLost.filter((student) => {
    // student-1의 학생 여부 판단 후 있다면 제거
    if (reserveSet.has(student - 1)) {
      reserveSet.delete(student - 1);
      return false;
      // student+1의 학생 여부 판단 후 있다면 제거
    } else if (reserveSet.has(student + 1)) {
      reserveSet.delete(student + 1);
      return false;
    }
    return true;
  });

  return n - filterLost.length;
}
