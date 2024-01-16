function solution(n, words) {
  let lastWord = words[0].slice(0, 1);
  let pass = [];
  let answer = [0, 0];

  for (let idx = 0; idx < words.length; idx++) {
    const word = words[idx];

    if (pass.includes(word) || word.slice(0, 1) !== lastWord) {
      answer = [(idx % n) + 1, Math.floor(idx / n) + 1];
      break;
    }

    lastWord = word.slice(-1);
    pass.push(word);
  }

  return answer;
}
