function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;

    if (password != confirm_password) {
        document.getElementById("password_match_message").innerHTML = "Las contraseñas no coinciden";
    } else {
        document.getElementById("password_match_message").innerHTML = "";
    }
}