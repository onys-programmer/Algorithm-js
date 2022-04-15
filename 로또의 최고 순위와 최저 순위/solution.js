function solution(lottos, win_nums) {
  lottos.sort((a, b) => a - b);

  let cnt = 0;
  let zeroCnt = 0;

  win_nums.forEach((num) => {
    if (lottos.indexOf(num) >= 0) {
      cnt++;
    }
  });

  lottos.forEach((num) => {
    if (num === 0) {
      zeroCnt++;
    }
  });

  const answer = [
    cnt + zeroCnt > 0 ? 7 - (cnt + zeroCnt) : 6,
    cnt > 0 ? 7 - cnt : 6,
  ];
  return answer;
}
