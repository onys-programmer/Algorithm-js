function solution(array, commands) {
  const answer = [];
  for (const command of commands) {
    const slicedArr = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    answer.push(slicedArr[command[2] - 1]);
  }
  return answer;
}
