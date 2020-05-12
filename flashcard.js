var yourArray, i;

//Hide form / Generate Flashcards
function generateFlashcards(){

  document.getElementsByTagName('form')[0].style.display = 'none';
  document.querySelectorAll('.btn-flashcards').forEach(el => {el.style.display = 'block';});
  document.getElementsByClassName('flashcards')[0].style.display="block";
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

//Generate Array of Vocabulary Terms on Page Load
$(document).ready(function(){

   });
