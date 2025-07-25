// メニューを開閉するためのJavaScript
const menuToggle = document.getElementById('menu-toggle');
const drawerMenu = document.getElementById('drawer-menu');

// メニューアイコンがクリックされたとき
menuToggle.addEventListener('click', () => {
    drawerMenu.classList.toggle('open');  // メニューの開閉をトグル
});
