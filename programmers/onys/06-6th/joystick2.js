function solution(name) {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let visited = 1;
  let pos = 0;
  let movements = 0;

  const moveHorizontally = () => {
    let frontMovement = 0;
    let backMovement = 0;
    while (true) {
      if (visited > name.length) break;
      frontMovement++;
      backMovement++;
      visited++;
      if (name[pos + frontMovement] != 'A') {
        pos += frontMovement;
        movements += frontMovement;
        break;
      } else if (name[pos - backMovement] != 'A') {
        pos -= backMovement;
        pos = pos >= 0 ? pos : name.length + pos;
        movements += backMovement;
        break;
      }
    }
  }

  const moveVertically = () => {
    let idx = alpha.indexOf(name[pos]);
    idx = idx <= 13 ? idx : alpha.length - idx;
    movements += idx;
  }

  while (visited <= name.length) {
    moveVertically();
    if (visited < name.length) moveHorizontally()
    else break;
  }

  return movements;
}