function solution(id_list, report, k) {
  const idCnt = id_list.length;
  const answer = new Array(idCnt).fill(0); // 처리 결과 메일을 받은 횟수(최종 결과)
  const memo = new Array(idCnt).fill(0).map(() => new Array(idCnt)); // 신고 현황 메모
  const reportedCnt = new Array(idCnt).fill(0); // id별 신고 당한 횟수

  // 신고 기록(report) 분석하여 memo와 reportedCnt 생성
  for (let r of report) {
    const tmp = r.split(" ");
    const reportId = id_list.indexOf(tmp[0]);
    const reportedId = id_list.indexOf(tmp[1]);

    if (!memo[reportId][reportedId]) {
      memo[reportId][reportedId] = 1;
      reportedCnt[reportedId]++;
    }
  }

  // 신고 당한 횟수가 k번 이상일 때 그 id를 신고한 id에 메일 전송 횟수(answer) 카운트
  reportedCnt.forEach((c, i) => {
    if (c >= k) {
      for (let j = 0; j < idCnt; j++) {
        if (memo[j][i]) answer[j]++;
      }
    }
  });

  return answer;
}
