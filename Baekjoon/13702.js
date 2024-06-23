// 1. mid를 통해 K명에게 나눌 수 있는지 판단.
// 2. 각 주전자의 용량을 mid로 나누어, 몇 명에게 나눌 수 있는지 count에 저장함.
// 3. count가 K보다 크거나 같으면, answer에 mid를 저장하고, left를 mid + 1로 변경함. → 더 큰 용량을 시도
// 4. 아니라면 right를 mid - 1로 변경함. → 더 작은 용량을 시도
// 5. left가 right보다 커질 때까지 반복함.
// 6. answer를 반환함.

function solution(N, K, capacties) {
  let answer = 0;
  let left = 1;
  let right = Math.max(...capacties);

  while (left <= right) {
    let count = 0;
    let mid = Math.floor((left + right) / 2);

    for (let i = 0; i < N; i++) {
      count += Math.floor(capacties[i] / mid);
    }

    if (count >= K) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
