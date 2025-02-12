document.getElementById("hobby").addEventListener("click", function() {
    alert("Mi hobby favorito es jugar videojuegos.");
});

document.getElementById("comida").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
    this.querySelector("img").style.transform = "scale(1.1)";
});

document.getElementById("comida").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#333";
    this.querySelector("img").style.transform = "scale(1)";
});

document.getElementById("pelicula").addEventListener("dblclick", function() {
    this.innerHTML = '<img src = "https://images5.alphacoders.com/111/thumb-1920-1111276.jpg" alt="Película"><p>Me encanta Breaking bad.</p>';
});

document.getElementById("color").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    this.style.color = "red";
    this.querySelector("img").style.opacity = "200";
});

document.getElementById("artistaInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        alert("Ingresaste el nombre de tu artista favorito: " + this.value);
        this.style.border = "3px solid blue";
    }
});

document.getElementById("pais").addEventListener("wheel", function() {
    this.style.fontSize = "24px";
    this.querySelector("img").style.filter = "grayscale(100%)";
});
