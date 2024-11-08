document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    form.addEventListener('submit', function(event) {
        const username = document.getElementById('username').value.trim();
        const password = passwordField.value.trim();
        
        if (username === '' || password === '') {
            alert('Please enter both username and password.');
            event.preventDefault();
        }
    });

    // Toggle password visibility
    eyeIcon.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        // Toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
});
