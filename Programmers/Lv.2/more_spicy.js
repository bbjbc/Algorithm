// 최소 힙(Min Heap): 부모 노드의 값이 자식 노드의 값보다 작거나 같은 완전 이진 트리이다.
// 최소 힙을 이용하는 경우 '값이 낮은 데이터가 먼저 삭제'됨
// 왼쪽 자식의 index = 부모의 index * 2 + 1
// 오른쪽 자식의 index = (부모의 index * 2) + 2
// 부모의 index = Math.floor((자식의 index - 1) / 2)

// 최소 힙을 통해 시도해 보았지만 몇 개의 테스트 케이스는 오류가 발생했고 효율성 측면에서도 모두 시간 초과가 발생한다.
const solution = (scoville, K) => {
  let count = 0;

  // 최소 힙 로직
  const minHeap = (arr, currentIndex) => {
    let parentIndex;
    while (currentIndex > 0) {
      parentIndex = Math.floor((currentIndex - 1) / 2);
      if (arr[currentIndex] >= arr[parentIndex]) break;
      [arr[currentIndex], arr[parentIndex]] = [
        arr[parentIndex],
        arr[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  };

  for (let i = Math.floor(scoville.length / 2) - 1; i >= 0; i--) {
    minHeap(scoville, i);
  }

  while (scoville[0] < K && scoville.length > 1) {
    const first = scoville[0];
    const second = scoville[1];
    const mix = first + second * 2;
    scoville.splice(0, 2);

    let newIndex = scoville.length;
    scoville.push(mix);
    minHeap(scoville, newIndex);
    count++;
  }

  if (scoville[0] < K && scoville.length === 1) return -1;
  return count;
};

// TC는 모두 통과했지만 효율성 테스트에서 모두 시간 초과. (Heap을 사용해야 하는듯)
// function solution(scoville, K) {
//   let count = 0;
//   scoville.sort((a, b) => a - b);

//   while (scoville[0] < K) {
//     if (scoville.length < 2) {
//       return -1;
//     }

//     let mixed = scoville[0] + scoville[1] * 2;
//     scoville.splice(0, 2);
//     scoville.push(mixed);
//     scoville.sort((a, b) => a - b);
//     count++;
//   }
//   return count;
// }
