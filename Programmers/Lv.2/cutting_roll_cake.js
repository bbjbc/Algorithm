// 1. 시간 복잡도를 줄이기 위한 방법임.
// 2. 좌측과 우측의 토핑 수를 넣을 배열을 생성
// 3. 좌측과 우측의 토핑 수를 비교하여 같다면 count++
// 4. count를 반환
// 5. 시간 복잡도는 O(n)

function solution(topping) {
  let count = 0;

  const leftCount = Array.from({ length: topping.length }).fill(0);
  const rightCount = Array.from({ length: topping.length }).fill(0);

  const leftSet = new Set();
  const rightSet = new Set();

  for (let i = 0; i < topping.length; i++) {
    leftSet.add(topping[i]);
    leftCount[i] = leftSet.size;
  }

  for (let i = topping.length - 1; i >= 0; i--) {
    rightSet.add(topping[i]);
    rightCount[i] = rightSet.size;
  }

  for (let i = 0; i < topping.length - 1; i++) {
    if (leftCount[i] === rightCount[i + 1]) {
      count++;
    }
  }

  return count;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); // 2

// ==================================== 아래 방법은 시간 초과

// 반복하면서 돌아. 잘라가면서. arr1 arr2가 있어.
// new Set을 통해 각 배열 중복 제거해.
// 각 배열의 길이가 같다면 공정하게 자른것임. result++

// function solution(topping) {
//   let result = 0;
//   const array = [];
//   for (let i = 1; i < topping.length - 1; i++) {
//     const arr1 = topping.slice(0, i);
//     const arr2 = topping.slice(i);
//     array.push([[...new Set(arr1)], [...new Set(arr2)]]);
//   }
//   console.log(array);
//   array.forEach((a) => {
//     if (a[0].length === a[1].length) {
//       result++;
//     }
//   });
//   return result;
// }
