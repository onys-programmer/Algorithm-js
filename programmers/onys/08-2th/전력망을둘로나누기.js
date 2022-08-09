function solution(n, wires) {
  const links = {};
  wires.forEach(w => {
    const [a, b] = w;
    if (!links[a]) links[a] = [];
    links[a].push(b);
    if (!links[b]) links[b] = [];
    links[b].push(a);
  });

  const searchTree = (root, exception) => {
    let count = 0;
    const queue = [root];
    const visited = [];
    visited[root] = true;

    while (queue.length) {
      const cur = queue.pop();
      links[cur].forEach(next => {
        if (next != exception && !visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      });
      count++;
    }
    return count;
  }

  let minDiff = 100;
  wires.forEach((w, i) => {
    const [a, b] = w;
    const diff = Math.abs(n - 2 * searchTree(a, b));
    minDiff = Math.min(minDiff, diff);
  });

  return minDiff;
}
