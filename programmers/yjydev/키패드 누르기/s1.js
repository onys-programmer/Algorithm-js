function solution(numbers, hand) {
  const left_number = [1, 4, 7];
  const right_number = [3, 6, 9];
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
  var p = { L: [4, 1], R: [4, 3] };
  var result = "";
  var hand = hand === "left" ? "L" : "R";
  for (var n of numbers) {
    if (left_number.includes(n)) {
      result += "L";
      p["L"] = keypad[n];
    } else if (right_number.includes(n)) {
      result += "R";
      p["R"] = keypad[n];
    } else {
      var n_idx = keypad[n];
      left_dist =
        Math.abs(n_idx[0] - p["L"][0]) + Math.abs(n_idx[1] - p["L"][1]);
      right_dist =
        Math.abs(n_idx[0] - p["R"][0]) + Math.abs(n_idx[1] - p["R"][1]);
      if (left_dist < right_dist) {
        result += "L";
        p["L"] = keypad[n];
      } else if (left_dist > right_dist) {
        result += "R";
        p["R"] = keypad[n];
      } else if (left_dist === right_dist) {
        result += hand;
        p[hand] = keypad[n];
      }
    }
  }
  return result;
}
