function del_char(id) {
  var result = "";
  var arr = id.split("");
  var testType1 = /^[a-z0-9]*$/;
  var testType2 = /[-_.]/;
  for (var i = 0; i < arr.length; i++) {
    if (testType1.test(arr[i]) || testType2.test(arr[i])) result += arr[i];
  }
  return result;
}

function swift_dot(id) {
  var arr = id.split("");
  var result = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] === ".") {
      if (arr[i] !== arr[i - 1]) result += arr[i];
    } else result += arr[i];
  }
  return result;
}

function first_dot(id) {
  var result = "";
  var arr = id.split("");
  if (arr[0] === ".") arr.shift();
  if (arr[arr.length - 1] === ".") arr.pop();

  for (var i = 0; i < arr.length; i++) result += arr[i];

  return result;
}

function add_a(id) {
  if (id === "") id += "a";
  return id;
}

function min_three(id) {
  var result = "";
  var arr = id.split("");

  if (arr.length <= 2) while (arr.length !== 3) arr.push(arr[arr.length - 1]);

  for (var i = 0; i < arr.length; i++) result += arr[i];

  return result;
}
function solution(new_id) {
  var answer = new_id.toLowerCase();
  answer = del_char(answer);
  answer = swift_dot(answer);
  answer = first_dot(answer);
  answer = add_a(answer);
  answer = answer.substring(0, 15);
  answer = first_dot(answer);
  answer = min_three(answer);
  return answer;
}
