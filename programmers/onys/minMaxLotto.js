function solution(lottoNums, winNums) {
  let minScore = lottoNums.filter(lottoNum => winNums.includes(lottoNum)).length;
  let potential = lottoNums.filter(ele => ele === 0).length;
  
  let maxResult = 7 - (minScore + potential);
  let minResult = 7 - minScore;
  
  const answer = [maxResult, minResult].map(result => {
      if (result < 1) {
          return 1;  
      } else if (result > 6) {
          return 6;
      }
      return result;
  });
  
  return answer;
}