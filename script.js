const email = document.getElementById("email");
const password = document.getElementById("password");
const errorEmail = document.querySelector(".errorEmail");
const errorPassword = document.querySelector(".errorPassword");

function handleForm(e) {
  if (!email.validity.valid) {
    showError();
  }
  e.preventDefault();
}

email.addEventListener("input", () => {
  showError();
});

password.addEventListener("input", () => {
  showError();
});

function showError() {
  if (email.validity.valueMissing) {
    errorEmail.textContent = "Debe ingresar un correo";
    email.classList.add("active");
  } else {
    errorEmail.textContent = "";
    email.classList.remove("active");
  }

  if (password.validity.tooShort) {
    errorPassword.textContent = "El password debe ser de mas de 6 carácteres";
    password.classList.add("active");
  } else {
    errorPassword.textContent = "";
    password.classList.remove("active");
  }
}
