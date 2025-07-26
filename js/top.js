document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const drawerMenu = document.getElementById("drawer-menu");

    menuToggle.addEventListener("click", function () {
        drawerMenu.classList.toggle("drawer-menu-active");
    });

    document.addEventListener("click", function (event) {
        if (!drawerMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            drawerMenu.classList.remove("drawer-menu-active");
        }
    });

    const container = document.querySelector(".bee-container");
    if (!container) return;

    // 現在の蜂の数を追跡
    let beeCount = 0;

    function createBee() {
        // 最大数チェック
        if (beeCount >= 2) return;

        const bee = document.createElement("div");
        bee.classList.add("bee");

        // ランダムな位置にセット
        bee.style.top = `${Math.random() * 90}vh`;
        bee.style.left = `${Math.random() * 100}vw`;

        // 飛行時間もランダムに
        const duration = Math.random() * 5 + 5; // 5〜10秒
        bee.style.animationDuration = `${duration}s`;

        container.appendChild(bee);
        beeCount++;

        // 10秒後に蜂を削除し、カウントを減らす
        setTimeout(() => {
            bee.remove();
            beeCount--;
        }, duration * 1000);  // duration秒後に削除
    }

    setInterval(createBee, 2000);
});
