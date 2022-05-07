function solution(s) {
  const regexpArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < regexpArr.length; i++) {
    s = s.replace(new RegExp(regexpArr[i], "g"), `${i}`);
  }
  return s;
}
