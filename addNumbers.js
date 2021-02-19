const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    // let message = reader.input;
    // let num = parseInt(message);
    reader.question("Please input a number to be summed", (answer) => {
      let number = parseInt(answer);
      let newSum = sum + number;
      console.log(newSum);

      addNumbers(newSum, numsLeft - 1, completionCallback);
    });
  } else {
    reader.close();
    completionCallback(sum);
  }
}

addNumbers(0, 3, (sum) => console.log(`Total Sum: ${sum}`));
