function loginSystem() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == 'admin' && password == '123') {
        alert('Login successfully');
        window.location.replace('main.html');
        return false;
    } else {
        alert('Login failed');
        window.location.replace('index.html')
        return false;
    }
}