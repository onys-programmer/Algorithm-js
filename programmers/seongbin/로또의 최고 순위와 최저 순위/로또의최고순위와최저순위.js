function solution(lottos, win_nums) {
  var answer = [];
  const cnt = lottos.filter(lotto => win_nums.includes(lotto)).length;

  const zero = lottos.filter(lotto => lotto === 0).length;
  console.log(cnt, zero);

  let min = 7 - cnt >= 6 ? 6 : 7 - cnt;
  let max = min - zero < 1 ? 1 : min - zero;

  answer = [max, min];
  return answer;
}
