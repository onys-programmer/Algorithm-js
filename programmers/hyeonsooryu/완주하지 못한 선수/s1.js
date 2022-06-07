function solution(participant, completion) {
  const sortedP = participant.sort();
  const sortedC = completion.sort();
  for (let i = 0; i < sortedC.length; i++) {
    if (sortedP[i] !== sortedC[i]) {
      return sortedP[i];
    }
  }
  return sortedP[sortedP.length - 1];
}
