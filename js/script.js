document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const drawerMenu = document.getElementById('drawer-menu');

    if (!menuToggle || !drawerMenu) return;

    menuToggle.addEventListener('click', () => {
        drawerMenu.classList.toggle('open');
    });

    // メニュー外クリックで閉じる処理（必要に応じて）
    document.addEventListener('click', (event) => {
        if (!drawerMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            drawerMenu.classList.remove('open');
        }
    });
});
