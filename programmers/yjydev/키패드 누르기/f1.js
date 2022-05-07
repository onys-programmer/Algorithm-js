function solution(numbers, hand) {
  const left_number = [1, 4, 7];
  const right_number = [3, 6, 9];
  var left_idx = 10;
  var right_idx = 11;
  var keypad = [
    [4, 2],
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
    [4, 1],
    [4, 3],
  ];
  var result = "";
  for (var n of numbers) {
    if (left_number.includes(n)) {
      result += "L";
      left_idx = n;
    } else if (right_number.includes(n)) {
      result += "R";
      right_idx = n;
    } else {
      n_idx = keypad[n];
      left = keypad[left_idx];
      right = keypad[right_idx];
      left_dist = Math.sqrt(
        Math.pow(n_idx[0] - left[0], 2) + Math.pow(n_idx[1] - left[1], 2)
      );
      right_dist = Math.sqrt(
        Math.pow(n_idx[0] - right[0], 2) + Math.pow(n_idx[1] - right[1], 2)
      );
      console.log(n_idx, left, left_dist);
      console.log(n_idx, right, right_dist);
      if (left_dist < right_dist) {
        result += "L";
        left_idx = n;
      } else if (left_dist > right_dist) {
        result += "R";
        right_idx = n;
      } else if (left_dist === right_dist) {
        if (hand === "left") {
          result += "L";
          left_idx = n;
        } else if (hand === "right") {
          result += "R";
          right_idx = n;
        }
      }
    }
    console.log(n, left_idx, right_idx, result);
  }
  return result;
}

// 그냥 키패드 사이에서의 거리만 구하면 되는건데
// 순간적으로 두 점 사이의 거리를 구했음..

// 확인용
// console.log(n_idx, left, left_dist)
// console.log(n_idx, right, right_dist)
// console.log(n,left_idx, right_idx, result)
