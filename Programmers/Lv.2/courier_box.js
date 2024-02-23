// TC 이해하기 (4-3-1-2-5)
// 상자를 순서대로 실음. 예를 들어 3개면 [1,2,3] (1이 가장 오래됨)
// 4번 택배는 꺼내서 바로 트럭에 실으면됨.
// 그리고 3번을 택배기사가 요청 하심. 보조벨트에서 3번 꺼낼 수 있음
// 다음은 1번을 꺼내야 하는데 2번이 막고 있음.
// 결국 택배에 실을 수 있는 것은 3, 4번 2개뿐임.

// 영재는 1부터 순서대로 벨트에 두게 됨.
// 배열에 순서대로 삽입
// 삽입하면서 order의 맨 앞부터 arr에 마지막 요소와 비교
// 단, order의 요소는 arr과 비교했을 때 같을 때까지 진행함
// 만약 같다면 arr에서 그 요소를 pop 해주면 됨.

function solution(order) {
  let result = 0;
  const arr = [];

  for (let i = 1; i <= order.length; i++) {
    arr.push(i);

    while (arr[arr.length - 1] === order[result] && arr.length > 0) {
      arr.pop();
      result++;
    }
  }

  return result;
}
