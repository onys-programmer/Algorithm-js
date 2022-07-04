function solution(priorities, location) {
  let order = [];

  const queue = Object.entries(priorities);

  while (queue.length) {
    let picked = queue.shift();
    if (picked[1] >= Math.max(...queue.map(ele => ele[1]))) {
      order.push(picked[0]);
    } else {
      queue.push(picked);
    }
  }

  return order.map(Number).indexOf(location) + 1;
}
