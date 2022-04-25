// 테케 1개 실패

function solution(lottoNums, winNums) {
  let minScore = 0
  let potential = 0;
  
  for (lottoNum of lottoNums) {
      if (lottoNum === 0) {
          potential += 1;        
      }
      if (winNums.find(winNum => winNum === lottoNum)) {
          minScore += 1;
      }
  }
  
  let maxResult = 7 - (minScore + potential);
  if (maxResult < 1) {
      maxResult = 1;
  }
  
  let minResult = 7 - minScore;
  if (minResult > 6) {
      minResult = 6;
  }
  
  return [maxResult, minResult];
}
