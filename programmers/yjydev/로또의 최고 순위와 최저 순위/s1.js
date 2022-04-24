function solution(lottos, win_nums) {
// 주어진 6개 배열 중 알아볼 수 없는 숫자, 즉, 0이 몇개 있는지를 filter 메서드를 이용해 
// 0인 원소들만 추출해서 배열을 만들고, 해당 배열의 length 속성으로 구하기
    var cnt = lottos.filter(l => l == 0).length;

// 주어진 6개의 원소들에서 당첨 번호가 몇개 있는지를, 당첨 번호 배열에서 filter 메서드로 
// 추출한 배열의 length 속성으로 구하기
    var win_cnt = lottos.filter(l => win_nums.includes(l)).length;

// 순위 측정을 위해, 맞춘 수를 key, 순위를 value로 하여 객체 생성
    var grade = {6:1,5:2,4:3,3:4,2:5,1:6,0:6}

// 만든 객체를 이용해서 최대 순위, 최저 순위를 차례대로 배열에 넣어 리턴!
    return [grade[win_cnt+cnt], grade[win_cnt]]
}