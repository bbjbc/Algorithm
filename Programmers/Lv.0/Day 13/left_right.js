function solution(str_list) {
  const index = str_list.findIndex((i) => i === "l" || i === "r");
  if (str_list[index] === "l") {
    return str_list.slice(0, index);
  } else if (str_list[index] === "r") {
    return str_list.slice(index + 1);
  } else if (index === -1) return [];
}
