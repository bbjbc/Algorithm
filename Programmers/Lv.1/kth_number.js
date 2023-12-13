function solution(array, commands) {
  const answer = commands.map(
    (a) => array.slice(a[0] - 1, a[1]).sort((a, b) => a - b)[a[2] - 1]
  );
  return answer;
}
