
  var dataText = ["Developer","Freelancer"];  
  function typeWriter(text, i, fnCallback) {    
    if (i < (text.length)) {

     var content = document.querySelectorAll("span.dataText");

     for (let j = 0; j < content.length; j++) {       
        content[j].innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
     }
     
     //.innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {   
      setTimeout(fnCallback, 700);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 1000);
    }      
    if (i < dataText.length) {
      typeWriter(dataText[i], 0, function(){
        StartTextAnimation(i + 1);
      });
    }    
  }
 StartTextAnimation(0);   
