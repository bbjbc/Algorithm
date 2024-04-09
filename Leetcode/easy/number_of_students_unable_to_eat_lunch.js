/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

// 1. 학생들이 먹을 수 있는 샌드위치의 개수를 반환하는 문제
// 2. 스택 맨 위 값이 동일할 경우 양쪽에서 shift()
// 3. 다르면, 뺀 것 맨 아래로 넣어주고 count++
// 4. count가 배열 길이만큼 돌면 끝냄

var countStudents = function (students, sandwiches) {
  let count = 0;

  while (sandwiches.length) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      count = 0;
    } else {
      students.push(students.shift());
      count++;
      if (count === students.length) {
        break;
      }
    }
  }

  return students.length;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
