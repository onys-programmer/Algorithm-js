function solution(board, moves) {
  var barket = [];
  var boom = 0;
  for (let m of moves) {
    for (b of board) {
      if (b[m - 1] !== 0) {
        if (barket) {
          if (barket[barket.length - 1] === b[m - 1]) {
            boom += 2;
            barket.splice(-1, 1);
            b[m - 1] = 0;
            break;
          }
        }
        barket.push(b[m - 1]);
        b[m - 1] = 0;
        break;
      }
    }
  }
  return boom;
}

// 중간에 별 생각없이 break 가 아닌 continue 를 사용했던 바람에 더 오래 걸렸었다
