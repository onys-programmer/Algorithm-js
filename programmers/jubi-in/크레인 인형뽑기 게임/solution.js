function solution(board, moves) {
  let answer = 0;
  let bucket = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] != 0) {
        if (
          bucket.length !== 0 &&
          bucket[bucket.length - 1] === board[j][moves[i] - 1]
        ) {
          answer += 2;
          bucket.pop();
        } else bucket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return answer;
}
