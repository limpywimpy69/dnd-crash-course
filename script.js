// Highlight the nav item matching the current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    if (item.getAttribute('data-page') === currentPage) {
        item.classList.add('active');
    }
});

// Save and restore module completion checkboxes via localStorage
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    const saved = localStorage.getItem(checkbox.id);
    if (saved === 'true') {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', function (e) {
        localStorage.setItem(this.id, this.checked);
        e.stopPropagation();
    });
});
