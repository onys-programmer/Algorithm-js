function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const res = [0, 0, 0];
  for (i = 0; i < answers.length; i++) {
    const one_i = i % one.length;
    const two_i = i % two.length;
    const three_i = i % three.length;
    const ans = answers[i];
    if (one[one_i] === ans) {
      res[0] += 1;
    }
    if (two[two_i] === ans) {
      res[1] += 1;
    }
    if (three[three_i] === ans) {
      res[2] += 1;
    }
  }
  var result = [];
  const max_score = Math.max(...res);
  res.map((r, i) => {
    if (r === max_score) result.push(i + 1);
  });
  return result;
}
