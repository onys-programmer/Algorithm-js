// board를 기준으로 맨 위에 있는 인형의 행 인덱스를 가져오는 함수
function indexCheck(board) {
  let result = [];
  // i = 열 인덱스, j = 행 인덱스
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // 인형을 발견했을 때 해당 행 인덱스를 result에 넣음
      if (board[j][i] !== 0) {
        result.push(j);
        break;
      }
      // 마지막 행까지 인형이 없는 경우 해당 열에는 인형이 없는 것(-1)으로 처리
      if (j === board.length - 1) {
        result.push(-1);
      }
    }
  }
  return result;
}

function solution(board, moves) {
  let count = 0; // 사라진 인형 수(결과 값)
  let basket = []; // 크레인으로 집은 인형을 담을 바구니
  let check = indexCheck(board); // 현재 board를 기준으로 맨 위 인형의 위치를 받아옴

  // 크레인 작동 위치를 따라가면서 확인
  for (let a of moves) {
    let index = a - 1; // 실제 배열의 열 인덱스는 칸의 번호 - 1

    // 해당 열에 인형이 없는 경우 다음 순서로 pass
    if (check[index] === -1) {
      continue;
    }

    // 해당 열에 인형이 있는 경우 인형을 뽑아 바구니에 넣기
    // check[index]는 해당 열에 인형이 위차한 행 인덱스
    basket.push(board[check[index]][index]);
    // 인형을 뽑은 후 check 배열 재정비
    // 인형이 아직 남아있다면 행 인덱스+1을 해주고, 더이상 없다면 인형이 없는 것(-1)으로 처리
    check[index] = check[index] >= board.length - 1 ? -1 : check[index] + 1;
    // 바구니의 인형이 2개 이상일 때, 맨 위의 인형과 그 아래 인형을 비교해서 같으면 2번 pop 후 카운트+2
    if (basket.length >= 2) {
      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        basket.pop();
        basket.pop();
        count += 2;
      }
    }
  }
  return count;
}
