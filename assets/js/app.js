//ボタンをクリックした時の処理
let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function() {

    //クラス名overのdivをcontainerに追加
    let container = document.getElementById("container");
    let over = document.createElement("div");
    over.classList.add("over");
    container.appendChild(over);

    // おみくじのdivを追加
    let omikuji = document.createElement("div");
    omikuji.classList.add("omikuji");
    over.appendChild(omikuji);
    omikuji.classList.add("animated", "rollIn")

    //divにおみくじのimgを追加
    let img = document.createElement("img");
    omikuji.appendChild(img);
    img.src = "assets/img/omikuji.png";

    //divにstopBtnに追加
    let stopBtn = document.createElement("button");
    stopBtn.classList.add("stopBtn");
    stopBtn.textContent = "STOP"
    omikuji.appendChild(stopBtn);

    //stopBtnを押した時の処理
    stopBtn.addEventListener("click", function() {

        omikuji.remove();

        //クラス名resultのdivをoverに追加
        let result = document.createElement("div");
        result.classList.add("result","animated","zoomIn");
        over.appendChild(result);

        //divの中に結果を示すspanタグを追加
        let span = document.createElement("span");
        result.appendChild(span);

        //変数に配列を入れる
        let fortunes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];

        //配列をランダムに取得
        let random = Math.floor( Math.random() * fortunes.length);

        //占いの結果を表示
        span.textContent = fortunes[random];

        switch (random) {
            case 0:
                span.style.color = "red";
                let word = document.createElement("p");
                word.classList.add("word");
                word.textContent = "で〜じかふ〜";
                over.appendChild(word);
                break;

            case 1:
                span.style.color = "orange";
                break;

            case 2:
                span.style.color = "yellow";
                break;

            case 3:
                span.style.color = "yellowgreen";
                break;

            case 4:
                span.style.color = "aqua";
                break;

            case 5:
                span.style.color = "blue";
                break;

            case 6:
                span.style.color = "purple";
                break;
        };

        //resultの中に閉じるbtnを追加
        let closeBtn = document.createElement("button");
        closeBtn.classList.add("close");
        closeBtn.textContent = "閉じる";
        result.appendChild(closeBtn);

        //closeBtnを押した時の処理
        closeBtn.addEventListener("click", function() {
            over.remove();
        });
    });
});
