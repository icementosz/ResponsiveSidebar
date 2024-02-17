const menuBar = document.querySelector('.header nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})

function adjustSidebarVisibility() {
    if (window.innerWidth < 576) {
        sidebar.classList.add('hide');
    } else {
        sidebar.classList.remove('hide');
    }
}


adjustSidebarVisibility();

window.addEventListener('resize', adjustSidebarVisibility);