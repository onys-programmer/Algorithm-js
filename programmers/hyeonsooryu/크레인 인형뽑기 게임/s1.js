function solution(board, moves) {
  // 터진 인형 개수
  let ans = 0;
  // 뽑은 인형을 담을 바구니
  const bucket = [];

  // 크레인 이동
  for (const move of moves) {
    // 위부터 탐색
    for (let i = 0; i < board.length; i++) {
      const item = board[i][move - 1];
      // 인형이 있다면
      if (item !== 0) {
        // 인형 뽑기
        board[i][move - 1] = 0;
        // 바구니 가장 위의 인형과 같다면
        if (bucket[bucket.length - 1] === item) {
          // 인형 터트리기
          bucket.pop();
          ans += 2;
        }
        // 아니라면 바구니에 인형 담기
        else {
          bucket.push(item);
        }
        break;
      }
    }
  }
  return ans;
}
