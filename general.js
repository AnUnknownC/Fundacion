const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Cierra el menú automáticamente al hacer clic en un enlace (opcional)
const links = sidebar.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.style.left = '-250px';
    });
});
