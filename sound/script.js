const meow = document.querySelector("#catSound");

document.querySelector("#play").addEventListener("click", () => {
  meow.play();
});

document.querySelector("#stop").addEventListener("click", () => {
  meow.pause();
});
