const bfs = (start, field) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const visited = new Array(field.length).fill([])
    .map(v => new Array(field[0].length).fill(0));

  const queue = [start];

  while (queue.length) {
    const [r, c] = queue.shift();
    // console.log(r, c);
    // console.log(visited);
    if ( // 도착
      r === field.length - 1
      && c === field[0].length - 1
    ) return visited[field.length - 1][field[0].length - 1] + 1;

    for (let i = 0; i < 4; i++) {
      const nr = r + dy[i];
      const nc = c + dx[i];

      if ( // valid
        nr >= 0 && nr < field.length
        && nc >= 0 && nc < field[0].length
      ) {
        if (field[nr][nc] && !visited[nr][nc]) {
          queue.push([nr, nc]);
          visited[nr][nc] = visited[r][c] + 1;
        }
      }
    }
  }

  return -1;
}

function solution(maps) {
  return (bfs([0, 0], maps));
}