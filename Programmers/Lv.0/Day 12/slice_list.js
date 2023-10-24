function solution(n, slicer, num_list) {
  if (n === 1) {
    return num_list.slice(0, slicer[1] + 1);
  } else if (n === 2) {
    return num_list.slice(slicer[0]);
  } else if (n === 3) {
    return num_list.slice(slicer[0], slicer[1] + 1);
  } else if (n === 4) {
    return num_list
      .slice(slicer[0], slicer[1] + 1)
      .filter((e, i) => i % slicer[2] === 0);
  }
}

// filter() 메소드에서 매개변수 'e'는 배열 요소를 나타냄, 'i'는 배열 요소의 인덱스를 나타냄.
// 배열 요소를 사용할 수 있기 때문에 조건에 따라 요소의 값에 기반하여 필터링할 수 있는 더 유연한 옵션을 제공함
// 테스트케이스 3, 19 오류로 인해 e를 추가해줌.
