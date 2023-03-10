function makeTable(questArray, a) {
  for(let i = questArray.length - 1; i >= 0; i--) {
    let randomNum = Math.floor(Math.random() * questArray.length, 1);//配列から抜き出すためのindex生成
    let index = i + a;//index番号
    cel[index].innerHTML = questArray[randomNum];//celの文字(tr)にindex番の数字を表示
    questArray.splice(randomNum, 1);//表示した数字は削除
  }
}

function clearScreen(tapButtonNum) {
  screens[tapButtonNum].style.display = 'none';//今あるscreenを消して
  screens[tapButtonNum + 1].style.display = 'block';//次を表示
}

function clearTable(num) {
  for(let i = 0; i <= num - 1; i++) {
    cel[i].innerHTML = '　';//値がないセルは空白を代入
  }
}

function thinking() {
  let timeId = setInterval(function() {
    let dot1 = document.getElementById('dot1');//点を取得(spanタグ)
    let dot2 = document.getElementById('dot2');//点を取得(spanタグ)
    let dot3 = document.getElementById('dot3');//点を取得(spanタグ)

    if(dot1Appear === false) {
      dot1.style.display = 'inline'; //表示させたいが'block'ではく'inline'->横並びにしたいから
      dot1Appear = true;//点が３つそろった時の布石
    } else if (dot2Appear === false) {
      dot2.style.display = 'inline';//表示させたいが'block'ではく'inline'->横並びにしたいから
      dot2Appear = true;//点が３つそろった時の布石
    } else if(dot3Appear === false) {
      dot3.style.display = 'inline';//表示させたいが'block'ではく'inline'->横並びにしたいから
      dot3Appear = true;//点が３つそろった時の布石
    } else {
      dot1.style.display = 'none'//一気に消す
      dot2.style.display = 'none'//一気に消す
      dot3.style.display = 'none'//一気に消す
      dot1Appear = false;//繰り返し２回目以降のためのリセット
      dot2Appear = false;//繰り返し２回目以降のためのリセット
      dot3Appear = false;//繰り返し２回目以降のためのリセット
      counter += 1;
      }
      console.log(counter);
      if(counter === 4) {
        dot1Appear = false;//2週目以降のためのリセット
        dot2Appear = false;//2週目以降のためのリセット
        dot3Appear = false;//2週目以降のためのリセット
        counter = 0;//2週目以降のためのリセット
        think.style.display ='none';//2週目以降のためのリセット
        resultButton.style.display = 'block';
        tapButtonNum === 4;//resultButtonにつなげるための処置
        clearInterval(timeId);
      }
  }, 400);
}

function playReady() {//2週目以降のために再度配列等を定義(spliceですべて空になっているから)
//月の配列を生成
let monthArray = [];
for(i = 1; i <= 12; i++) {
  monthArray.push(i);
}

//日にちの配列を生成
let dateArray = [];
for(j = 1; j <= 31; j++) {
  dateArray.push(j);
}

let dot1Appear = false;
let dot2Appear = false;
let dot3Appear = false;
let counter = 0;

//月questionの配列を生成
for(let j = 1; j <= 4; j++) {
for(i = 1; i <= monthArray.length; i++) {
    if(j === 1) {
      if(i%2 === 1){
        mQuest1Array.push(i);
      }
    } else if(j === 2) {
      if(i >= 2 && i%4 >= 2) {
        mQuest2Array.push(i);
      }
    } else if (j === 3) {
      if(i >= 4 && i%8 >= 4) {
        mQuest3Array.push(i);
        }
    } else if(j === 4) {
      if(i >= 8 && i%16 >= 8) {
        mQuest4Array.push(i)
        }
    }
 }
}

//日questionの配列を生成
for(let j = 1; j <= 5; j++) {
for(i = 1; i <= dateArray.length; i++) {
    if(j === 1) {
      if(i%2 === 1){
        dQuest1Array.push(i);
      }
    } else if(j === 2) {
      if(i >= 2 && i%4 >= 2) {
        dQuest2Array.push(i);
      }
    } else if (j === 3) {
      if(i >= 4 && i%8 >= 4) {
        dQuest3Array.push(i);
        }
    } else if(j === 4) {
      if(i >= 8 && i%16 >= 8) {
        dQuest4Array.push(i)
        }
    } else if(j === 5) {
      if(i >= 16 && i%32 >= 16) {
        dQuest5Array.push(i)
        }
    }
 }
}
think.style.display ='block';
resultButton.innerHTML = '結果を見る';
resultButton.style.display = 'none';
result.classList.remove("spring");
result.classList.remove("summer");
result.classList.remove("autumn");
result.classList.remove("winter");
}
