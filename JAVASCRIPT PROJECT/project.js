// 1 Despot some money
// 2 Determine no of lines to bet on
// 3 Collect a bet money
// 4 Spin the slot machine
// 5 Check if the user won
// 6 Give the user their winnings
// 7 Play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter the deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid Deposit Amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {};

const getSum = () => {
  console.log();
};

const depositAmount = deposit();
console.log(depositAmount);
