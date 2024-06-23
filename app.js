document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    if (email) {
        localStorage.setItem('userEmail', email); 
        window.location.href = 'password.html'; 
    }
});
