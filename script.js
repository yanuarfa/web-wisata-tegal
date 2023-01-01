const menu = document.querySelectorAll(".menu_wrapper");

window.onscroll = () => {
  const navbar = document.querySelector("nav");
  if (window.pageYOffset > 145) {
    navbar.classList.add("nav-blur");
  } else {
    navbar.classList.remove("nav-blur");
  }
};

const btnSignUp = document.querySelector(".btn_sign_up");
const btnSignIn = document.querySelector(".btn_sign_in");
const signUpModal = document.getElementById("signUpModal");
const signInModal = document.getElementById("signInModal");
const spanSignUp = document.getElementsByClassName("close-signup")[0];
const spanSignIn = document.getElementsByClassName("close-signin")[0];

btnSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  signUpModal.style.display = "block";
  document.body.style.overflow = "hidden";
});

btnSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  signInModal.style.display = "block";
  document.body.style.overflow = "hidden";
});

spanSignUp.addEventListener("click", () => {
  signUpModal.style.display = "none";
  document.body.style.overflow = "auto";
});

spanSignIn.addEventListener("click", () => {
  signInModal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.onclick = function (e) {
  if (e.target == signUpModal) {
    signUpModal.style.display = "none";
    document.body.style.overflow = "auto";
  } else if (e.target == signInModal) {
    signInModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// Script kalkulator
const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  isWaitForSecondNumber: false,
};

function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
}

function inputNumber(num) {
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = num;
  } else {
    calculator.displayNumber += num;
  }
}

const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList.contains("clear")) {
      clearCalculator();
      updateDisplay();
      return;
    }

    if (target.classList.contains("negative")) {
      inverseNumber();
      updateDisplay();
      return;
    }

    if (target.classList.contains("equals")) {
      performCalculation();
      updateDisplay();
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      updateDisplay();
    }

    inputNumber(target.innerText);
    updateDisplay();
  });
}

function inverseNumber() {
  if (calculator.displayNumber === "0") {
    return;
  }

  calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
  if (!calculator.isWaitForSecondNumber) {
    calculator.operator = operator;
    calculator.isWaitForSecondNumber = true;
    calculator.firstNumber = calculator.displayNumber;

    calculator.displayNumber = "0";
  } else {
    alert("Operator sudah ditetapkan!");
  }
}

function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
    alert("Anda belum menetapkan operator!");
    return;
  }

  let result = 0;
  if (calculator.operator === "+") {
    result =
      parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
    result =
      parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
  }

  const history = {
    firstNumber: calculator.firstNumber,
    secondNumber: calculator.displayNumber,
    operator: calculator.operator,
    result: result,
  };

  putHistory(history);
  calculator.displayNumber = result;
  renderHistory();
}
