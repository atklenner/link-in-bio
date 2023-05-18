import "./css/style.css";

// this works because I used inputs in the form
// never let bad JS get in the way of success
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let closeArticle = document.getElementById(button.dataset.close);
    let openArticle = document.getElementById(button.dataset.open);

    if (closeArticle && openArticle) {
      closeArticle.setAttribute("closing", "");
      closeArticle.removeAttribute("open");
      setTimeout(() => {
        openArticle.classList.toggle("hidden");
        openArticle.setAttribute("open", "");
      }, 100);
      closeArticle.addEventListener(
        "animationend",
        () => {
          closeArticle.classList.toggle("hidden");
          closeArticle.removeAttribute("closing");
        },
        { once: true }
      );
    }
  });
});

const textInputs = document.querySelectorAll("#name, #email, #message");
let clearButton = document.querySelector("[data-action='clear']");
clearButton.addEventListener("click", () => {
  textInputs.forEach((input) => {
    input.value = "";
  });
});
