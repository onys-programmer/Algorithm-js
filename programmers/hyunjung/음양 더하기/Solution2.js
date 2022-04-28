function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, val, i) => (signs[i] ? acc + val : acc - val),
    0
  );
}
