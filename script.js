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
  } else if (e.target == signInModal) {
    signInModal.style.display = "none";
  }
};
