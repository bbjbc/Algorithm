function solution(phone_number) {
  const hidden = phone_number
    .substring(0, phone_number.length - 4)
    .replace(/./g, "*");
  const last = phone_number.substring(phone_number.length - 4);
  return hidden + last;
}
