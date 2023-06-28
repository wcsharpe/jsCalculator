function numberSymbolButton(num) {
  document.getElementById("screen").value += num; // add button input to screen
}

function clearButton() {
  document.getElementById("screen").value = ""; // remove input from screen
}

function calculateButton() {
  let result = eval(document.getElementById("screen").value); // take what is on screen and eval

  document.getElementById("screen").value = result;  // set screen to the results
}

function positiveOrNeg() {
  let result = eval(document.getElementById("screen").value); // take what is on screen

  result = result * (-1); // now num will be able to be input as either pos or neg

  document.getElementById("screen").value = result; // set the result to the screen
}

function percentageButton() {
  let result = eval(document.getElementById("screen").value); // take what is on screen

  result = result / 100; // now num will be able to be computed

  document.getElementById("screen").value = result; // set the result to the screen
}