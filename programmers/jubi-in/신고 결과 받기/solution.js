function solution(id_list, report, k) {
  const len = id_list.length;
  // 유저가 다른 유저를 신고했는지 여부를 체크하기 위한 2차원 배열
  const isReport = Array.from(Array(len), () => Array(len).fill(0));
  const reportCnt = new Array(len).fill(0);
  const answer = new Array(len).fill(0);

  for (let i = 0; i < report.length; i++) {
    const arr = report[i].split(" ");
    const a = indexCheck(arr[0], id_list);
    const b = indexCheck(arr[1], id_list);
    if (isReport[a][b] === 0) {
      reportCnt[b]++;
      isReport[a][b] = 1;
    }
  }

  for (let i = 0; i < len; i++) {
    if (reportCnt[i] >= k) {
      for (let j = 0; j < len; j++) {
        if (isReport[j][i] === 1) {
          answer[j]++;
        }
      }
    }
  }
  return answer;
}

const indexCheck = (name, id_list) => {
  for (let i = 0; i < id_list.length; i++) {
    if (name === id_list[i]) {
      return i;
    }
  }

  return -1;
};
