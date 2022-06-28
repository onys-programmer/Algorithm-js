function solution(array) {

  const sortedArray = array.sort((a, b) => `${b}${a}` - `${a}${b}`);

  const answer = sortedArray.join("").toString();

  return answer[0] === '0' ? '0' : answer;
}
