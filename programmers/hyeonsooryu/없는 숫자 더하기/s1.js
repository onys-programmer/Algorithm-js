function solution(numbers) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((prev, curr) => {
    return numbers.includes(curr) ? prev : prev + curr;
  }, 0);
}
