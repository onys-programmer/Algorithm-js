function solution(new_id) {
  // 1~4단계
  const regexp2 = /[^a-z0-9-_\.]/g;
  const regexp3 = /\.{2,}/g;
  const regexp4 = /^\.|\.$/g;
  new_id = new_id.toLowerCase().replace(regexp2, "").replace(regexp3, ".").replace(regexp4, "");
  // 5~6단계
  if (new_id.length === 0) {
    new_id = "a";
  } else if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    new_id = new_id.replace(regexp4, "");
  }
  // 7단계
  if (new_id.length <= 2) {
    const c = new_id.slice(-1);
    while (new_id.length < 3) {
      new_id += c;
    }
  }
  return new_id;
}
