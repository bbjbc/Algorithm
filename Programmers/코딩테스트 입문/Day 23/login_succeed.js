function solution(id_pw, db) {
  const findId = db.find((a) => id_pw[0] === a[0]); // 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다.
  if (findId) {
    if (id_pw[1] === findId[1]) return "login";
    else return "wrong pw";
  } else return "fail";
}
