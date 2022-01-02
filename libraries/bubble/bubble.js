
   $("div.bubble").each(function(){
    $(this).append("<div></div>").children("div:first").each(function(){
      
      var total = 100;
       for (var i = 0; i< total; i++ ) {
            $(this).append("<span> </span>");
       }          

       $(this).css({
        "position": "absolute",
        "top": "0",
        "left": "0",
        "bottom": "-10px",
        "z-index": -1,          
        "width": "100%",
        "overflow": "hidden"
       });

       $(this).children("span").css({                	
               "position": "absolute",                  
               "display":"block",
               "width":"10px",
               "height": "10px",           
               "background": " rgba(255, 255, 255, 0.2)",
               "animation": "animate 25s linear infinite",
              "bottom": "-150px"                 
        });

        $(this).children("span").each(function(){               		
            let i =  Math.random() * 20 + 'px';
            $(this).css({    
                "left":Math.random() * innerWidth + 'px',
                "height": i,
                "background":"rgba("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", 0.8)",
                "width": i,
                "animation-duration": Math.floor(Math.random()*10+2)+"s",                      
                "animation-delay": Math.floor(Math.random()*10)+"s"                                        
            });
        });       	

    });
  });
