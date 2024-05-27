const calculatorRegister = document.getElementById("calculator-register");
const calculatorOutput = document.getElementById("calculator-output");
const buttons = document.getElementsByTagName("button");

function clearRegister() {
  calculatorRegister.innerHTML = ``;
  calculatorOutput.innerText = "";
}

function clearLastDigit() {
  calculatorRegister.lastElementChild.remove();
}

function calculate() {
  const registerContent =
    calculatorRegister.textContent || calculatorRegister.innerText;

  const result = eval(registerContent);

  calculatorOutput.innerText = result;
}

const actionsMap = {
  backspace: clearLastDigit,
  clear: clearRegister,
  calculate: calculate,
};

function registerValue(event) {
  const element = event.target;

  const value = element.dataset.number;
  const action = element.dataset.action;
  const signal = element.dataset.signal;

  if (value) {
    calculatorRegister.innerHTML += `<span>${value}</span>`;
  } else if (action) {
    actionsMap[action]();
  } else if (signal) {
    const registerContent =
      calculatorRegister.textContent || calculatorRegister.innerText;

    if (
      registerContent === "" ||
      ["+", "-", "/", "*"].indexOf(
        registerContent.substring(registerContent.length - 1)
      ) !== -1
    )
      return;
    calculatorRegister.innerHTML += `<span class="text-primary-blue">${signal}</span>`;
  }
}

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];

  button.addEventListener("click", registerValue);
}
