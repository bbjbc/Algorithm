// new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

function solution(new_id) {
  let confirm =
    // 1단계) 소문자로 치환
    new_id
      .toLowerCase()
      // 2단계) \w: 영어알파벳, 숫자, 언더스코어 | \-: - | \.: . | [^str]: str을 제외함.
      .replace(/[^\w\-\.]/g, "")
      // 3단계) 마침표(.)가 최소 2번 연속된 부분을 하나로 치환
      .replace(/\.{2,}/g, ".")
      // 4단계) 마침표가 처음이나 끝에 위치한다면 제거
      .replace(/^\.|\.$/g, "");

  // 5단계) 빈 문자열이라면, 'a' 대입
  if (confirm.length === 0) {
    confirm = "a";
  }
  // 6단계) 문자열의 길이가 16자 이상이라면
  if (confirm.length >= 16) {
    confirm = confirm.slice(0, 15).replace(/\.$/g, "");
  }
  // 7단계) 문자열의 길이가 2자 이하라면
  if (confirm.length <= 2) {
    while (confirm.length < 3) {
      confirm += confirm[confirm.length - 1];
    }
  }
  return confirm;
}
