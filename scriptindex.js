// Funzione per gestire il login
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita il comportamento di submit del form

    // Ottieni i valori inseriti dall'utente
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Array di utenti con nome, password e codice fiscale
    const users = [
        { username: "Stefano", password: "1", codiceFiscale: "XYZ123456789" },
        { username: "Marco", password: "12345", codiceFiscale: "ABC987654321" }
    ];

    // Trova l'utente corrispondente
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Salva i dati dell'utente nel sessionStorage
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('codiceFiscale', user.codiceFiscale);

        // Messaggio di successo
        const messageElement = document.getElementById("message");
        messageElement.textContent = "Accesso riuscito! Benvenuto, " + username + "!";
        messageElement.className = "success";
        messageElement.classList.remove("hidden");

        // Reindirizza alla home dopo 2 secondi
        setTimeout(function () {
            window.location.href = "home.html";
        }, 2000);
    } else {
        // Messaggio di errore
        const messageElement = document.getElementById("message");
        messageElement.textContent = "Credenziali errate. Riprova.";
        messageElement.className = "error";
        messageElement.classList.remove("hidden");
    }
});
