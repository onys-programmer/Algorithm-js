function solution(new_id) {
  // 1~4단계
  let answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-\_\.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "");

  // 5단계
  if (answer === "") answer = "a";

  // 6단계
  if (answer.length >= 16) answer = answer.slice(0, 15).replace(/^\.|\.$/g, "");

  // 7단계
  const last = answer.slice(-1);
  while (answer.length < 3) {
    answer += last;
  }

  return answer;
}
