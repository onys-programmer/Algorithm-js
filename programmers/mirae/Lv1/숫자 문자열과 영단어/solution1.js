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
    // 같은 숫자가 여러번 포함되어있는 경우 반복적으로 수행
    while (s.includes(words[i])) {
      s = s.replace(words[i], i);
    }
  }

  // 결과 값을 숫자로 변경하여 return
  return Number(s);
}
