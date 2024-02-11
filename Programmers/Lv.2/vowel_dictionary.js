function solution(word) {
  let arr = [];
  let dictionary = ["A", "E", "I", "O", "U"];

  // 완전 탐색
  const dfs = (length, alphabet) => {
    if (length <= 5) {
      arr.push(alphabet);
      for (let i = 0; i < dictionary.length; i++) {
        dfs(length + 1, alphabet.concat(dictionary[i]));
      }
    }
  };

  dfs(0, "");
  return arr.indexOf(word);
}

// console.log(arr) - 5^5 + 5^4 + 5^3 + 5^2 + 5^1 = 3125 + 625 + 125 + 25 + 5 = 3905개
// [
//     '',      'A',     'AA',    'AAA',   'AAAA',  'AAAAA', 'AAAAE',
//     'AAAAI', 'AAAAO', 'AAAAU', 'AAAE',  'AAAEA', 'AAAEE', 'AAAEI',
//     'AAAEO', 'AAAEU', 'AAAI',  'AAAIA', 'AAAIE', 'AAAII', 'AAAIO',
//     'AAAIU', 'AAAO',  'AAAOA', 'AAAOE', 'AAAOI', 'AAAOO', 'AAAOU',
//     'AAAU',  'AAAUA', 'AAAUE', 'AAAUI', 'AAAUO', 'AAAUU', 'AAE',
//     'AAEA',  'AAEAA', 'AAEAE', 'AAEAI', 'AAEAO', 'AAEAU', 'AAEE',
//     'AAEEA', 'AAEEE', 'AAEEI', 'AAEEO', 'AAEEU', 'AAEI',  'AAEIA',
//     'AAEIE', 'AAEII', 'AAEIO', 'AAEIU', 'AAEO',  'AAEOA', 'AAEOE',
//     'AAEOI', 'AAEOO', 'AAEOU', 'AAEU',  'AAEUA', 'AAEUE', 'AAEUI',
//     'AAEUO', 'AAEUU', 'AAI',   'AAIA',  'AAIAA', 'AAIAE', 'AAIAI',
//     'AAIAO', 'AAIAU', 'AAIE',  'AAIEA', 'AAIEE', 'AAIEI', 'AAIEO',
//     'AAIEU', 'AAII',  'AAIIA', 'AAIIE', 'AAIII', 'AAIIO', 'AAIIU',
//     'AAIO',  'AAIOA', 'AAIOE', 'AAIOI', 'AAIOO', 'AAIOU', 'AAIU',
//     'AAIUA', 'AAIUE', 'AAIUI', 'AAIUO', 'AAIUU', 'AAO',   'AAOA',
//     'AAOAA', 'AAOAE',
//     ... 3806 more items
//   ]
