function solution(id_list, report, k) {
  // 계정 정보 생성
  const accounts = {};
  for (let i = 0; i < id_list.length; i++) {
    accounts[id_list[i]] = {
      id: i,
      reported: 0,
      inbox: 0,
    };
  }

  // 신고 내용 중복 제거
  const uniqueReports = [...new Set(report)].map((v) => v.split(" "));
  // 계정 정보에 신고 내용 기록
  for (const r of uniqueReports) {
    accounts[r[1]].reported++;
  }

  // 계정 정보를 순회
  for (const name in accounts) {
    // 신고 당한 수가 k건 이상이면
    if (accounts[name].reported >= k) {
      // 신고 목록을 순회하면서
      for (const r of uniqueReports) {
        // 신고 접수자에게 메일 발송
        if (r[1] === name) {
          accounts[r[0]].inbox++;
        }
      }
    }
  }

  // 정답 배열 생성
  const ans = Array.from({ length: id_list.length }, () => 0);
  // 계정 정보에서 신고 기록을 정답 배열에 저장
  for (const name in accounts) {
    ans[accounts[name].id] = accounts[name].inbox;
  }

  return ans;
}
