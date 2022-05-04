function solution(id_list, report, k) {
    const answer = [];
    const reportResult = {}; //신고 결과를 기록하는 객체 초기화
    const reportedCnt = {}; //신고받은 횟수를 기록하는 객체 초기화
    const cntUser = []; //k번 이상 신고받은 유저를 기록하는 배열 초기화

    for(const id of id_list){
        reportResult[id] = [];  //신고자 id : [신고된 id, ...]
        answer.push(0);
        reportedCnt[id] = 0;
    }
    
    //report 중복 제거하고 report_set 배열 순회하면서 신고자 id 속성에 신고된 id를 push
    const reportSet = [...new Set(report)].map(r => {
        const[reportId, reportedId] = r.split(' ');
        reportResult[reportId].push(reportedId);
    });
    
    //각 유저마다 신고받은 횟수를 카운트
    for(const id of id_list){
        for(const reported of reportResult[id]){
            reportedCnt[reported]++;
        }
    }
    
    //k번 이상 신고받은 유저를 push
    for(const id of id_list){
        if(reportedCnt[id]>=k){
            cntUser.push(id);
        }
    }
    
    //reportResult 배열을 순회하면서 신고자(id)가 신고한 사람과 k번 이상 신고받은 유저가 같다면
    //answer 배열의 신고자 위치에 +1
    for(const id of id_list){
        for(const reported of reportResult[id]){
            for(const user of cntUser){
                if(reported == user)
                    answer[id_list.indexOf(id)]++;
            }
        }
    }
    
    return answer;
}