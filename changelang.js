function getXML(htmlFile, lang){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      toggleLang(this.responseXML, htmlFile, lang)
    }
  };
  xhttp.open("GET", "text/" + htmlFile, true);
  xhttp.send();  
}

function toggleLang(responseTxt,htmlFile,lang){
 var parser, i; 
 var langArray = document.querySelectorAll('*[lang=en]');

 parser = DOMParser(); 

 xmlDoc = parser.parseFromString(htmlFile,"text/xml");
 for(i=0;i<langArray.length;i++){
 	var xmlValue;
 	if(langArray[i].id=)
 	langArray[i].innerHTML = xmlDoc.getElementsByTagName(lang)[0].childNodes[0].nodeValue;
 }
}
