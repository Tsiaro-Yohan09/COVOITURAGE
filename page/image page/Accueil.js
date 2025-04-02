document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;

    console.log(`Départ: ${departure}, Arrivée: ${arrival}, Date: ${date}`);
    // Tu peux ensuite ajouter ici une logique pour envoyer les données à un serveur ou filtrer les résultats sur la page
});