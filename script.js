function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Please enter username and password!");
    } else {
        alert("Login successful!");
        window.location.href = "index.html";
    }
}

function register() {
    alert("Registration page coming soon!");
}
