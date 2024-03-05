// want 배열과 number 배열을 하나의 객체로 합침. → wantList
// 10일동안 진행하니 10개씩 잘라 순회함.
// 본 객체가 아닌 복사 객체를 쓰는 것은 10개씩 자르는 것에 따라 계속 달라지기 때문.
// 복사 객체에 할인 품목이 존재하면 그 품목의 카운트를 하나 낮춰.
// 감소 시키고 존재하지 않는 품목이면 객체에서 속성 자체를 지워 버려.
// 객체에서 키 값이 없다면 10일동안 만족하는 거니까 totalDay 올려.

function solution(want, number, discount) {
  let totalDay = 0;
  let wantList = {};

  //	{ banana: 3, apple: 2, rice: 2, pork: 2, pot: 1 }
  for (let i = 0; i < want.length; i++) {
    wantList[want[i]] = (wantList[want[i]] || 0) + number[i];
  }

  for (let i = 0; i < discount.length; i++) {
    const discountProduct = discount.slice(i, i + 10);
    const copy = { ...wantList };

    discountProduct.forEach((product) => {
      if (copy[product]) {
        copy[product]--;
      }
      // 감소 시켰다가 없으면 삭제시킴.
      if (!copy[product]) {
        delete copy[product];
      }
    });

    if (Object.keys(copy).length === 0) {
      totalDay++;
    }
  }

  return totalDay;
}

// 통과 안되던 이상한 풀이
// function solution(want, number, discount) {
//   let totalDay = 0;
//   const wantList = {};
//   const discountList = {};

//   // wantList: { banana: 3, apple: 2, rice: 2, pork: 2, pot: 1 }
//   for (let i = 0; i < want.length; i++) {
//     wantList[want[i]] = (wantList[want[i]] || 0) + number[i];
//   }
//   // discountList: { chicken: 1, apple: 4, banana: 4, rice: 2, pork: 2, pot: 1 }
//   for (let i = 0; i < discount.length; i++) {
//     discountList[discount[i]] = (discountList[discount[i]] || 0) + 1;
//   }
//   for (let i = 0; i < discount.length; i++) {
//     const product = discount[i];

//     // 원하는 제품이 할인되고 수량이 충분한 경우
//     if (wantList[product] && wantList[product] <= discountList[product]) {
//       // 할인되는 날짜 수 증가
//       totalDay++;

//       // 원하는 제품의 수량 감소
//       wantList[product]--;

//       // 모든 원하는 제품의 수량이 0이 되었다면
//       if (Object.values(wantList).every((value) => value === 0)) {
//         break;
//       }
//     }
//   }

//   return totalDay;
// }
