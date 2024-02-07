function solution(phone_book) {
  const arr = phone_book.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    let slicing = arr[i + 1].slice(0, arr[i].length);
    if (arr[i] === slicing) {
      return false;
    }
  }
  return true;
}

// ["119", "97674223", "1195524421"]
// 1. const arr = phone_book.sort(); - ["119", "1195524421", "97674223"]
// 2. const arr2 = phone_book.sort((a, b) => a - b); - ["119", "97674223", "1195524421"]

// 1번
// 배열을 알파벳순으로 정렬하려고 함. 기본 정렬 메서드인 sort()를 사용하여 정렬되고
// 이 메서드는 기본적으로 문자열을 유니코드 코드 포인트 순서로 정렬함.
// 숫자 문자열이라면, 일반적인 문자열로 간주해서 문자열 순으로 정렬함. 숫자가 아스키 값으로 변환되어 비교함.

// 2번
// 배열을 숫자로 변환하여 숫자 순서로 정렬함.
// 비교 함수는 두 개의 인수를 통해 비교하여 정렬 순서를 결정함.
// 숫자로 변환하여 비교하므로 크기 순서로 정렬됨.
