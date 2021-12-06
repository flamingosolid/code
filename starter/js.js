function loopList(list) {
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    handleItem(item);
  }
}
function handleItem(number) {
  console.log(number);

  console.log(getMessage(number));
}

function getMessage(number) {
  let message = "";

  if (number === 10) {
    message = "10!";
  } else if (number > 5) {
    message = "större än fem";
  } else if (number > 3) {
    message = "större än tre";
  } else if (number < 4) {
    message = "mindre än fyra";
  }
  return message;
}

function doubble(number) {
  return number * 2;
}
function half(number) {
  return number / 2;
}

const numbers = [1, 5, 2, 7, 10, 1, 2, 4, 6, 9, 11];
const numbers2 = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  const doubleValue = doubble(numbers[i]);
  const halfDoubleValue = half(doubleValue);
  console.log(halfDoubleValue);
}

//loopList(numbers);
//loopList(numbers2);
//handleItem(10);
