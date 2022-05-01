function solution(id_list, report, k) {
  const userList = id_list.reduce((result, currentId) => {
//       신고된 횟수와 해당 유저를 신고한 유저id를 담을 객체 생성
    result[currentId] = [0, []];
    return result;
  }, {});
// set으로 중복을 제거, split으로 신고한 유저 와 신고된 유저를 나눠준다.
  for (const id of new Set(report)) {
    const [REPORT_ID, ID] = id.split(' ');
//       신고한 유저의 id를 담고 신고된 횟수 +1
    userList[REPORT_ID][1].push(ID);
    userList[ID][0]++;
  }
// k회 이상 신고된 id를 변수에 담는다. 유저마다 신고한 id가 정지 됐으면 해당 id를 추가한다.
  const banned = id_list.filter((id) => userList[id][0] >= k);
  const emailList = id_list.map((id) => {
    return userList[id][1].filter((id) => {
      return banned.includes(id);
    }).length;
  });

  return emailList;
}