function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_\.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/g, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");

  return new_id.padEnd(3, new_id.slice(-1));
}
