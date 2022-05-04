function solution(s) {
  let answer = "";
  const match = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  const card = s.split("");
  let word = "";

  for (let i = 0; i < card.length; i++) {
    if (isNaN(parseInt(card[i]))) word += card[i];
    else answer += card[i];

    if (match[word]) {
      answer += match[word];
      word = "";
    }
  }
  return parseInt(answer);
}
