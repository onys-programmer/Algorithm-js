function solution(s) {
  // 배열의 인덱스와 영단어 매칭
  let words = [
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

  // 0부터 9까지 영단어가 포함되어있을 경우 숫자로 변경
  for (let i = 0; i <= 9; i++) {
    // 영단어에 해당되는 모든 부분을 숫자로 변경
    s = s.replaceAll(words[i], i);
  }

  return Number(s);
}
