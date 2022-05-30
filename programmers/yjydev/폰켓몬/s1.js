function solution(nums) {
  const kinds = new Set(nums);
  return kinds.size <= nums.length / 2 ? kinds.size : nums.length / 2;
}
