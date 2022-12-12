const colors = ["black", "orange", "red", "purple", "aqua", "azure"];

const btn = document.getElementById("colorBtn");

btn.addEventListener("click", colorGenerator);

function randomNumber() {
  const random = Math.floor(Math.random() * colors.length);
  return random;
}

function colorGenerator() {
  document.getElementsByTagName("body")[0].style.backgroundColor =
    colors[randomNumber()];
  btn.style.color = colors[randomNumber()];
}
