// created an object to store the number and its correspoing word

const numbers = {
  0: "",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
};

// create a function that converts the number into its value

const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  number = input.value;

  let w = convertNumToVal(number);

  output.innerText = w;
});

function convertNumToVal(number) {
  if (number === 0) return "Zero";
  if (number in numbers) return numbers[number];
  let word = "";
  if (number >= 10000000) {
    word = word + convertNumToVal(Math.floor(number / 10000000)) + " Crore ";

    number %= 10000000;
  }

  if (number >= 100000) {
    word = word + convertNumToVal(Math.floor(number / 100000)) + " Lakh ";

    number %= 100000;
  }

  if (number >= 1000) {
    word = word + convertNumToVal(Math.floor(number / 1000)) + " Thousand ";

    number %= 1000;
  }
  if (number >= 100) {
    word = word + convertNumToVal(Math.floor(number / 100)) + " Hundred";

    number %= 100;
  }

  // more digits
  if (number > 20) {
    if (word != "") {
      word = word + " and ";
    }

    word += convertNumToVal(Math.floor(number / 10) * 10);

    number %= 10;

    if (number % 10 > 0) {
      word += "-" + numbers[number];
    }
  } else {
    if (word !== "") {
      word += " and ";
    }
    word += numbers[number];
  }

  return word.trim();
}
