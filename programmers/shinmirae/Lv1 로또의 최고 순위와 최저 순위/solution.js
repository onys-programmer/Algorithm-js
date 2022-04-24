function solution(lottos, win_nums) {
  let cntZero = 0;
  let cntWin = 0;

  for (let n of lottos) {
    if (n === 0) cntZero++;
    else if (win_nums.includes(n)) cntWin++;
  }

  const rank = 7 - (cntWin === 0 ? 1 : cntWin);

  return [rank - (cntZero === 6 ? 5 : cntZero), rank];
}
