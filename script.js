// Elenco utenti con codice fiscale
const users = [
    { username: "Stefano Galli", codiceFiscale: "XYZ123456789" },
    { username: "Maria Bianchi", codiceFiscale: "ABC987654321" },
    { username: "Luca Rossi", codiceFiscale: "DEF456789012" }
    // Aggiungi altri utenti qui
];

// Funzione per gestire il login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita il comportamento di submit del form

    // Ottieni i valori inseriti dall'utente
    const codiceFiscale = document.getElementById("password").value; // Il codice fiscale è la "password"
    
    // Trova l'utente corrispondente al codice fiscale
    const user = users.find(u => u.codiceFiscale === codiceFiscale);

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
        }, 2000); // Ritardo di 2 secondi per visualizzare il messaggio
    } else {
        // Credenziali errate
        messageElement.textContent = "Codice fiscale errato. Riprova.";
        messageElement.className = "error";
        messageElement.classList.remove("hidden");
    }
});

// Funzione per togglare la sidebar (apertura/chiusura)
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); /* Toggle della sidebar */
}
