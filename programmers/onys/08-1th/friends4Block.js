function solution(m, n, board) {
  let answer = 0;
  // 배열 만들기
  const field = board.map(row => row.split(""));

  while (true) {
    // 터질 애들 찾기
    const mySet = new Set();

    for (let r = 0; r < m - 1; r++) {
      for (let c = 0; c < n - 1; c++) {

        if (field[r][c] === field[r][c + 1] &&
          field[r][c] === field[r + 1][c] &&
          field[r][c] === field[r + 1][c + 1] &&
          field[r][c] != ''
        ) {

          const target = field[r][c];
          const toBePoppeds = [
            [r, c], [r, c + 1],
            [r + 1, c], [r + 1, c + 1]
          ];
          toBePoppeds.forEach(([r, c]) => mySet.add(JSON.stringify([r, c])));
        }
        temp = field[r][c];
      }
    }

    if (mySet.size === 0) break;

    // 터뜨리기
    let cnt = 0;

    mySet.forEach((v1, v2, src) => {
      const [r, c] = JSON.parse(v1);
      field[r][c] = '';
    })

    answer += mySet.size;

    // 내려가기
    for (let r = m - 1; r > 0; r--) {
      if (!field[r].some(v => !v)) continue;

      for (let c = 0; c < n; c++) {
        for (let i = r - 1; i >= 0 && !field[r][c]; i--) {
          if (field[i][c] != '') {
            field[r][c] = field[i][c];
            field[i][c] = '';
            break;
          }
        }
      }
    }
  }

  return answer;
}
