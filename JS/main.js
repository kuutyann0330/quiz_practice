let question = [
  [
    "愛知県の県庁所在地",
    "1.豊田",
    "2.名古屋",
    "3.岡崎",
    "2"
  ],
  [
    "車の名産地",
    "1.豊田",
    "2.名古屋",
    "3.岡崎",
    "1"
  ],
  [
    "徳川家康公の出身は",
    "1.豊田",
    "2.名古屋",
    "3.岡崎",
    "3"
  ]
];

// console.log(question[0][0]);


// 引数を宣言と共にHTMLのタグを代入することで　引数に役割を与える
let quiz = document.getElementById("question");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");


//関数を実行　引数宣言
let correct = 0;
let quizCut = 0;

// 関数を実行 javaで言うとこのメソッドのようなもの
//これでページ上の部品に配列の内容をを表示させる
function quizSet() {
  quiz.textContent = question[quizCut][0];
  ans1.textContent = question[quizCut][1];
  ans2.textContent = question[quizCut][2];
  ans3.textContent = question[quizCut][3];
}

quizSet();

function answerCheck(ans) {
  if (ans == question[quizCut][4]) {
    alert("正解!!")
    correct++;
  } else {
    alert("不正解")

  }
  quizCut++;

  // 全部回答し終わったら
  if (quizCut == question.length) {
    quiz.textContent = `正解数は${correct}でした！`;
    ans1.textContent = "";
    ans2.textContent = "";
    ans3.textContent = "";

    const btnBox = document.getElementById("btn-box");
    btnBox.style.display = 'none';

    // 新しい <button> 要素を作成
    const newButton = document.createElement('button');
    // ボタンのテキストを設定
    newButton.textContent = 'もう一度挑戦する';

    // ボタンにIDやクラスを追加することも可能
    newButton.id = 'retry-button';

    // body要素に新しいボタンを追加
    document.body.appendChild(newButton);

    // ボタンにクリックイベントを追加（新しいクイズを開始する関数を呼び出すなど）
    newButton.addEventListener('click', function () {
      // 例: ページをリロードして最初からやり直す
      location.reload();
    });



  } else {
    quizSet();
  }
}
