import "./css/style.css";

let buttons = document.querySelectorAll("button");
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
