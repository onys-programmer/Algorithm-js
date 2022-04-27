function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    // signs[i]가 true이면 1, false이면 -1 곱해서 더하기
    result += absolutes[i] * (signs[i] ? 1 : -1);
  }

  return result;
}
