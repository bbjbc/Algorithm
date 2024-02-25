// 무게 한계치에 못미친다 - passingBridge에 대기트럭.shift() 값 삽입
// 무게 한계치보다 크다 - 임의의 0 삽입
// shift() 연산 존재하니 대기 트럭의 길이가 0보다 커야함
// 다리를 건너는 트럭이 존재하지 않을 때까지 반복함

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridgeWeight = 0; // 다리 위 트럭의 무게
  let passingBridge = new Array(bridge_length).fill(0); // 다리를 건너는 트럭 배열

  while (passingBridge.length > 0) {
    bridgeWeight -= passingBridge.shift();

    if (truck_weights.length > 0) {
      if (truck_weights[0] + bridgeWeight <= weight) {
        bridgeWeight += truck_weights[0];
        passingBridge.push(truck_weights.shift());
      } else {
        passingBridge.push(0);
      }
    }

    time++;
  }

  return time;
}
