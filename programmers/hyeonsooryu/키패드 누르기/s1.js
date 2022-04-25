function solution(numbers, hand) {
  // 정답 초기화
  let ans = "";

  const keypad = {
    0: [3, 1],
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
  };

  // 왼손 오른손 위치 초기화
  let leftThumb = [3, 0];
  let rightThumb = [3, 2];

  // 숫자 누르기 순서대로 진행
  for (const number of numbers) {
    // 눌러야 할 키패드의 좌표
    const target = keypad[number];

    // 1, 4, 7 누르는 경우
    if ([1, 4, 7].indexOf(number) !== -1) {
      ans += "L";
      leftThumb = target;
    }
    // 3, 6, 9 누르는 경우
    else if ([3, 6, 9].indexOf(number) !== -1) {
      ans += "R";
      rightThumb = target;
    }
    // 2, 5, 8, 0 누르는경우
    else {
      // 왼손 오른손 거리 계산
      const leftDist =
        Math.abs(target[0] - leftThumb[0]) + Math.abs(target[1] - leftThumb[1]);
      const rightDist =
        Math.abs(target[0] - rightThumb[0]) +
        Math.abs(target[1] - rightThumb[1]);
      // 거리 & 편한 손 고려해 입력
      if (leftDist < rightDist) {
        ans += "L";
        leftThumb = target;
      } else if (leftDist > rightDist) {
        ans += "R";
        rightThumb = target;
      } else if (hand === "left") {
        ans += "L";
        leftThumb = target;
      } else {
        ans += "R";
        rightThumb = target;
      }
    }
  }
  return ans;
}
