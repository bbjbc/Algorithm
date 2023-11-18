function solution(keyinput, board) {
  const [x, y] = board;
  let width = 0;
  let height = 0;
  for (const a of keyinput) {
    switch (a) {
      case "up":
        if (height + 1 <= Math.floor(y) / 2) height += 1;
        break;
      case "down":
        if (height - 1 >= -(Math.floor(y) / 2)) height -= 1;
        break;
      case "right":
        if (width + 1 <= Math.floor(x) / 2) width += 1;
        break;
      case "left":
        if (width - 1 >= -(Math.floor(x) / 2)) width -= 1;
        break;
    }
  }
  return [width, height];
}
