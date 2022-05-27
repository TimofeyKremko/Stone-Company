const worktopsBtn = document.querySelector(".btn__worktops");
const fireplacesBtn = document.querySelector(".btn__fireplaces");
const facadesBtn = document.querySelector(".btn__facades");
const stairsBtn = document.querySelector(".btn__stairs");
const sillsBtn = document.querySelector(".btn__sills");

console.log(worktopsBtn, fireplacesBtn, facadesBtn);


worktopsBtn.addEventListener("click", () => {
  worktopsBtn.classList.toggle("left__item--active");
  const worktopsItem = document.querySelectorAll(".worktops");
  worktopsItem.forEach((item) => {
    item.classList.toggle("active");
  });
});
fireplacesBtn.addEventListener("click", () => {
  fireplacesBtn.classList.toggle("left__item--active");
  const fireplacesItem = document.querySelectorAll(".fireplaces");
  fireplacesItem.forEach((item) => {
    item.classList.toggle("active");
  });
});
facadesBtn.addEventListener("click", () => {
  facadesBtn.classList.toggle("left__item--active");
  const facadesItem = document.querySelectorAll(".facades");
  facadesItem.forEach((item) => {
    item.classList.toggle("active");
  });
});
stairsBtn.addEventListener("click", () => {
  stairsBtn.classList.toggle("left__item--active");
  const stairsItem = document.querySelectorAll(".stairs");
  stairsItem.forEach((item) => {
    item.classList.toggle("active");
  });
});
sillsBtn.addEventListener("click", () => {
  sillsBtn.classList.toggle("left__item--active");
  const sillsItem = document.querySelectorAll(".sills");
  sillsItem.forEach((item) => {
    item.classList.toggle("active");
  });
});
