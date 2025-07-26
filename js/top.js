// 蜂の制御関数
document.addEventListener("DOMContentLoaded", function () {
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

        // duration 秒後に蜂を削除
        setTimeout(() => {
            bee.remove();
            beeCount--;
        }, duration * 1000);
    }

    // 2秒ごとに蜂を生成
    setInterval(createBee, 2000);
});
