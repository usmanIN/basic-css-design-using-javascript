
let cssString = function(ObjectCSS){
    ObjectCSS = Object.keys(ObjectCSS).map(function(key){
        return key+":"+ObjectCSS[key]
    }).join("; ");
    return ObjectCSS;
}

let design = function(selectors){
    if(!selectors) return;

    'use strict';
    
    let self = document.querySelector(selectors);

    let isHaveStyleElementTag = false;

    if(document.querySelector("head").querySelectorAll("style").length > 0){
        isHaveStyleElementTag = true;
    }else{
        let style = document.createElement("style");
        style.setAttribute('type','text/css');
    }


    self.bubble = function(bubbleCount){
        if(!bubbleCount) return;

        if(isHaveStyleElementTag){
            document.querySelector("head").querySelector("style").append('@keyframes bubble{  0% { margin-top: 1000px;} 100% { margin-top: -100%;}');       
        }else{
            style.innerText = `@keyframes bubble{  0% { margin-top: 1000px;} 100% { margin-top: -100%;}`;
            document.querySelector("head").appendChild(style);
        }

        let element = document.createElement("div");
        
        for (var i = 0; i< bubbleCount; i++ ) {element.innerHTML+= "<span></span>";}   

        element.style.cssText = `position:fixed; top: 0; left:0; right:0; bottom:0; z-index:-1`; 
        
        element.querySelectorAll("span").forEach(function(e){               		
            let i =  Math.floor( 5+Math.random() * 20) + 'px';
        
            red = Math.floor(Math.random()*255);
            yellow = Math.floor(Math.random()*255);
            blue = Math.floor(Math.random()*255);
     
            let css = cssString({
                "position": "absolute","height":i,"width":i,
                "left":Math.floor(Math.random() * innerWidth) +"px",
                "top":Math.floor(Math.random() * innerWidth) +"px",
                "animation": "bubble 25s linear infinite",
                "border-radius":"50%","background":"rgba("+red+","+yellow+","+blue+")",
                "animation-duration":Math.floor(Math.random()*10+10)+"s"
            });
            e.style.cssText = css;
            
        });       	

        self.append(element);
        return self;
    }

    self.skillBar = function(options){
        if(!options.skill) return;

        if(isHaveStyleElementTag){
            document.querySelector("head").querySelector("style").append(`.barLength::before{ content: ""; padding: 5px;  position: absolute; right:0; bottom: 6px; background:#494d5f; float: right;  border-radius: 50%;}`);        
        }else{            
            style.innerText = `.barLength::before{ content: ""; padding: 5px;  position: absolute; right:0; bottom: 6px; background:#494d5f; float: right;  border-radius: 50%;}`;
            document.querySelector("head").appendChild(style);
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
        self.querySelectorAll(".skillbar").forEach(function(e){
            let text = e.querySelectorAll("span")[1].innerText.replace("%",'');
            let i = 0;
            let counter = setInterval(function(){
                if(i<=parseInt(text)){
                    e.querySelectorAll("span")[1].innerText = i+"%";
                    i++;
                }else{
                    clearInterval(counter);
                }
            },25);    
        });

        
        let barContainer = cssString({"display" : "block", "width" : "100%","background" : (!options.barBackground && options.barBackground=="")?"#f1f1f1":options.barBackground});
    
        self.querySelectorAll(".barContainer").forEach(function(e){ e.style.cssText = barContainer; });

        if(!options.barColor){
            red = Math.floor(Math.random()*255);
            yellow = Math.floor(Math.random()*255);
            blue = Math.floor(Math.random()*255);
        }

       self.childNodes.forEach(function(e){
 
           let percentage = e.querySelectorAll("span")[1].innerText.replace("%","");
           
           barLength = cssString({"background":(options.barColor && options.barColor!=="")?options.barColor:"rgba("+red+","+yellow+","+blue+","+"0.8)",width:"0%","padding":"10px 0"});

           e.querySelector(".barLength").style.cssText =  barLength;       
           let i = 0;
           let counter = setInterval(function(){
               if(i<=percentage){
                e.querySelector(".barLength").style.width = i+"%";
                i++;
               }else{
                   clearInterval(counter);
               }
           },25);       

       });
 
       return self;
    }

    








    return self;
    
}