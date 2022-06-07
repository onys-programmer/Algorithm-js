function solution(lottos, win_nums) {
  // 0의 개수 구하기
  const cntZero = lottos.filter((v) => !v).length;
  // lotto 내림차순 정렬
  lottos.sort((a, b) => b - a);
  // 몇 개의 번호가 일치하는지 찾기
  let matchNums = 0;
  for (const l of lottos) {
    if (!l) {
      break;
    } else if (win_nums.indexOf(l) !== -1) {
      matchNums++;
    }
  }
  // 등수 변환
  const prize = [6, 6, 5, 4, 3, 2, 1];
  return [prize[matchNums + cntZero], prize[matchNums]];
}
