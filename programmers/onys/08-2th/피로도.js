function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(false);
  let maxCnt = 0;

  const dfs = (k, cnt) => {
    maxCnt = Math.max(cnt, maxCnt);

    for (let i = 0; i < dungeons.length; i++) {
      const [required, cost] = dungeons[i];
      if (k >= cost && k >= required && !visited[i]) {
        visited[i] = true;
        dfs(k - cost, cnt + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);

  return maxCnt;
}
