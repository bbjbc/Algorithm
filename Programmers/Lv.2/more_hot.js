// 최소 힙(Min Heap): 부모 노드의 값이 자식 노드의 값보다 작거나 같은 완전 이진 트리이다.
// 최소 힙을 이용하는 경우 '값이 낮은 데이터가 먼저 삭제'됨
// 왼쪽 자식의 index = 부모의 index * 2 + 1
// 오른쪽 자식의 index = (부모의 index * 2) + 2
// 부모의 index = Math.floor((자식의 index - 1) / 2)

// 1. 올바른 풀이
function solution(scoville, K) {
  let count = 0;
  const heap = new MinHeap(scoville);

  while (heap.peek() < K) {
    if (heap.size() === 1) return -1;

    const first = heap.poll();
    const second = heap.poll();
    const mix = first + second * 2;
    heap.add(mix);
    count++;
  }

  return count;
}

class MinHeap {
  constructor(arr = []) {
    this.heap = [];
    arr.forEach((item) => this.add(item));
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] >= this.heap[parentIndex]) break;
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  bubbleDown() {
    let currentIndex = 0;
    while (true) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      let smallestChildIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (
        leftChildIndex >= this.heap.length ||
        this.heap[currentIndex] <= this.heap[smallestChildIndex]
      ) {
        break;
      }

      this.swap(currentIndex, smallestChildIndex);
      currentIndex = smallestChildIndex;
    }
  }
}

// 2. 시간 초과 풀이
function solution(scoville, K) {
  let count = 0;
  scoville.sort((a, b) => a - b);

  while (scoville[0] < K) {
    if (scoville.length === 1) return -1;

    let first = scoville.shift();
    let second = scoville.shift();

    scoville.push(first + second * 2);
    scoville.sort((a, b) => a - b);
    count++;
  }
  return count;
}
