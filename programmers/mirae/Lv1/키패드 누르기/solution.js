function solution(numbers, hand) {
  //  *: 10 / 0: 11 / #: 12
  let result = "";
  let lHand = 10; // 왼손의 현재 위치
  let rHand = 12; // 오른손의 현재 위치

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) numbers[i] = 11; // 0일 경우 11로 치환

    if ([1, 4, 7].includes(numbers[i])) {
      // 1, 4, 7일 때 왼손 사용
      result = result + "L";
      lHand = numbers[i];
    } else if ([3, 6, 9].includes(numbers[i])) {
      // 3, 6, 9일 때 오른손 사용
      result = result + "R";
      rHand = numbers[i];
    } else {
      // 2, 5, 8, 0 일 때
      let lDistance = Math.abs(numbers[i] - lHand); // 누를 번호와 왼손 위치 번호의 차이 계산
      let rDistance = Math.abs(numbers[i] - rHand); // 누를 번호와 오른손 위치 번호의 차이 계산

      // 누를 번호와 손의 위치 거리 = 세로 거리(3배수 이므로 3으로 나눔) + 가로 거리(3이내의 거리를 가지므로 3으로 나눈 나머지)
      lDistance = parseInt(lDistance / 3 + (lDistance % 3), 10); // 누를 번호와 왼손 위치 거리 계산
      rDistance = parseInt(rDistance / 3 + (rDistance % 3), 10); // 누를 번호와 오른손 위치 거리 계산

      // 왼손이 더 가까울 때 왼손 사용
      if (lDistance < rDistance) {
        result = result + "L";
        lHand = numbers[i];
        // 오른손이 더 가까울 때 오른손 사용
      } else if (lDistance > rDistance) {
        result = result + "R";
        rHand = numbers[i];
        // 거리가 같을 때
      } else {
        // 왼손잡이면 왼손 사용
        if (hand === "left") {
          result = result + "L";
          lHand = numbers[i];
          // 오른손잡이면 오른손 사용
        } else {
          result = result + "R";
          rHand = numbers[i];
        }
      }
    }
  }
  return result;
}
