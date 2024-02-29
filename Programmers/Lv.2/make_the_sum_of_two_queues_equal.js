// 각 큐의 합을 구함.
// 큐끼리의 합의 절반을 target에 저장함.
// 큐1의 길이와 큐2의 길이의 합까지의 반복문을 돌림.
// target과 큐1의 합이 같은 경우, 작은 경우, 큰 경우로 나눔.
// shift() 연산은 시간 초과가 뜨기 때문에 인덱스를 이용하여 해결함.
// maxLen은 큐1과 큐2의 길이의 합 * 3 - 3으로 설정함. - 자세한 내용은 내 블로그 참조 바람.

function solution(queue1, queue2) {
  let count = 0;
  let isSame = false;
  let q1Index = 0,
    q2Index = 0;
  let maxLen = (queue1.length + queue2.length) * 3 - 3;

  let sumQueue1 = queue1.reduce((acc, curr) => acc + curr, 0);
  let sumQueue2 = queue2.reduce((acc, curr) => acc + curr, 0);
  let target = (sumQueue1 + sumQueue2) / 2;

  while (count < maxLen) {
    if (sumQueue1 === target) {
      isSame = true;
      return count;
    } else if (sumQueue1 < target) {
      const a = queue2[q2Index++];
      queue1.push(a);
      sumQueue1 += a;
    } else {
      const a = queue1[q1Index++];
      queue2.push(a);
      sumQueue1 -= a;
    }

    count++;
  }

  return isSame ? count : -1;
}
