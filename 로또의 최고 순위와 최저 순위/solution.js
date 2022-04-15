function solution(lottos, win_nums) {
  lottos.sort((a, b) => a - b);

  let cnt = 0;
  let zeroCnt = 0;

  lottos.forEach((num) => {
    if (num === 0) {
      zeroCnt++;
    }
    if (win_nums.indexOf(num) >= 0) {
      cnt++;
    }
  });

  const answer = [
    cnt + zeroCnt > 0 ? 7 - (cnt + zeroCnt) : 6,
    cnt > 0 ? 7 - cnt : 6,
  ];
  return answer;
}
