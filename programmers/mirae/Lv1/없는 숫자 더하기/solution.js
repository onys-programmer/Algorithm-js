function solution(numbers) {
  let result = 0;

  // 1부터 9까지 순서대로 확인
  for (let n = 1; n <= 9; n++) {
    // numbers 배열에 포함되지 않은 값이면 더하기
    if (!numbers.includes(n)) result += n;
  }

  return result;
}
