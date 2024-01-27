// 서로 다른 포켓몬 비교해서 새로운 배열에 push
function solution(nums) {
  const get1 = nums.length / 2;
  const sorting = nums.sort((a, b) => a - b);
  const arr = [];
  for (let i = 0; i < sorting.length; i++) {
    if (arr.length >= get1) break;
    if (i === 0 || sorting[i] !== sorting[i - 1]) {
      arr.push(sorting[i]);
    }
  }
  return arr.length;
}

// Set()을 사용하여 서로 다른 폰케몬과 n/2 비교
// function solution(nums){
//     const another = new Set(nums).size // 서로 다른 수의 개수
//     const get1 = nums.length/2
//     return Math.min(get1,another)
// }
