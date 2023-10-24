function solution(arr) {
  const firstTwo = arr.indexOf(2);
  const lastTwo = arr.lastIndexOf(2);
  return arr.includes(2) ? arr.slice(firstTwo, lastTwo + 1) : [-1];
}

// lastIndexOf() - 메서드는 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다.
// IndexOf() - 인스턴스의 indexOf() 메서드는 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환합니다.
