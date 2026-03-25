import './style.css'

const form = document.getElementById("loginForm");
const matricula = document.getElementById("matricula");
const password = document.getElementById("senha");


function showError(input, message) {
  const fieldset = input.parentElement;
  const errorSpan = fieldset.querySelector(".error-message");

  errorSpan.textContent = message;
  input.classList.add("error");
}

function clearError(input) {
  const fieldset = input.parentElement;
  const errorSpan = fieldset.querySelector(".error-message");

  errorSpan.textContent = "";
  input.classList.remove("error");
}

function validate(input) {
  if (input.value.trim() === "") {
    showError(input, "Campo obrigatório");
    return false;
  }

  clearError(input);
  return true;
}

form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede recarregar página

  const matriculaValid = validate(matricula);
  const passwordValid = validate(password);

  if (matriculaValid && passwordValid) {
    window.location.href = "dashboard.html";
  }
});