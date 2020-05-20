// var txtbook1 = {
//   var 1 = [], 2 = [];
// };
var vocabData = [];
var i;
var currentCard = 0;

//initializes Array of Vocabulary Words (vocabArray)
//function initializeArray(){

//}
//Hide Flashcards / Show Form
function showForm(){
  document.getElementsByTagName('form')[0].style.display = 'block';
  document.querySelectorAll('.btn-flashcards').forEach(el => {el.style.display = 'none';});
  document.getElementsByClassName('flashcards')[0].style.display="none";
  document.getElementById('pgnum').style.display="none";
}

function showFlashcard(){
  document.getElementsByTagName('form')[0].style.display = 'none';
  document.querySelectorAll('.btn-flashcards').forEach(el => {el.style.display = 'block';});
  document.getElementsByClassName('flashcards')[0].style.display="block";
  document.getElementById('pgnum').style.display="block";
}

function loadFlashcard(){
  document.getElementById('pos').innerHTML = vocabData[currentCard][3]; //posCheck(vocabData[currentCard][3]);
  document.getElementById('definition').innerHTML = vocabData[currentCard][0];
  document.getElementById('unit').innerHTML = 'Unit ' + vocabData[currentCard][2].slice(2,vocabData[currentCard][2].length);
  document.getElementById('pgnum').innerHTML = (currentCard + 1) + " / " + vocabData.length;

  //Check Textbook and Apply Border Styling
  if(vocabData[currentCard][2].slice(0,2)=='1-'){
    document.getElementById('flashcard-front').style.borderTop = '5px solid #E94A48';
  }
  else if(vocabData[currentCard][2].slice(0,2)=='2-'){
    document.getElementById('flashcard-front').style.borderTop = '5px solid #0085C0'
  }
  else{
    document.getElementById('flashcard-front').style.borderTop = '5px solid #00A25F'
  }
  document.getElementById('page-num').innerHTML = 'p. ' + vocabData[currentCard][4];
}


function parseTSV(tsv){
   var cardObj;
   var f;
   var tsvRows = tsv.split("\n");
   //headings = tsvRows[0].split('\t');
   for(i=1;i<tsvRows.length;i++){
   tsvX = tsvRows[i].split('\t');
   vocabData.push(tsvX);
   }
}

function readTSV(file, callback){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      parseTSV(this.responseText);
      callback();
    }
  };
  xhttp.open("GET", "text/" + file, true);
  xhttp.send();  
}

//Hide form / Generate Flashcards
function generateFlashcards(){

  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  if(checkboxes.length > 0){
    vocabData = [];
    currentCard = 0;

//   console.log('enterred');
   var array = [];

   for (var i = 0; i < checkboxes.length; i++) {
     //array.push(checkboxes[i].value);
     readTSV(checkboxes[i].value + '.tsv', loadFlashcard);
     console.log("Loading XML File: " + checkboxes[i].value);
   }

  showFlashcard();
  document.getElementById('left').style.display = 'none';

  }
  else{
    alert("Error: Please select checkbox");
  }
}



 function setCurrentCard(move){

  //See if Card can move
    if(currentCard > 0 && currentCard < vocabData.length){
     currentCard += move;
     loadFlashcard();

   }
   else if(currentCard==0){
     if(move>0){
       currentCard += move;
       loadFlashcard();
     }  
   }
   else if(currentCard==vocabData.length){
     if(move<0){
       currentCard += move;
       loadFlashcard();
     }
   }

   if(currentCard==0){
    document.getElementById('left').style.display = 'none';
   }
   else if(currentCard==vocabData.length-1){
    document.getElementById('right').style.display = 'none';
   }
   else{
     document.getElementById('left').style.display = 'block';
     document.getElementById('right').style.display = 'block';
   }
   document.getElementById('pgnum').innerHTML = (currentCard + 1) + " / " + vocabData.length;
 }

function cardFlip(){
  var pos = document.getElementById("pos");
  var def = document.getElementById('definition');

  if(def.getAttribute("lang")=='en'){
    // pos.setAttribute('lang','jp');

    def.setAttribute('lang','jp');

    pos.innerHTML = vocabData[currentCard][3];
    def.innerHTML = vocabData[currentCard][1];
  }

  else{
    // pos.setAttribute('lang','en');
    def.setAttribute('lang','en');

    pos.innerHTML = vocabData[currentCard][3]; //posCheck(vocabData[currentCard][3]);
    def.innerHTML = vocabData[currentCard][0];
  }
}

//Part of Speech check
//Function: Checks Part of Speech and Translates
//function posCheck(pos){
//  if(pos === '名詞'){
//    return 'Noun';
//  }
//  else if(pos === '動詞'){
//    return 'Verb';
//   }
//   else if(pos===''){
//     return '';
//   }
//   else{
//     return 'Error';
//   }
// }

//initializeArray();
