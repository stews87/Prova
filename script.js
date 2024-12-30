// Funzione per gestire il login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita il comportamento di submit del form

    // Ottieni i valori inseriti dall'utente
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Definisci le credenziali corrette
    const correctUsername = "Stefano";
    const correctPassword = "1";

    // Trova il messaggio di errore/successo
    const messageElement = document.getElementById("message");

    // Controlla le credenziali
    if (username === correctUsername && password === correctPassword) {
        messageElement.textContent = "Accesso riuscito! Benvenuto, " + username + "!";
        messageElement.className = "success";

        // Mostra il messaggio
        messageElement.classList.remove("hidden");

        // Dopo 2 secondi, redirigi l'utente alla pagina home
        setTimeout(function () {
            window.location.href = "home.html";  // Redirige alla pagina home
        }, 2000); // Il ritardo è di 2 secondi per visualizzare il messaggio di successo
    } else {
        messageElement.textContent = "Credenziali errate. Riprova.";
        messageElement.className = "error";
        messageElement.classList.remove("hidden");
    }
});
