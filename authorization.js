/*AUTHORIZATION*/
function ValidMail() {
    var expression = /^[\w][\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailErrorAuthorization')
    var valid = expression.test(email);
    if (valid) {
        emailError.style.display = 'none';
        return true;
    } else {
        emailError.style.display = 'block';
        return false;
    }

}

function ValidPassword() {
    var expression = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/i;
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('passwordErrorAuthorization')
    var valid = expression.test(password);
    if (valid) {
        passwordError.style.display = 'none';
        return true;
    } else {
        passwordError.style.display = 'block';
        return false;
    }

}

function ValidRetryPassword() {
    var retryPasswordError = document.getElementById('retryPasswordError')
    var password = document.getElementById('password').value;
    var retryPassword = document.getElementById('retryPasswordAuthorization').value;
    if (password === retryPassword) {
        retryPasswordError.style.display = 'none';
        return true;
    } else {
        retryPasswordError.style.display = 'block';
        return false;
    }

}

function ValidName() {
    var expression = /^[A-ZА-Я][-a-zA-Zа-яА-Я]+$/i;
    var nameError = document.getElementById('nameErrorAuthorization')
    var name = document.getElementById('name').value;
    var valid = expression.test(name);
    if (!valid || name == '' || name == ' ') {
        nameError.style.display = 'block';
        return false;
    } else {
        nameError.style.display = 'none';
        return true;
    }
}

function ValidSurname() {
    var expression = /^[A-ZА-Я][-a-zA-Zа-яА-Я]+$/i;
    var surnameError = document.getElementById('surnameErrorAuthorization')
    var surname = document.getElementById('surname').value;
    if (surname == '') {
        surnameError.style.display = 'none';
        return true;
    } else {
        var valid = expression.test(surname);
        if (!valid || surname == ' ') {
            surnameError.style.display = 'block';
            return false;
        } else {
            surnameError.style.display = 'none';
            return true;
        }
    }
}

function Authorize() {
    if (this.ValidMail() && this.ValidPassword() && this.ValidRetryPassword() && this.ValidName() && this.ValidSurname()) {
        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;
        var email = document.getElementById('email').value;
        document.cookie = 'loggedIn=1';
        document.cookie = 'name=' + name;
        document.cookie = 'surname=' + surname;
        document.cookie = 'email=' + email;
        document.location.href = "lk.html";
    }
}

/*LOGIN*/
function LogIn() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailOrPasswordErrorLogin = document.getElementById('emailOrPasswordErrorLogin')
    /*поиск в БД*/
}

/*OTHER*/
function AuthorizationRedirect() {
    var cookie = document.cookie.split(';');
    var isLogged = cookie[0].split('=')[1];
    if (isLogged == 1)
        document.location.href = "lk.html";
    else
        document.location.href = "authorization.html";
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function FillProfile() {
    var name = document.getElementById('profileName');
    var surname = document.getElementById('profileSurname');
    var email = document.getElementById('profileEmail');

    name.append(getCookie('name'));
    surname.append(getCookie('surname'));
    email.append(getCookie('email'));
}

function FillBookmarks() {
    for (var i = 0; i < 1; i++) {
        var bookmark = document.getElementById("bookmark" + i)
        var bookmarkImg = document.getElementById("bookmarkImg" + i)
        bookmark.display = "none";
        bookmarkImg.display = "none";
    }
    var cookies = getCookie('bookmarks');
    var bookmarks = cookies.split('|');
    for (var i = 0; i < bookmarks.length-1; i++){
        var bookmark = document.getElementById("bookmark" + i)
        var bookmarkImg = document.getElementById("bookmarkImg" + i)
        var bookmarkText = document.getElementById("bookmarkText" + i)
        
        bookmark.display = "block";
        bookmarkImg.alt = bookmarks[i];
        bookmarkImg.src = "../Content/images/" + bookmarks[i] + ".jpg";
        bookmarkText.innerText = bookmarks[i];
    }
}

function FillBookmarksPlate() {
    var cookies = getCookie('bookmarks');
    if (cookies === undefined) {
        cookies = '';
        document.cookie = 'bookmarks=';
    }
    var bookmarks = cookies.split('|');
    var page = document.getElementById('image').alt;
    var bookmarkPlate = document.getElementById('bookmarkPlate')
    if (bookmarks.indexOf(page) != -1) {
        bookmarkPlate.innerText = "Удалить закладку";
    } else {
        bookmarkPlate.innerText = "Добавить закладку";
    }
}

function LogOut() {
    document.cookie = 'loggedIn=0';
    document.cookie = 'name=';
    document.cookie = 'surname=';
    document.cookie = 'email=';
    document.cookie = 'bookmarks=';
    document.location.href = "authorization.html";
}

function SelectBookmark() {
    var cookies = getCookie('bookmarks');
    if (cookies === undefined) {
        cookies = '';
        document.cookie = 'bookmarks=';
    }
    var bookmarks = cookies.split('|');
    if (bookmarks[bookmarks.length-1] == "")
        bookmarks.splice(bookmarks.length-1, 1);
    var page = document.getElementById('image').alt;
    var bookmarkPlate = document.getElementById('bookmarkPlate')
    if (bookmarks.indexOf(page) != -1) {
        bookmarks.splice(bookmarks.indexOf(page), 1);
        bookmarkPlate.innerText = "Добавить закладку";
    } else {
        bookmarks.splice(0, 0, page);
        bookmarkPlate.innerText = "Удалить закладку";
    }
    var res = "";
    for (var i = 0; i < bookmarks.length; i++)
        res += bookmarks[i] + "|";
    document.cookie = 'bookmarks=' + res;
}

/*NEW*/
function goRegister(str) {
    document.location.href = "https://localhost:44384/Account/" + str;
    //document.location.replace("https://localhost:44384/Account/Register");
}
