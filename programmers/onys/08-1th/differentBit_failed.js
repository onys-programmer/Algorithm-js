function solution(numbers) {
  return numbers.map(number => {
    let target = number + 1;

    const difference = (num1, num2) => {
      let cnt = 0;
      let bin1 = num1.toString(2);
      let bin2 = num2.toString(2);
      const maxLen = Math.max(bin1.length, bin2.length);
      bin1 = bin1.padStart(maxLen, 0);
      bin2 = bin2.padStart(maxLen, 0);

      for (let i = 0; i < maxLen; i++) {
        if (bin1[i] != bin2[i]) cnt++;
      }

      return cnt;
    }

    while (difference(number, target) > 2) {
      target++;
    }

    return target;
  })
}
