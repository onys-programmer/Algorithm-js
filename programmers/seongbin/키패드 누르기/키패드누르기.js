function solution(numbers, hand) {
    var answer = '';
    key = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']]
    idx = [] // numbers의 인덱스 넣을 리스트
    left = [3,0] // 왼손 시작 위치
    right = [3,2] // 오른손 시작 위치

    // 1. 눌러야 할 번호들의 키패드의 인덱스 값을 구해서 idx 리스트에 넣어준다.
    for (i=0; i<numbers.length; i++) {
        for (x=0; x<4; x++) {
            for (y=0; y<3; y++) {
                if (numbers[i] === key[x][y]) {
                    idx.push([x,y])
                }
            }
        }
    }
    console.log(idx)
    // 2. idx 리스트에서 눌러야 할 위치를 하나씩 빼서
    for (i=0; i<idx.length; i++) {
        // 키패드의 왼쪽에 위치할 때, 왼손의 위치를 해당 인덱스로 옮긴다
        if (idx[i][1] === 0) {
            answer += 'L'
            left = idx[i]
        // 키패드의 오른쪽에 위치할 때, 오른손의 위치를 해당 인덱스로 옮긴다.
        } else if (idx[i][1] === 2) {
            answer += 'R'
            right = idx[i]
        // 키패드의 가운데에 위치할 때
        } else {
            let dis_l = Math.abs(left[0]-idx[i][0]) + Math.abs(left[1]-idx[i][1]);
            let dis_r = Math.abs(right[0]-idx[i][0]) + Math.abs(right[1]-idx[i][1]);
            // 왼손, 오른손 중 더 가까이 있는 손을 구한다.
            if (dis_l > dis_r) {
                answer += 'R'
                right = idx[i]
            } else if (dis_l < dis_r) {
                answer += 'L'
                left = idx[i]
            // 두 손과 거리가 같을 때는 왼손잡이, 오른손 잡이를 구한다.
            } else {
                if (hand === 'right') {
                    answer += 'R'
                    right = idx[i]
                } else {
                    answer += 'L'
                    left = idx[i]
                }
            }
        }
    }
    return answer;
}