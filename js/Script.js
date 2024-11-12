const loginform = document.getElementById("loginform");

loginForm.addEventListener("submit", (event) => {event.preventDefault();
    
    const username = document.getElementById("username") .value;
    const password = document.getElementById("password") .value;
    
    if (username === "user" && password === "password") {
        alert("Login successful!");
    } else {alert("Invalid credentials.");
    }
    });
