const granitBtn = document.querySelector(".btn__granit");
const onixBtn = document.querySelector(".btn__onix");
const mramorBtn = document.querySelector(".btn__mramor");
const travertinBtn = document.querySelector(".btn__travertin");
const compositBtn = document.querySelector(".btn__composit");



granitBtn.addEventListener("click", () => {
  const granitItem = document.querySelectorAll(".granit");
  granitBtn.classList.toggle("left__item--active");
  granitItem.forEach((item) => {
    item.classList.toggle("active");
  });
});

onixBtn.addEventListener("click", () => {
  onixBtn.classList.toggle("left__item--active");
  const onixItem = document.querySelectorAll(".onix");
  onixItem.forEach((item) => {
    item.classList.toggle("active");
  });
});

mramorBtn.addEventListener("click", () => {
  mramorBtn.classList.toggle("left__item--active");
  const mramorItem = document.querySelectorAll(".mramor");
  mramorItem.forEach((item) => {
    item.classList.toggle("active");
  });
});

travertinBtn.addEventListener("click", () => {
  travertinBtn.classList.toggle("left__item--active");
  const travertinItem = document.querySelectorAll(".travertin");
  travertinItem.forEach((item) => {
    item.classList.toggle("active");
  });
});

compositBtn.addEventListener("click", () => {
  compositBtn.classList.toggle("left__item--active");
  const compositItem = document.querySelectorAll(".composit");
  compositItem.forEach((item) => {
    item.classList.toggle("active");
  });
});