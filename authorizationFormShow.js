function authorizationFormShow() {
    var loginForm = document.getElementById('login');
    var authorizationForm = document.getElementById('authorization');
    var authorizationOrLogIn = document.getElementById('authorizationOrLogIn');
    loginForm.style.display = 'none';
    authorizationForm.style.display = 'flex';
    authorizationOrLogIn.style.display = 'none';
}