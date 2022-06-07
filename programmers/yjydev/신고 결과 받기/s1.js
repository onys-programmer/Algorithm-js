function solution(id_list, report, k) {
    var answer = [];
    var reported = {};
    var reported_cnt = {};

    for (var l of id_list){
        reported[l] = [];
        reported_cnt[l] = 0;
    };

    for (var i=0; i<report.length; i++){
        var report_split = report[i].split(' ');
        var report_person = report_split[0];
        var reported_person = report_split[1];
        if (!reported[report_person].includes(reported_person)){
            reported[report_person].push(reported_person);
            reported_cnt[reported_person] = reported_cnt[reported_person]+1;
        }   
    };

    var stop = [];
    for (var rp in reported_cnt){
        if (reported_cnt[rp] >= k){
            stop.push(rp);
        };
    };
    
    for (var rd in reported){
        answer.push(reported[rd].filter(r => stop.includes(r)).length);
    };
    return answer;
}