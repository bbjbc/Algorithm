function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}
// 숫자 오름차순 정렬 : a-b
// 숫자 내림차순 정렬 : b-a
