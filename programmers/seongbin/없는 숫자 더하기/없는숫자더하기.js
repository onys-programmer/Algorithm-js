function solution(numbers) {
    var answer = -1;
    let sum = numbers.reduce((accumulator, current)=> accumulator + current, 0)

    return 45 - sum;
}