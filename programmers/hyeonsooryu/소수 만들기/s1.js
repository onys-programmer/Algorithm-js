function solution(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const n = nums[i] + nums[j] + nums[k];
        for (let l = 2; l * l <= n; l++) {
          if (!(n % l)) {
            break;
          } else if ((l + 1) * (l + 1) > n) {
            ans += 1;
          }
        }
      }
    }
  }
  return ans;
}
