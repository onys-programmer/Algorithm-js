function solution(s) {
  let answer = 0;
  
  const table = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
  }
  
  const lengthCase = {
      z: [4],
      o: [3],
      t: [3, 5],
      f: [4],
      s: [3, 5],
      e: [5],
      n: [4],
  }
  
  let rst = [...s].reduce((acc, cur, idx, src) => {
      if (Number.isInteger(cur * 1)) {
          return `${acc}${cur}`;
      } else {
          console.log(lengthCase[cur])
          let temp = []
          for (c of lengthCase[cur]) {
              temp.push(src.slice(idx, idx + c));
          }
          console.log(temp)
          for (t of temp) {
              if (table[t]) {
                  return `${acc}${table[t]}`;
              }
          }
      }
  }, '');
  
  
  return rst;
}

console.log(solution('one4seveneight'))