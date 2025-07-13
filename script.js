const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");

// Check on page load if credentials exist
window.onload = () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
  }
};

// Submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }

  usernameInput.value = "";
  passwordInput.value = "";
  checkbox.checked = false;
});

// Existing user login
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});
