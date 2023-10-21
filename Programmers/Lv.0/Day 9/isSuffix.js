function solution(my_string, is_suffix) {
  let result = [];
  for (let i = 0; i < my_string.length; i++) {
    result.push(my_string.slice(i));
  }
  return result
    .map((a) => a === is_suffix)
    .join("")
    .match("true")
    ? 1
    : 0;
}
// endsWith() 메소드 - 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환한다.
// function solution(my_string, is_suffix){
//     return +my_string.endsWith(is_suffix);
// }
