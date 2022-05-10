function solution(s) {
  let ans = 1001;
  const maxPatternLength = parseInt(s.length / 2);
  for (let i = 1; i <= maxPatternLength; i++) {
    const i = 1;
    let newStr = "";
    let patternCnt = 0;

    let pointerA = 0;
    let pointerB = i;

    while (true) {
      const prev = s.slice(pointerA, pointerA + i);
      const next = s.slice(pointerB, pointerB + i);
      if (s.length - pointerA < i * 2) {
        newStr += s.slice(pointerA, s.length);
        break;
      } else if (prev === next) {
        pointerB += i;
        patternCnt++;
      } else {
        newStr += patternCnt ? `${patternCnt + 1}` + prev : prev;
        pointerA = patternCnt ? pointerB : pointerA + 1;
        pointerB = pointerA + i;
        patternCnt = 0;
      }
      console.log(
        `pointerA: ${pointerA} | pointerB: ${pointerB} | prev: ${prev} | next: ${next} | newStr: ${newStr} | patternCnt: ${patternCnt}`
      );
    }
    if (ans > newStr.length) {
      ans = newStr.length;
    }
  }
  return ans;
}

console.log(solution("aabbaccc"));
