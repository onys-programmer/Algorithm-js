function solution(numbers) {
  let answer = 0;

  const check = new Array(10);
  check.fill(false);

  for (num of numbers) {
    check[num] = true;
  }

  for (let i = 0; i < 10; i++) {
    if (check[i] === false) answer += i;
  }

  return answer;
}
