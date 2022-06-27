function solution(str) {
  // 문자열 가공
  let digits = [];
  let operators = [];
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+" || str[i] === "-" || str[i] === "*") {
      digits.push(temp * 1);
      operators.push(str[i]);

      temp = "";
    } else {
      temp += str[i];
    }

    if (i === str.length - 1) {
      digits.push(temp * 1);
      temp = "";
    }
  }

  console.log(`digits: ${digits}, operators: ${operators}`);

  // 우선순위대로 계산된 결과값의 절댓값 들의 배열을 만든다.
  let results = getResults(arr1, arr2);

  // 배열의 최댓값을 리턴
  let max = Math.max(...results);

  return max;
}

function getResults(arr1, arr2) {
  let results = [];
  const operate = (num1, num2, operator) => {
    switch (operator)
          case: "+":
      return (num1 + num2);
      case: "-":
        return (num1 - num2);
      case: "*":
        return (num1 * num2);
    }

    // 될 수 있는 모든 연산자들의 order들을 배열에 넣는다.
    let orders = [["+", "-", "*"], ["+", "*", "-"], ["-", "+", "*"], ["-", "*", "+"], ["*", "+", "-"], ["*", "-", "+"]];

    const calculate = (order, digits, operators) => {
      let i = 0;
      let curOperater = order[i];
      const length = operators.length;
      // arr2를 순회하며 1순위 계산을 처리한다.

      const recursive = (curOperater, digits, operators) => {
        // operators를 순회하면서 각 요소가 현재 실행할 연산자와 일치하면 operate 해서 digits, operators를 조작한다.
        operators.forEach(ele => {
          let counter = 0;

          if (ele === curOperator) {
            counter++;
            let result = operate(digits[j], digits[j + 1], curOperator);
            digits.splice(j, 2, result);
            operators.splice(j, 1);
          }

          // 아무것도 +가 아니면 digits와 operators를 반환하고 끝낸다.
          if (counter) recursive(curOperater, digits, operators);

          i++;
          return [digits, operators];
        });

        //             for(let j = 0; j < length; j++) {
        //                 let result;
        //                 if(operators[j] === curOperator) {
        //                     result = operate(digits[j], digits[j+1], curOperator);
        //                 }

        //                 digits.splice(j, 2, result);
        //                 operators.splice(j, 1);

        //                 if(j === length - 1) {
        //                     i++;
        //                     if(i >= 3) {

        //                         break;
        //                     }
        //                     recursive(curOperater);
        //                 }
        //             }
      }


      // 현재 실행할 연산자 = +라고 하면   

      // operators[0] === + 이면 digits[0] + digits[1]을 계산한 값을 digits[0]에 넣고 digits[1]을 지운다.
      // digits와 operators를 인자로 받는 함수 recursive를 다시 실행한다.
      // operators[1]  === + 이면 digits[1] + digits[2]을 계산한 값을 digits[1]에 넣고 digits[2]를 지운다.
      // 아무것도 +가 아니면 digits와 operator를 반환하고 끝낸다.

      // for문이 끝나면 현재 실행할 연산자를 다음 순위로 바꾸고 다시 recursive를 돌린다.
      // 연산자 다음 순위가 undefined가 되면 절대값을 씌운다.
      // result에 push한다.
    }

    orders.forEach(ele => calculate(ele, digits, operators));


    return results;
  }
