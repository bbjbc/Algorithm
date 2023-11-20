function solution(my_string) {
  let a = "";
  let sum = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (Number.isInteger(Number(my_string[i]))) {
      a += my_string[i];
    } else {
      if (a !== "") {
        sum += Number(a);
        a = "";
      }
    }
    // console.log(a)
  }
  if (a !== "") {
    sum += Number(a);
  }
  return sum;
}
