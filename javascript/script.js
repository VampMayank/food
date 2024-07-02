document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    fetch('http://localhost:5500/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful!') {
            message.style.color = 'green';
            message.textContent = data.message;
            // Redirect to another page or perform other actions
        } else {
            message.style.color = 'red';
            message.textContent = data.message;
        }
    })
    .catch(error => {
        message.style.color = 'red';
        message.textContent = 'An error occurred during login.';
        console.error('Error:', error);
    });
});
