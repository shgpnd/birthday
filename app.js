let screens = document.querySelectorAll('.screen');
let startScreen = document.getElementById('startScreen');
let cel = document.querySelectorAll('td');
let startButton = document.getElementById('start');
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let YESButton = document.getElementById('YES');
let NOButton = document.getElementById('NO');
let thinkingTime = document.getElementById('waitFor');
let think = document.getElementById('thinking');
let result = document.getElementById('result')
let resultButton = document.getElementById('resultButton');
let yourBirthDay = document.getElementById('yourBirthDay');
let tapButtonNum = 0;

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

let mQuest1Array = [];
let mQuest2Array = [];
let mQuest3Array = [];
let mQuest4Array = [];
let dQuest1Array = [];
let dQuest2Array = [];
let dQuest3Array = [];
let dQuest4Array = [];
let dQuest5Array = [];
let mQ1;
let mQ2;
let mQ3;
let mQ4;
let dQ1;
let dQ2;
let dQ3;
let dQ4;
let dQ5;

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

// //スタートボタンを押したら...
// startButton.addEventListener('click', function() {
//   clearScreen(tapButtonNum);//スタート画面を消して、mQuestを表示
//   makeTable(mQuest1Array, 0); //mQuestArrayの表を生成
//   tapButtonNum += 1;
// });

// //yesButton
// yesButton.addEventListener('click', function() {
//   if(tapButtonNum === 1) {
//     mQ1 = 1;
//     clearTable(22);
//     makeTable(mQuest2Array, 0);
//   } else if(tapButtonNum === 2) {
//     mQ2 = 1;
//     clearTable(22);
//     makeTable(mQuest3Array, 0);
//   } else if(tapButtonNum === 3) {
//     mQ3 = 1;
//     clearTable(22);
//     makeTable(mQuest4Array, 0);
//   } else {
//     mQ4 = 1;
//     tapButtonNum = 1;
//     clearScreen(tapButtonNum); //mQuest終了とdQuestの表示。
//     makeTable(dQuest1Array, 6);
//     return;
//   }
//   tapButtonNum += 1;
// })

// //YESButton
// YESButton.addEventListener('click', function() {
//   if(tapButtonNum === 1) {
//     dQ1 = 1;
//     clearTable(22);
//     makeTable(dQuest2Array, 6);
//   } else if(tapButtonNum === 2) {
//     dQ2 = 1;
//     clearTable(22);
//     makeTable(dQuest3Array, 6);
//   } else if(tapButtonNum === 3) {
//     dQ3 = 1;
//     clearTable(22);
//     makeTable(dQuest4Array, 6);
//   } else if(tapButtonNum === 4) {
//     dQ4 = 1;
//     clearTable(22);
//     makeTable(dQuest5Array, 6);
//   } else {
//     dQ5 = 1;
//     tapButtonNum = 2;
//     clearScreen(tapButtonNum); //mQuest終了とdQuestの表示。
//     thinking();
//     return;
//   }
//   tapButtonNum += 1;
// })

// //noButton
// noButton.addEventListener('click', function() {
//   if(tapButtonNum === 1) {
//     mQ1 = 0;
//     clearTable(22);
//     makeTable(mQuest2Array, 0);
//   } else if(tapButtonNum === 2) {
//     mQ2 = 0;
//     clearTable(22);
//     makeTable(mQuest3Array, 0);
//   } else if(tapButtonNum === 3) {
//     mQ3 = 0;
//     clearTable(22);
//     makeTable(mQuest4Array, 0);
//   } else {
//     mQ4 = 0;
//     tapButtonNum = 1;
//     clearScreen(tapButtonNum); //mQuest終了とdQuestの表示。
//     makeTable(dQuest1Array, 6);
//     return;
//   }
//   tapButtonNum += 1;
// })

// //NOButton
// NOButton.addEventListener('click', function() {
//   if(tapButtonNum === 1) {
//     dQ1 = 0;
//     clearTable(22);
//     makeTable(dQuest2Array, 6);
//   } else if(tapButtonNum === 2) {
//     dQ2 = 0;
//     clearTable(22);
//     makeTable(dQuest3Array, 6);
//   } else if(tapButtonNum === 3) {
//     dQ3 = 0;
//     clearTable(22);
//     makeTable(dQuest4Array, 6);
//   } else if(tapButtonNum === 4) {
//     dQ4 = 0;
//     clearTable(22);
//     makeTable(dQuest5Array, 6);
//   } else if(tapButtonNum === 5) {
//     dQ5 = 0;
//     tapButtonNum = 2;
//     clearScreen(tapButtonNum); //dQuest終了とresultの表示。
//     thinking();
//     return;
//   }
//   tapButtonNum += 1;
// })

// //resultButton
// resultButton.addEventListener('click', function() {
//   clearScreen(tapButtonNum);
//   let m = Number(String(mQ4) + String(mQ3) + String(mQ2) + String(mQ1));
//   const yourMonth = parseInt(m,2);
//   let d = Number(String(dQ5) + String(dQ4) + String(dQ3) + String(dQ2) + String(dQ1));
//   const yourDate = parseInt(d,2);
//   yourBirthDay.innerHTML = yourMonth + '月' + yourDate + '日ですNE！';
// });

// function makeTable(qustArray, a) {
//   for(let i = qustArray.length - 1; i >= 0; i--) {
//     let randomNum = Math.floor(Math.random() * qustArray.length, 1);
//     let b = i + a;
//     console.log(b);
//     cel[b].innerHTML = qustArray[randomNum];
//     qustArray.splice(randomNum, 1);
//   }
// }

// function clearScreen(tapButtonNum) {
//   screens[tapButtonNum].style.display = 'none';
//   screens[tapButtonNum + 1].style.display = 'block';
// }

// function clearTable(num) {
//   for(let i = 0; i <= num - 1; i++) {
//     cel[i].innerHTML = '　';
//   }
// }

// function thinking() {
//   let timeId = setInterval(function() {
//     let dot1 = document.getElementById('dot1');
//     let dot2 = document.getElementById('dot2');
//     let dot3 = document.getElementById('dot3');

//     if(dot1Appear === false) {
//       dot1.style.display = 'inline'; 
//       dot1Appear = true;
//     } else if (dot2Appear === false) {
//       dot2.style.display = 'inline';
//       dot2Appear = true;
//     } else if(dot3Appear === false) {
//       dot3.style.display = 'inline';
//       dot3Appear = true;
//     } else {
//       dot1.style.display = 'none'
//       dot2.style.display = 'none'
//       dot3.style.display = 'none'
//       dot1Appear = false;
//       dot2Appear = false;
//       dot3Appear = false;
//       counter += 1;
//       }
//       console.log(counter);
//       if(counter === 4) {
//         think.style.display ='none';
//         resultButton.style.display = 'block';
//         tapButtonNum === 4;
//         clearInterval(timeId);
//       }
//   }, 400);
// }