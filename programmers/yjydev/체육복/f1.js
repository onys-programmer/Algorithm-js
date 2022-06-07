function solution(n, lost, reserve) {
  const only_reserve = reserve.filter((x) => !lost.includes(x));
  const only_lost = lost.filter((x) => !reserve.includes(x));
  var answer = n - only_lost.length;
  for (r of only_reserve) {
    const prev = only_lost.indexOf(r - 1);
    const next = only_lost.indexOf(r + 1);
    if (prev !== -1) {
      answer += 1;
      only_lost.splice(prev, 1);
    } else if (next !== -1) {
      answer += 1;
      only_lost.splice(next, 1);
    }
  }
  return answer;
}
