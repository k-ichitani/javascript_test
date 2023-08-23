// let hello = 'Hello World';
// alert(hello);

// let int1 = 1;
// alert(int1);

// let int2 = -10;
// alert(int2);

// let float1 = 3.14;
// alert(float1);

// let str1 = 'JavaScriptを覚えよう';
// alert(str1);

// // 四則演算
// alert(4 + 3);
// alert(8 - 5);
// alert(2 * 6);
// alert(10 / 2);

// // 文字列を結合する
// alert('Hello' + 'World');

// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);

// // 条件分岐
// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }

// 繰り返し処理
// 引数の条件がtrueの間、波括弧内部の処理が繰り返される
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// // 決められた回数の処理を繰り返す
// let i;
// let num = 0;

// // 変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ）
// for(i = 1; i < 11; i ++){
//   num = num +i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// alert(5 + 2);
// alert(10 - 6);
// alert(8 * 5);
// alert(20 / 4);


// //メイン部分
// let alertString;
// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp");
// //変数の中身をアラートで表示する
// alert(alertString);
// // 作成した関数
// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }


// // 入力ダイアログで値を入力する
// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);


// let user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
// alert('あなたの選んだ手は' + user_hand + 'です。');


// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3); //0～2までのランダムな整数値を生成

//   if(js_hand_num == 0){
//     js_hand = "グー";
//   } else if (js_hand_num == 1){
//     js_hand = "チョキ";
//   } else if (js_hand_num == 2){
//     js_hand = "パー";
//   }

//   return js_hand;
// }


// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
// アラートウィンドウにエラー表示させる
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
}
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);
// 結果を表示する , アラートウィンドウでキャンセルボタンが押されたとき「またチャレンジしてね」アラートメッセージ表示
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor ( Math.random() * 3 );
  let hand_name;

  if (js_hand_num == 0){
    hand_name = "グー";
  } else if (js_hand_num == 1){
    hand_name = "チョキ";
  } else if (js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    } else if (js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    } else if (js == "チョキ"){
      winLoseStr = "負け";
    } else if (js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}