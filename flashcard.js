// var txtbook1 = {
//   var 1 = [], 2 = [];
// };
var vocabData = [];
var i;
var currentCard = 0;

//initializes Array of Vocabulary Words (vocabArray)
function initializeArray(){
  readTSV();
}

function parseTSV(tsv){
   var cardObj;
   var f;
   var tsvRows = tsv.split("\n");
   //headings = tsvRows[0].split('\t');
   for(i=1;i<tsvRows.length-1;i++){
   tsvX = tsvRows[i].split('\t');
   vocabData.push(tsvX);
   }
}

function readTSV(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      parseTSV(this.responseText);
    }
  };
  xhttp.open("GET", "text/vocab.tsv", true);
  xhttp.send();
}



//Hide form / Generate Flashcards
function generateFlashcards(){

  document.getElementsByTagName('form')[0].style.display = 'none';
  document.querySelectorAll('.btn-flashcards').forEach(el => {el.style.display = 'block';});
  document.getElementsByClassName('flashcards')[0].style.display="block";

   loadFlashcard();
  // console.log('enterred');
  // var array = []
  // var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  //
  // for (var i = 0; i < checkboxes.length; i++) {
  //   array.push(checkboxes[i].value);
  //   console.log(checkboxes[i].value);
  // }
}

//Hide Flashcards / Show Form
function showForm(){
  document.getElementsByTagName('form')[0].style.display = 'block';
  document.querySelectorAll('.btn-flashcards').forEach(el => {el.style.display = 'none';});
  document.getElementsByClassName('flashcards')[0].style.display="none";
}

function loadFlashcard(){
  document.getElementById('pos').innerHTML = vocabData[currentCard][3];
  document.getElementById('definition').innerHTML = vocabData[currentCard][0];
  document.getElementById('unit').innerHTML = 'Unit ' + vocabData[currentCard][2];
  document.getElementById('page-num').innerHTML = 'p. ' + vocabData[currentCard][4];
}

 function setCurrentCard(move){
    if(currentCard>0 && currentCard<vocabData.length-1){
     currentCard += move;
     loadFlashcard();
   }
   else if(currentCard==0){
     if(move>0){
       currentCard += move;
       loadFlashcard();
     }
   }
   else if(currentCard==vocabData.length-1){
     if(move<0){
       currentCard += move;
       loadFlashcard();
     }
   }
 }

function cardFlip(){
  var pos = document.getElementById("pos");
  var def = document.getElementById('definition');

  if(pos.getAttribute("lang")=='en'){
    pos.setAttribute('lang','jp');

    def.setAttribute('lang','jp');

    pos.innerHTML = vocabData[currentCard][3];
    def.innerHTML = vocabData[currentCard][1];
  }

  else{
    pos.setAttribute('lang','en');
    def.setAttribute('lang','en');

    pos.innerHTML = posCheck(vocabData[currentCard][3]);
    def.innerHTML = vocabData[currentCard][0];
  }
}

//Part of Speech check
//Function: Checks Part of Speech and Translates
function posCheck(pos){
  if(pos === '名詞'){
    return 'Noun';
  }
  else if(pos === '動詞'){
    return 'Verb';
  }
  else if(pos===''){
    return '';
  }
  else{
    return 'Error';
  }
}

initializeArray();
