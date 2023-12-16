function solution(name, yearning, photo) {
  const result = [];
  const yearnArr = [];

  for (let i = 0; i < name.length; i++) {
    yearnArr[name.indexOf(name[i])] = yearning[i];
  }
  for (const p of photo) {
    let totalYearn = 0;
    for (const person of p) {
      const yearnIndex = name.indexOf(person);
      if (yearnIndex !== -1) {
        totalYearn += yearnArr[yearnIndex] || 0;
      }
    }
    result.push(totalYearn);
  }
  return result;
}

// function solution(name, yearning, photo) {
//     return photo.map(a=>a.reduce((acc,curr)=>{
//         const yearn = yearning[name.indexOf(curr)] || 0
//         return acc+yearn
//     },0))
// }
