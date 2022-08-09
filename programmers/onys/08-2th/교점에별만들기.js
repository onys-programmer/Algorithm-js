const getIntersection = ([a, b, e], [c, d, f]) => {
  const denominator = a * d - b * c;
  if (denominator != 0) {
    const x = (b * f - e * d) / denominator;
    const y = (e * c - a * f) / denominator;
    return [x, y];
  } else return [false, false];
}

function solution(line) {
  const asterisks = new Set();

  for (let i = 0; i < line.length; i++) {
    for (let j = i; j < line.length; j++) {
      const [x, y] = getIntersection(line[i], line[j]);
      if (Number.isInteger(x) && Number.isInteger(y)) {
        asterisks.add(JSON.stringify([x, y]));
      }
    }
  }

  const arr = [...asterisks].map(v => JSON.parse(v));
  const xs = arr.map(([x, y]) => x);
  const ys = arr.map(([x, y]) => y);
  const [maxX, maxY, minX, minY] = [Math.max(...xs), Math.max(...ys),
  Math.min(...xs), Math.min(...ys)];

  const field = Array.from(Array(maxY - minY + 1), () =>
    Array(maxX - minX + 1).fill('.')
  );

  arr.forEach(([x, y]) => {
    field[maxY - y][x - minX] = "*";
  });

  return field.map(v => v.join(""));
}
