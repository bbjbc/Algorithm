function solution(intStrs, k, s, l) {
  return intStrs.reduce((acc, curr) => {
    const filter = parseInt(curr.slice(s, s + l));
    if (filter > k) acc = [...acc, filter];
    return acc;
  }, []);
}
