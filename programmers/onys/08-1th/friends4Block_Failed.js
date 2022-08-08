const search = (field, [r, c], mySet) => {
  const target = field[r][c];

  const directions = [
    [[r - 1, c - 1], [r - 1, c], [r, c - 1]],    // 좌상
    [[r - 1, c], [r - 1, c + 1], [r, c + 1]],    // 우상
    [[r, c - 1], [r + 1, c - 1], [r + 1, c]],    // 좌하
    [[r, c + 1], [r + 1, c], [r + 1, c + 1]],    // 우하
  ];

  const directionsBeingPopped = directions.filter(direction =>
    direction.length === direction
      .filter(([r, c]) => {
        if (r >= field.length || r < 0) return false;
        if (c >= field[0].length || c < 0) return false;
        if (field[r][c] != target) return false;
        return true;
      }).length
  );

  const result = [];
  directionsBeingPopped.forEach(v => v.forEach(v2 => result.push(v2)));
  result.forEach(v => mySet.add(JSON.stringify(v)));

  return mySet;
};

const bomb = (m, n, field) => {
  let originField = field.slice();
  let mySet = new Set();
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      mySet = search(field, [r, c], mySet);
    }
  }
  const realSet = Array.from(mySet).map(v => JSON.parse(v));
  realSet.forEach(([r, c]) => field[r][c] = null);
  if (realSet.length <= 1) {
    return [0, false];
  }
  return [realSet.length, field];
};

const down = (m, n, field) => {
  for (let c = 0; c < n; c++) {
    const blanks = [];
    for (let r = m - 1; r >= 0; r--) {
      if (field[r][c] === null) {
        blanks.push([r, c]);
      }
    }
    blanks.forEach(([r, c]) => {
      if (r - blanks.length >= 0) {
        field[r][c] = field[r - blanks.length][c];
        field[r - blanks.length][c] = null;
      }
    });
  }

  return field;
};

function solution(m, n, board) {
  let field = board;
  let answer = 0;
  while (field != false) {
    const result = bomb(m, n, field);
    const [cnt, nField] = result;
    answer += cnt;
    field = nField;
    if (field === false) {
      break;
    }
    field = down(m, n, field);
  }

  return answer;
}