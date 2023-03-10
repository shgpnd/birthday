//スタートボタンを押したら...
startButton.addEventListener('click', function() {
  clearScreen(tapButtonNum);//スタート画面を消して、mQuestを表示
  makeTable(mQuest1Array, 0); //mQuestArrayの表を生成
  tapButtonNum += 1;
});

//月選択の「ある」のボタン
yesButton.addEventListener('click', function() {
  if(tapButtonNum === 1) {
    mQ1 = 1;
    clearTable(22);//テーブルの値を消去
    makeTable(mQuest2Array, 0);//Q1->Q2
  } else if(tapButtonNum === 2) {
    mQ2 = 1;
    clearTable(22);//テーブルの値を消去
    makeTable(mQuest3Array, 0);//Q2->Q3
  } else if(tapButtonNum === 3) {
    mQ3 = 1;
    clearTable(22);//テーブルの値を消去
    makeTable(mQuest4Array, 0);//Q3->Q4
  } else {
    mQ4 = 1;
    tapButtonNum = 1;
    clearScreen(tapButtonNum); //mQuest終了とdQuestの表示。
    makeTable(dQuest1Array, 6);//月選択->日選択
    return;
  }
  tapButtonNum += 1;
})

//日選択の「ある」のボタン
YESButton.addEventListener('click', function() {
  if(tapButtonNum === 1) {
    dQ1 = 1;
    clearTable(22);//テーブルの値を消去
    makeTable(dQuest2Array, 6);//Q1->Q2
  } else if(tapButtonNum === 2) {
    dQ2 = 1;
    clearTable(22);//テーブルの値を消去
    makeTable(dQuest3Array, 6);//Q2->Q3
  } else if(tapButtonNum === 3) {
    dQ3 = 1;
    clearTable(22);//テーブルの値を消去
    makeTable(dQuest4Array, 6);//Q3->Q4
  } else if(tapButtonNum === 4) {
    dQ4 = 1;
    clearTable(22);//テーブルの値を消去
    makeTable(dQuest5Array, 6);//Q4->Q5
  } else {
    dQ5 = 1;
    tapButtonNum = 2;
    clearScreen(tapButtonNum); //mQuest終了とdQuestの表示。
    thinking();
    return;
  }
  tapButtonNum += 1;
})

//月選択の「ない」のボタン
noButton.addEventListener('click', function() {
  if(tapButtonNum === 1) {
    mQ1 = 0;
    clearTable(22);//テーブルの値を消去
    makeTable(mQuest2Array, 0);//Q1->Q2
  } else if(tapButtonNum === 2) {
    mQ2 = 0;
    clearTable(22);//テーブルの値を消去
    makeTable(mQuest3Array, 0);//Q2->Q3
  } else if(tapButtonNum === 3) {
    mQ3 = 0;
    clearTable(22);//テーブルの値を消去
    makeTable(mQuest4Array, 0);//Q3->Q4
  } else {
    mQ4 = 0;
    tapButtonNum = 1;
    clearScreen(tapButtonNum); //mQuest終了とdQuestの表示。
    makeTable(dQuest1Array, 6);//月選択->日選択
    return;
  }
  tapButtonNum += 1;
})
//日選択の「ない」のボタン
NOButton.addEventListener('click', function() {
  if(tapButtonNum === 1) {
    dQ1 = 0;
    clearTable(22);//テーブルの値を消去
    makeTable(dQuest2Array, 6);//Q1->Q2
  } else if(tapButtonNum === 2) {
    dQ2 = 0;
    clearTable(22);//テーブルの値を消去
    makeTable(dQuest3Array, 6);//Q2->Q3
  } else if(tapButtonNum === 3) {
    dQ3 = 0;
    clearTable(22);//テーブルの値を消去
    makeTable(dQuest4Array, 6);//Q3->Q4
  } else if(tapButtonNum === 4) {
    dQ4 = 0;
    clearTable(22);//テーブルの値を消去
    makeTable(dQuest5Array, 6);//Q4->Q5
  } else if(tapButtonNum === 5) {
    dQ5 = 0;
    tapButtonNum = 2;
    clearScreen(tapButtonNum); //dQuest終了とresultの表示。
    thinking();
    return;
  }
  tapButtonNum += 1;
})

//resultButton
resultButton.addEventListener('click', function() {
  clearScreen(tapButtonNum);
  if(tapButtonNum !==0) {
    result.style.display = 'block'//2週目以降のために'結果のpタグを非表示->表示へ'
    let m = Number(String(mQ4) + String(mQ3) + String(mQ2) + String(mQ1));//選択した結果を2進数の文字列へ
    const yourMonth = parseInt(m,2);//文字列に変換したものを2進数に変換
    let d = Number(String(dQ5) + String(dQ4) + String(dQ3) + String(dQ2) + String(dQ1));//選択した結果を2進数の文字列へ
    const yourDate = parseInt(d,2);//文字列に変換したものを2進数に変換
    yourBirthDay.innerHTML = yourMonth + '月' + yourDate + '日ですNE！';
  if(yourMonth ===12 || yourMonth ===1 || yourMonth ===2) {
    result.classList.add("winter");
  } else if(yourDate !== 0 && yourMonth >= 3 && yourMonth <= 5) {
    result.classList.add("spring");
  } else if(yourDate !== 0 && yourMonth >= 6 && yourMonth <= 8) {
    result.classList.add("summer");
  } else if(yourDate !== 0 && yourMonth >= 9 && yourMonth <= 11) {
    result.classList.add("autumn");
  } else if(yourMonth === 13 || yourMonth === 14 || yourMonth === 15 || yourMonth === 0) {
    yourBirthDay.innerHTML = '正しくありません。<br>もう一度チャレンジしてください。';
  }
    resultButton.innerHTML = 'もう一度やってみる';
    tapButtonNum = 0//2週目以降のためにリセット
  } else if(tapButtonNum === 0) {//結果を見るボタンを１回押した後の処理->繰り返しへ
    thinkingTime.style.display = 'none';//表示->非表示へ
    result.style.display = 'none';//表示->非表示へ
    playReady();//定義系リセット
    clearScreen(tapButtonNum);//スタート画面を消して、mQuest1を表示
    makeTable(mQuest1Array, 0); //mQuestArrayの表を生成
    tapButtonNum += 1;
  }
});