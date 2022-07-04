function solution(name) {
  let answer = 0;
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  name = name.split("");
  const curName = new Array(name.length).fill('A');

  let i = 0;
  let pos = 0;

  const minDist = (idx1, idx2, field = name) => {
    const dist = Math.abs(idx1 - idx2);
    return Math.min(dist, Math.abs(field.length - dist));
  };

  // name과 curName이 같아질 때까지 반복
  while (JSON.stringify(curName) !== JSON.stringify(name)) {
    if (curName[pos] === name[pos]) { // 현재 위치의 문자가 같으면
      // 가장 가까운 조작할 알파벳 위치 찾기
      while (true) {
        let flag = false;
        const nextOrPrev = [(pos + 1) % curName.length, pos - 1];
        if (nextOrPrev[1] < 0) {
          nextOrPrev[1] = curName.length + nextOrPrev[1];
        }

        for (let i = 0; i < nextOrPrev.length; i++) {
          const nPos = nextOrPrev[i];
          if (curName[nPos] !== name[nPos]) {
            answer += minDist(pos, nPos);
            pos = nPos;
            flag = true;
            break;
          }
        };
        if (flag) {
          break;
        }
      }
    } else { // 다르면 조작하여 같게 만들기
      const curLetterIdx = alphabets.indexOf(curName[pos]);
      const originLetterIdx = alphabets.indexOf(name[pos]);
      answer += minDist(curLetterIdx, originLetterIdx, alphabets);
      curName[pos] = name[pos];
    }
  }

  return answer;
}