// players 배열에 있는 선수들의 순위를 obj 객체에 저장함.
// callings 배열에 있는 선수들의 순위를 바꿔주는데, obj 객체를 이용하여 순위를 바꿔줌.
// 순위를 바꾸고 나서는 obj 객체를 업데이트 해줌.
// 단순히 , obj 객체는 순위를 저장하는데 사용하고, players 배열은 최종 결과를 위해 사용함.
// players 배열을 리턴함.

// 1. 객체를 사용한 방법
function solution(players, callings) {
  const obj = {};

  players.forEach((player, rank) => {
    obj[player] = (obj[player] || 0) + rank;
  });
  // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }

  for (let i = 0; i < callings.length; i++) {
    let playerRank = obj[callings[i]];

    // players 배열에서 순위를 바꿔줌.
    let temp = players[playerRank - 1];
    players[playerRank - 1] = players[playerRank];
    players[playerRank] = temp;

    // obj 객체를 업데이트 해줌.
    obj[players[playerRank]] = playerRank;
    obj[players[playerRank - 1]] = playerRank - 1;
  }

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);

// 2. 배열을 사용한 방법 - 시간 초과 발생 → splice를 사용하면 시간 복잡도가 O(n)이기 때문에 시간 초과가 발생함.
function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    const playerRank = players.indexOf(callings[i]);
    const player = players.splice(playerRank, 1);
    players.splice(playerRank - 1, 0, ...player);
  }
  return players;
}
