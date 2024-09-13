const shape = document.getElementById('shape');
let moved = false;

// Click to move right
shape.addEventListener('click', () => {
    if (!moved) {
        shape.style.transform = 'translateX(500px)';
        moved = true;
    }
});

// Double-click to become a circle
shape.addEventListener('dblclick', () => {
    shape.style.borderRadius = '50%';
    shape.style.width = '300px';
    shape.style.height = '300px';
});

// Mouseenter to change color and show message
shape.addEventListener('mouseenter', () => {
    shape.style.backgroundColor = 'green';
    shape.innerHTML = "<p>Bonjour Sabiha, tu es entré dans le l'espace</p>";
    shape.style.color = 'white';
    shape.style.display = 'flex';
    shape.style.justifyContent = 'center';
    shape.style.alignItems = 'center';
});

// Mouseout to change color and show message
document.addEventListener('click', (event) => {
    if (!shape.contains(event.target)) {
        shape.style.backgroundColor = 'red';
        shape.innerHTML = "<p>Bonjour Sabiha, tu es hors du l'espace</p>";
    }
});
