function solution(id_list, report, k) {
  let replies = {};
  let reportTable = {};
  
  for (id of id_list) {
      replies[id] = 0;
      reportTable[id] = new Set();
  }
  
  report.forEach( ele => {
      let [ reporter, reportee ] = ele.split(' ');
      reportTable[reportee].add(reporter);
  });
  
  for ([ reportee, reporters ] of Object.entries(reportTable)) {
      if (reporters.size >= k) {
          reporters.forEach(reporter => {
              replies[reporter] += 1
          });
      }
  }
  
  return Object.values(replies);
}
