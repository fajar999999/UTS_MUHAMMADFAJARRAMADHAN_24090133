document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    // Validasi: Email dan password tidak boleh kosong
    if (email === "" || password === "") {
        errorMessage.style.display = 'block'; // Tampilkan pesan error HTML
        return;
    } else {
        errorMessage.style.display = 'none'; // Sembunyikan pesan error
    }

    // Redirect ke dashboard.html setelah login sukses
    window.location.href = 'dashboard.html'; 
});