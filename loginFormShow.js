function loginFormShow() {
    var loginForm = document.getElementById('login');
    var authorizationForm = document.getElementById('authorization');
    var authorizationOrLogIn = document.getElementById('authorizationOrLogIn');
    loginForm.style.display = 'flex';
    authorizationForm.style.display = 'none';
    authorizationOrLogIn.style.display = 'none';
}