
let design = function(selectors){
    if(!selectors) return;

    'use strict';
    
    let self = document.querySelector(selectors);

    self.bubble = function(){
        let element = document.createElement("div");
        let bubbleCount = 100;
               for (var i = 0; i< total; i++ ) {
                    element.innerHTML = "<span> </span>";
               }   
        let object = {
            "position": "absolute",
            "top": "0",
            "left": "0",
            "bottom": "-10px",
            "z-index": -1,          
            "width": "100%",
            "overflow": "hidden"
           };
           
           
        for (const key in object) {

            if (Object.hasOwnProperty.call(object, key)) {
                const element = object[key];                
            }
        }
        
        
        let spanObject = {                	
            "position": "absolute",                  
            "display":"block",
            "width":"10px",
            "height": "10px",           
            "background": " rgba(255, 255, 255, 0.2)",
            "animation": "animate 25s linear infinite",
            "bottom": "-150px"                 
        };

        
        element.querySelectorAll("span").forEach(function(){               		
            let i =  Math.random() * 20 + 'px';
            $(this).css({"left":Math.random() * innerWidth + 'px',"height": i,
                "background":"rgba("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", 0.8)",
                "width": i,
                "animation-duration": Math.floor(Math.random()*10+2)+"s",                      
                "animation-delay": Math.floor(Math.random()*10)+"s"                                        
            });
        });       	









        self.append(element);
        return self;
    }

    return self;
}












