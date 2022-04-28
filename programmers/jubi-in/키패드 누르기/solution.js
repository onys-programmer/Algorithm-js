function solution(numbers, hand) {
  var answer = "";
  const match = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    "*": [4, 1],
    0: [4, 2],
    "#": [4, 3],
  };
  let left = match["*"];
  let right = match["#"];

  for (let i = 0; i < numbers.length; i++) {
    if (match[numbers[i]][1] === 1) {
      answer += "L";
      left = match[numbers[i]];
    } else if (match[numbers[i]][1] === 3) {
      answer += "R";
      right = match[numbers[i]];
    } else {
      let l = getDistance(left, match[numbers[i]]);
      let r = getDistance(right, match[numbers[i]]);
      if (l > r) {
        answer += "R";
        right = match[numbers[i]];
      } else if (r > l) {
        answer += "L";
        left = match[numbers[i]];
      } else {
        if (hand === "right") {
          answer += "R";
          right = match[numbers[i]];
        } else {
          answer += "L";
          left = match[numbers[i]];
        }
      }
    }
  }
  return answer;
}

const getDistance = (a, b) => {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
};
