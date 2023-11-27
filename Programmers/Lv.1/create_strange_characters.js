function solution(s) {
  const result = [];
  const spliter = s.split(" "); // ['try', 'hello', 'world']
  for (let i = 0; i < spliter.length; i++) {
    let spliter2 = spliter[i];
    for (let j = 0; j < spliter2.length; j++) {
      if (j % 2 === 0) {
        spliter2 =
          spliter2.substring(0, j) +
          spliter2[j].toUpperCase() +
          spliter2.substring(j + 1);
      } else {
        spliter2 =
          spliter2.substring(0, j) +
          spliter2[j].toLowerCase() +
          spliter2.substring(j + 1);
      }
    }
    result.push(spliter2);
  }
  return result.join(" ");
}
