// Funzione per mostrare/nascondere la sidebar (menu laterale)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = (sidebar.style.display === 'block') ? 'none' : 'block';
}

// Gestione del login e autenticazione
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita il comportamento di submit del form

    // Ottieni i valori inseriti dall'utente
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Elenco utenti con codice fiscale
    const users = [
        { username: "StefanoGalli", codiceFiscale: "XYZ123456789" },
            { username: "MariaBianchi", codiceFiscale: "ABC987654321" },
            { username: "LucaRossi", codiceFiscale: "DEF456789012" },
            { username: "StefanoRaffiti ", codiceFiscale: "RFFSFN87M01I199W" }
        // Aggiungi altri utenti qui
    ];

    // Trova l'utente corrispondente al nome utente e codice fiscale
    const user = users.find(u => u.username === username && u.codiceFiscale === password);
    const messageElement = document.getElementById("message");

    if (user) {
        // Accesso riuscito
        messageElement.textContent = "Accesso riuscito! Benvenuto, " + user.username + "!";
        messageElement.className = "success";
        messageElement.classList.remove("hidden");

        // Salviamo i dati dell'utente nella sessione
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('codiceFiscale', user.codiceFiscale);

        // Dopo 2 secondi, redirigi l'utente alla pagina home
        setTimeout(function () {
            window.location.href = "home.html";  // Redirige alla pagina home
        }, 2000); // Il ritardo è di 2 secondi per visualizzare il messaggio
    } else {
        // Credenziali errate
        messageElement.textContent = "Credenziali errate. Riprova.";
        messageElement.className = "error";
        messageElement.classList.remove("hidden");
    }
}

// Gestione del contenuto della home page
window.addEventListener('load', function() {
    // Elenco utenti con codice fiscale
    const users = [
        { username: "StefanoGalli", codiceFiscale: "XYZ123456789" },
            { username: "MariaBianchi", codiceFiscale: "ABC987654321" },
            { username: "LucaRossi", codiceFiscale: "DEF456789012" },
            { username: "StefanoRaffiti ", codiceFiscale: "RFFSFN87M01I199W" }
        // Aggiungi altri utenti qui
    ];

    // Recupera i dati utente dalla sessione
    const username = sessionStorage.getItem('username');
    const codiceFiscale = sessionStorage.getItem('codiceFiscale');

    // Trova l'utente corrispondente
    const user = users.find(u => u.username === username && u.codiceFiscale === codiceFiscale);

    if (user) {
        // Mostra i dati utente nella homepage
        document.getElementById('user-name').textContent = user.username; // Nome Utente
        document.getElementById('user-cf').textContent = `Codice Fiscale: ${user.codiceFiscale}`; // Codice Fiscale
    } else {
        // Se non è trovato, redirigi alla pagina di login
        window.location.href = 'index.html';
    }
});
