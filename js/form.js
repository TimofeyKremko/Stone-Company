  const formBtn = document.querySelector(".form__btn");

const regNumber = /^\+375\([0-9]{2}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/;

const formInput = document.querySelector(".form__input");

formBtn.addEventListener('click', () => {
  if (formInput.value && regNumber.test(formInput.value) === true) {
    Swal.fire("Форма отправлена", "Скоро с вами свяжутся", "success");
  } else {
    Swal.fire(
      "Заполните форму",
      "Для отправки формы заполните данные",
      "error"
    );
  }
})