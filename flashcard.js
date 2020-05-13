var yourArray, i;
var currentCard = [];

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
  document.getElementById('pos').innerHTML = currentCard[3];
  document.getElementById('definition').innerHTML = currentCard[0];
  document.getElementById('unit').innerHTML = 'Unit ' + currentCard[2];
  document.getElementById('page-num').innerHTML = 'p. ' + currentCard[4];
}

 function loadArray(){
     currentCard = ['apple','リンゴ','1-1','名詞','33'];
 }

function cardFlip(){
  var pos = document.getElementById("pos");
  var def = document.getElementById('definition');

  if(pos.getAttribute("lang")=='en'){
    pos.setAttribute('lang','jp');

    def.setAttribute('lang','jp');

    pos.innerHTML = currentCard[3];
    def.innerHTML = currentCard[1];


  }
  else{
    pos.setAttribute('lang','en');
    def.setAttribute('lang','en');

    pos.innerHTML = posCheck(currentCard[3]);
    def.innerHTML = currentCard[0];
  }
}

function posCheck(pos){
  if(pos === '名詞'){
    return 'Noun';
  }
  else if(pos === '動詞'){
    return 'Verb';
  }
  else{
    return 'Error';
  }
}
