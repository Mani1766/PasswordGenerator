let expression = "";

function press(value) {
  expression += value;
  document.getElementById("expression").textContent = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById("result").textContent = result;
  } catch (e) {
    document.getElementById("result").textContent = "Error";
  }
}

function clearDisplay() {
  expression = "";
  document.getElementById("expression").textContent = "";
  document.getElementById("result").textContent = "0";
}
