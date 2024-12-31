window.addEventListener('load', function () {
    // Recupera i dati utente dalla sessione
    const username = sessionStorage.getItem('username');
    const codiceFiscale = sessionStorage.getItem('codiceFiscale');

    // Verifica se i dati sono presenti
    if (username && codiceFiscale) {
        // Mostra i dati utente nella home
        document.getElementById('user-name').textContent = username; // Nome Utente
        document.getElementById('user-cf').textContent = `Codice Fiscale: ${codiceFiscale}`; // Codice Fiscale
    } else {
        // Se non ci sono dati, reindirizza alla pagina di login
        window.location.href = 'index.html';
    }
});

// Funzione per il logout
function logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('codiceFiscale');
    window.location.href = 'index.html'; // Reindirizza alla pagina di login
}

// Funzione per toggle della sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); // Attiva/disattiva la sidebar
}
