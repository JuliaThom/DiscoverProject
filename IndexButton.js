document.addEventListener("DOMContentLoaded", function() {
    // Warte, bis das DOM vollständig geladen ist

    // Finde den Button
    var button = document.querySelector('.button');

    // Füge einen Event-Listener hinzu, um auf Klicks zu reagieren
    button.addEventListener('click', function(event) {
        // Navigiere zur Hauptseite (main.html)
        window.location.href = 'main.html';
    });
});