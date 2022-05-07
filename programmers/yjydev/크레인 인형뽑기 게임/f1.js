// 문제를 완전 잘못 이해하고 푼 방법..
// 주어진 board 배열을
// [
//  [0,0,0,0],
//  [0,0,1,0,3]
// ]
// 이런식이 아니라 순간적으로 세로로 생각..
// 순서대로 크레인위치에 있는 배열이라고 생각했었어서 완전히 잘못 풀었었다.

function solution(board, moves) {
  var barket = [];
  var boom = 0;
  for (let m of moves) {
    var cur = board[m - 1];
    var i = 0;
    while (cur[cur.length - 1 - i] === 0 && i < cur.length - 1) {
      i += 1;
    }
    var idx = cur.length - 1 - i;
    if (cur[idx] !== 0) {
      if (barket) {
        if (barket[barket.length - 1] === cur[idx]) {
          boom += 2;
          barket.splice(-1, 1);
          cur[idx] = 0;
          continue;
        }
      }
      barket.push(cur[idx]);
      cur[idx] = 0;
    }
  }
  return boom;
}
