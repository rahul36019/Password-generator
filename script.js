console.log("Welcome to password generator");

const btn = document.querySelector(".btn");
const box = document.querySelector(".password_box");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("length-value");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";
const all = upper + lower + number + symbol;

lengthInput.addEventListener("input", () => {
  lengthValue.innerText = lengthInput.value;
});

btn.addEventListener("click", () => {
  let password = "";
  let length = lengthInput.value;
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * all.length);
    password += all[random];
  }
  box.innerHTML = password;
});

box.addEventListener("click", () => {
  navigator.clipboard.writeText(box.innerHTML)
    .then(() => {
      console.log("Copied to clipboard");
      alert("Copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
});
