// Alert
const boxAlert = document.querySelector("[box-alert]");
if (boxAlert) {
  const time = parseInt(boxAlert.getAttribute("data-time"));
  const buttonClose = boxAlert.querySelector("[button-close-alert]");

  setTimeout(() => {
    boxAlert.classList.add("d-none");
  }, time);

  buttonClose.addEventListener("click", () => {
    boxAlert.classList.add("d-none");
  });
}
// End Alert