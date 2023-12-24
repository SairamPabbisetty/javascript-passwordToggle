let eye = document.getElementById("eye")
let eye_slash = document.getElementById("eye_slash")
let password = document.getElementById("password")

if(password.value === "") {
    eye_slash.style.display = 'none';
    eye.style.display = 'inline-block';
}

eye_slash.addEventListener('click', function() {
    eye_slash.style.display = 'none';
    eye.style.display = 'inline-block';
    password.type = 'password';
});

eye.addEventListener('click', function() {
    eye.style.display = 'none';
    eye_slash.style.display = 'inline-block';
    password.type = 'text';
});
