const vaxTrail = (arr) => {
  let a = [];
  let b = [];
  let c = [];
  let d = [];

  arr.map((ele) => {
    if (ele.temperature <= 100) {
      if (ele.age >= 20 && ele.age <= 30) {
        a.push(ele);
      } else if (ele.age >= 31 && ele.age <= 40) {
        b.push(ele);
      } else if (ele.age >= 41 && ele.age <= 50) {
        c.push(ele);
      } else {
        d.push(ele);
      }
    } else {
      d.push(ele);
    }
  });
  return {
    A: a.sort((a, b) => (a.age % 2 === 0 && b.age % 2 === 0) ? a.age - b.age : (a.age % 2 === 0 ? -1 : 1)),
    B: b.sort((a, b) => (a.age % 2 === 0 && b.age % 2 === 0) ? a.age - b.age : (a.age % 2 === 0 ? -1 : 1)),
    C: c.sort((a, b) => (a.age % 2 === 0 && b.age % 2 === 0) ? a.age - b.age : (a.age % 2 === 0 ? -1 : 1)),
    D: d.sort((a, b) => (a.age % 2 === 0 && b.age % 2 === 0) ? a.age - b.age : (a.age % 2 === 0 ? -1 : 1)),
  };
};

console.log(
  vaxTrail([
    { name: "sunil", age: 21, temperature: 10 },
    { name: "Bilap", age: 22, temperature: 98 },
    { name: "Bilp", age: 20, temperature: 98 },
    { name: "Bplap", age: 50, temperature: 98 },
  ])
);


