function solution(numbers) {
  return numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
}
