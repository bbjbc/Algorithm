function solution(a, b, c, d) {
  const max = Math.max(a, b, c, d);
  const min = Math.min(a, b, c, d);
  let maxCount = 0;
  let minCount = 0;
  const arr = [a, b, c, d];
  arr.forEach((c) => {
    if (c === max) {
      maxCount++;
    } else if (c === min) {
      minCount++;
    }
  });

  // 네 주사위가 모두 같을 때
  if (maxCount === 4) {
    return 1111 * max;
  }

  // 세 주사위가 모두 같을 때
  if (maxCount === 3) {
    return (10 * max + min) ** 2;
  } else if (minCount === 3) {
    return (10 * min + max) ** 2;
  }

  // 두 그룹의 주사위의 값이 같을 때
  if (maxCount === 2 && minCount === 2) {
    return (max + min) * Math.abs(max - min);
  }

  // 두 개의 값이 같고 나머지는 다를 때
  if (a === b) {
    return c * d;
  } else if (a === c) {
    return b * d;
  } else if (a === d) {
    return b * c;
  } else if (b === c) {
    return a * d;
  } else if (b === d) {
    return a * c;
  } else if (c === d) {
    return a * b;
  }

  // 모두 다를 때
  if (a !== b && b !== c && c !== d) {
    return min;
  }
  // 그 외의 상황이므로 return min; 해도 될듯
}
