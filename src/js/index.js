/* Here goes your JS code */

const showbtn = document.querySelector(".btn-main");
const popup = document.querySelector(".popup");
const closebtn = document.querySelector(".close-btn");
const submit = document.querySelector(".popup-submit-btn");
const thanks = document.querySelector(".text-after-form");

function showPopup() {
  showbtn.style.display = "none";
  popup.style.display = "flex";

  closebtn.addEventListener("click", () => {
    popup.style.display = "none";
    showbtn.style.display = "block";
  });
}
function submitFunction() {
  const email = document.querySelector(".email").value;
  const pass = document.querySelector(".pass").value;
  const checkbox = document.querySelector(".popup-checkbox");

  if (email && pass && checkbox.checked == true) {
    setTimeout(() => {
      popup.style.display = "none";
      thanks.style.display = "block";
    }, 3000);
  }
}
