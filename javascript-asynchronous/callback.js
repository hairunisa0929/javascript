function showSum(sum) {
  console.log(`the sum result is ${sum}`);
}

function addition(num1, num2, callbackFunc) {
  let sum = num1 + num2;
  callbackFunc(sum);
}

addition(2, 3, showSum);
