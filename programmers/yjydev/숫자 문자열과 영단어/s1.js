function solution(s) {
  var word_num = {
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
  for (let key in word_num) {
    var regexAll = new RegExp(key, "gi");
    s = s.replace(regexAll, word_num[key]);
  }
  return parseInt(s);
}

// 처음엔 s.replace(key, word_num[key]) 라고만 했었는데 70% 만 정답이었다.
// 그래서 찾아보니까 replace 함수를 쓸 때, 변수를 그냥 무작정 넣으면 안되고
// RegExp 객체를 활용해서 넣으면 된다고 하여 적용해보니 통과했다.
// https://cookinghoil.tistory.com/95
