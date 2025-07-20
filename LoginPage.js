document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

 
  if (username === "" || password === "") {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  
  if (username === "ironman" && password === "jarvis123") {
    errorMsg.style.color = "#0f0";
    errorMsg.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; 
    }, 1500);
  } else {
    errorMsg.textContent = "Incorrect credentials. Try again!";
  }
});
