design = function(selectors){
    if(!selectors) return;

    'use strict';
    
    let self = document.querySelector(selectors);
    let isHaveStyleElementTag = false;
    let cssString = function(ObjectCSS){
        ObjectCSS = Object.keys(ObjectCSS).map(function(key){
            return key+":"+ObjectCSS[key]
        }).join("; ");
        return ObjectCSS;
    }

    if(document.querySelector("head").querySelectorAll("style").length > 0){
        isHaveStyleElementTag = true;
    }else{
        var styleElement = document.createElement("style");
        styleElement.setAttribute('type','text/css');
    }


    self.bubble = function(options){
        if(!options.count) return;

        if(isHaveStyleElementTag){
            document.querySelector("head").querySelector("style").append('@keyframes bubble{  0% { margin-top: 1000px;} 100% { margin-top: -100%;}');       
        }else{
            styleElement.innerText = `@keyframes bubble{  0% { margin-top: 1000px;} 100% { margin-top: -100%;}`;
            document.querySelector("head").appendChild(styleElement);
        }

        let element = document.createElement("div");
        
        for (var i = 0; i< options.count; i++ ) {element.innerHTML+= "<span></span>";}           

        element.style.cssText = cssString({position:"fixed",inset:0, "z-index":-1}); 
        
        element.querySelectorAll("span").forEach(function(e){               		
            let i =  (options.size)?options.size:Math.floor( 5+Math.random() * 20) + 'px';
        
            if(!options.background){
                red = Math.floor(Math.random()*255);
                yellow = Math.floor(Math.random()*255);
                blue = Math.floor(Math.random()*255);
                background = "rgba("+red+","+yellow+","+blue+")";
            }else{
                background = options.background;
            }
                 
            e.style.cssText = cssString({
                "position": "absolute","height":i,"width":i,
                "left":Math.floor(Math.random() * innerWidth) +"px",
                "top":Math.floor(Math.random() * innerWidth) +"px",
                "animation": "bubble 25s linear infinite",
                "border-radius":"50%","background":background,
                "animation-duration":Math.floor(Math.random()*10+10)+"s"
            });
            
        });       	

        self.appendChild(element); 
    }

    self.skillBar = function(options){
        if(!options.skill) return;

        if(isHaveStyleElementTag){
            document.querySelector("head").querySelector("style").append(`.barLength::before{ content: ""; padding: 5px;  position: absolute; right:0; bottom: 6px; background:#494d5f; float: right;  border-radius: 50%;}`);        
        }else{            
            styleElement.innerText = `.barLength::before{ content: ""; padding: 5px;  position: absolute; right:0; bottom: 6px; background:#494d5f; float: right;  border-radius: 50%;}`;
            document.querySelector("head").appendChild(styleElement);
        }
    
        let skillbar = cssString({"width": "100%", "margin-bottom": "5px",});    
        let skillName = {"display": "inline-block"};
        let skillValue ={"float":"right"};
        
        if(options.text){        
            for (const key in options.text) {            
                if(options.text[key]!==""){            
                    skillName[key] = options.text[key]
                    skillValue[key] = options.text[key];
                }            
            }
        }

        skillName = cssString(skillName);
        skillValue = cssString(skillValue);
        
        let container = "";

        for (const key in options.skill) {
            if (Object.hasOwnProperty.call(options.skill, key)) {            
                container+="<div class='skillbar' style='"+skillbar+"'>";
                container+="<span class='skillName' style='"+skillName+"'>"+key+"</span><span class='skillValue'  style='"+skillValue+"'>"+Math.floor((options.skill[key]/10)*100)+"%</span>";
                container+=`<div class='barContainer'><div class='barLength'></div></div>`;
                container+="</div>";                                   
            }
        }
        
        self.innerHTML = container; 

        let barContainer = cssString({"display" : "block", "width" : "100%","background" : (!options.background)?"#f1f1f1":options.background});
        console.log(barContainer);
    
        self.querySelectorAll(".barContainer").forEach(function(e){ e.style.cssText = barContainer; });

        if(!options.barColor){
            red = Math.floor(Math.random()*255);
            yellow = Math.floor(Math.random()*255);
            blue = Math.floor(Math.random()*255);
        }

       self.childNodes.forEach(function(e){
 
           let percentage = e.querySelectorAll("span")[1].innerText.replace("%","");
           
           barLength = cssString({
               "background":(options.barColor && options.barColor!=="")?options.barColor:"rgba("+red+","+yellow+","+blue+","+"0.8)",
               width:"0%","padding":"10px 0"
            });

           e.querySelector(".barLength").style.cssText =  barLength;       
           if(options.animate){                    
                let i = 0;
                let counter = setInterval(function(){
                    if(i<=percentage){
                        e.querySelector(".barLength").style.width = i+"%";
                        e.querySelectorAll("span")[1].innerText = i+"%";
                        i++;
                    }else{
                        clearInterval(counter);
                    }
                },30);                      
           }else{
                e.querySelector(".barLength").style.width = percentage+"%";
           }

       });

    }

    
    self.tagCloud = function(options){
        if(!options) return;    
        if(!options.data) return;
        let style = {"padding":"10px 20px","background":"black","color":"#ffffff"};        
        if(options.text){        
            for (const key in options.text) {            
                if(options.text[key]!==""){ style[key] = options.text[key]; }            
            }
        }
        options.data.forEach(element => {
            self.innerHTML+= ("<span class='tag-badge' style='"+cssString(style)+"'>" + element + "</span>");            
        });
    }


    self.typewriter = function(options){
    
        if(!options.data) return;

        let span = document.createElement("span");
        span.setAttribute("class","dataText");
        self.appendChild(span);
        
        if(options.text){
            document.querySelector("span.dataText").style.cssText = cssString(options.text);
        }

        function typeWriter(text, i, fnCallback) {    
          if (i < (text.length)) {      
            document.querySelector("span.dataText").innerHTML = text.substring(0, i+1);            
                setTimeout(() => {  typeWriter(text, i + 1, fnCallback) }, 100);
            }
            else if (typeof fnCallback == 'function') {   
                setTimeout(fnCallback, 700);
            }
        }
        
        function StartTextAnimation(i) {
          if (typeof options.data[i] == 'undefined'){
              setTimeout(function() {   StartTextAnimation(0) }, 1000);
          }      
          if (i < options.data.length) {
                typeWriter(options.data[i], 0, () =>{   StartTextAnimation(i + 1) });
          }    
        }

       StartTextAnimation(0);   
    }

    return self;    
}