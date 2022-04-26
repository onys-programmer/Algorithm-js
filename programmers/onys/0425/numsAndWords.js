function solution(s) {
  let str = s;
  
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
  
  for (num in table) {
      const regex = new RegExp(num, 'g');
      str = str.replace(regex, table[num]);
  }

  return str * 1;
}
