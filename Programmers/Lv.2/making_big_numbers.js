// 값을 비교해 가면서 작은 값을 추출 해야 함.
// number를 순회하며 arr의 마지막 원소가 number값보다 작으면 pop()
// pop() 했으니 k도 감소 시킴.
// 그게 아니라면 arr에 push()
// "3333222111" 과 같은 TC가 있기 때문에 k가 남아있을 수 있음.
// 그래서 k가 남아있으면 k만큼 arr에서 pop() 해줌.
// 그리고 arr를 join() 해서 리턴.

// 처음에는 그냥 가장 작은 값 제일 두 개 빼서 크게 만들기 문제 인 줄 알았음.
// 그게 아니더라.

function solution(number, k) {
  const arr = [];

  for (let i = 0; i < number.length; i++) {
    while (arr[arr.length - 1] < number[i] && k) {
      arr.pop();
      k--;
    }
    arr.push(number[i]);
  }

  if (k) {
    for (let i = 0; i < k; i++) {
      arr.pop();
    }
  }

  return arr.join("");
}
