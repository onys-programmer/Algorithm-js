function solution(inputId) {
  let steps = {
      step1: inputId => inputId.toLowerCase(),
      step2: acc => acc.replace(/[^\w-\.]/g, ''),
      step3: acc => acc.replace(/\.{2,}/g, '.'),
      step4: acc => acc.replace(/^\.|\.$/g, ''),
      step5: acc => acc.replace(/^$/g, 'a'),
      step6: acc => acc.slice(0,15).replace(/\.$/g, ''),
      step7: acc => acc.padEnd(3, acc.slice(-1)),
  };
  
  const answer = Object.values(steps).reduce(
      (acc, cur, idx, src) => src[idx](acc)
  ,inputId);
  
  return answer;
}
