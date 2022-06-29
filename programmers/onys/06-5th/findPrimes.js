const permutate = (arr, cnt) => {
  const result = [];

  if (cnt === 1) return arr.map(ele => [ele]);

  arr.forEach((fixed, idx, src) => {
    const rest = src.slice();
    rest.splice(idx, 1);
    const permutations = permutate(rest, cnt - 1);
    const attaching = permutations.map(permutation => [fixed, ...permutation]);
    result.push(...attaching);
  });

  return result;
};

const isPrime = (num) => {
  const table = new Array(num + 1).fill(true).fill(false, 0, 2);
  for (let i = 2; i * i <= num; i++) {
    if (table[i]) {
      for (let j = i * i; j <= num; j += i) {
        table[j] = false;
      }
    }
  }
  return table[num];
};

function solution(numbers) {
  const permutations = [];
  for (let i = 0; i <= numbers.length; i++) {
    permutations.push(...permutate(numbers.split(""), i));
  }
  const pNums = new Set(permutations.map(ele => Number(ele.join(""))));
  return [...pNums].filter(isPrime).length;
}
