function solution(lottos, win_nums) {
  const answer = [];

  let match = 0;
  let erased = 0;

  for (const lotto of lottos) {
    if (lotto === 0) {
      erased++;
    }
    for (const num of win_nums) {
      if (lotto == num) {
        match++;
      }
    }
  }

  const ranking = (a) => {
    switch (a) {
      case 6:
        return 1;
        break;
      case 5:
        return 2;
        break;
      case 4:
        return 3;
        break;
      case 3:
        return 4;
        break;
      case 2:
        return 5;
        break;
      default:
        return 6;
        break;
    }
  };

  const high = ranking(match + erased);
  const low = ranking(match);

  answer.push(high);
  answer.push(low);

  return answer;
}
