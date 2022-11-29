const menu = document.querySelectorAll(".menu_wrapper");

window.onscroll = () => {
  const navbar = document.querySelector("nav");
  if (window.pageYOffset > 145) {
    navbar.classList.add("nav-blur");
  } else {
    navbar.classList.remove("nav-blur");
  }
};
