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

// Delete Car
const formDeleteCar = document.querySelector("[form-delete-car]");
if (formDeleteCar) {
  const action = formDeleteCar.action;

  const buttonsDeleteCar = document.querySelectorAll("[button-delete-car]");
  buttonsDeleteCar.forEach(item => {
    const carId = item.getAttribute("data-car-id");

    item.addEventListener("click", () => {
      const isConfirm = confirm("Are your sure?");
      if (isConfirm) {
        formDeleteCar.action = action + `/${carId}?_method=DELETE`
        formDeleteCar.submit();
      }
    });
  });
}
// End Delete Car