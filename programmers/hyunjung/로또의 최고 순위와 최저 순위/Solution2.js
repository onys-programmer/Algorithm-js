function solution(lottos, win_nums) {
  const answer = [];

  let match = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const erased = lottos.filter((lotto) => lotto === 0).length;

  const ranking = (a) => {
    return a < 2 ? 6 : 7 - a;
  };

  answer.push(ranking(match + erased), ranking(match));

  return answer;
}
