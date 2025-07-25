document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const drawerMenu = document.getElementById("drawer-menu");

    // メニュートグルの動作
    menuToggle.addEventListener("click", function () {
        drawerMenu.classList.toggle("drawer-menu-active");
    });

    // ドロワーメニュー外をクリックでメニュー閉じる
    document.addEventListener("click", function (event) {
        if (!drawerMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            drawerMenu.classList.remove("drawer-menu-active");
        }
    });

    // 蜂の動き
    const body = document.body;

    // 蜂をランダムに追加する関数
    function createBee() {
        const bee = document.createElement("div");
        bee.classList.add("bee");

        // ランダムな位置に蜂を配置
        bee.style.top = `${Math.random() * 100}vh`;
        bee.style.left = `${Math.random() * 100}vw`;

        // ランダムに動かす
        bee.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5秒〜10秒のランダムな速度
        body.appendChild(bee);

        // 蜂が完全に飛び終わったら削除
        setTimeout(() => {
            bee.remove();
        }, 10000); // 10秒後に削除
    }

    // 定期的に蜂を生成
    setInterval(createBee, 2000); // 2秒ごとに蜂を追加
});
