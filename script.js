document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Аккаунт создан! Вы можете войти.');
    document.getElementById('registerForm').reset();
});

document.getElementById('showLogin').addEventListener('click', function() {
    document.querySelector('h1').innerText = 'Авторизация';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData && storedData.email === loginEmail && storedData.password === loginPassword) {
        alert('Добро пожаловать, ' + storedData.username + '!');
        window.location.href = 'magazin.html'; // Переход на magazin.html
    } else {
        alert('Неправильный email или пароль.');
    }
});

// 3D фон с волной
document.addEventListener('mousemove', (e) => {
    const wave = document.querySelector('.wave');
    wave.style.transform = `translate(${e.clientX * 0.02}px, ${e.clientY * 0.02}px)`;
});
