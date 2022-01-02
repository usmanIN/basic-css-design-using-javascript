     //skill progress bar
     $("div#skillprogress").each(function(){    
        let selector = $(this);
        let technical_skills = {
           'html/css': 8,           
           'php': 8,           
           'Java': 6,
           'javascript/jquery':7          
        };
        
        /*selector.before("<p>Skill</p>").parent().find("p:first").css({
            "font-size":"24px",
            "font-weight":"700"
        });*/
        $.each(technical_skills,function(key,value){
         var percentage = Math.floor((value/10)*100);
         var container="";
             container+="<div id='skillbar'>";
             container+="<span>"+key+"</span><span>"+percentage+"%</span>";
             container+="<div><div></div></div>";
             container+="</div>";                   
             selector.append(container);
        });
 
        selector.children().find("span:last").each(function(){
           var scale = $(this).text().replace('%','');
           var value = 0;                    
           var elm = $(this);
           let counter = setInterval(function(){
             if(value<=parseInt(scale)){              
               elm.text(value+"%");            
               value+=1;
             }else{
               clearInterval(counter);
             }
           },25);         
        });
 
        selector.children().children("div").css({          
         position:"relative",
         "display" : "block",
         "width" : "100%",
         "height" : "10px",
         "background" : "#f1f1f1",
         "box-shadow" : "inset 0 0 15px rgba(255, 255, 255, .2)",
         "border-radius" : "4px",
         "transition":"0.4s linear all"        
        });
       
        let values = Object.keys(technical_skills).map(function(key){
         return technical_skills[key];
       });
 
       selector.children().each(function(){
         var i = $(this).index();          
         var percentage = Math.floor((values[i]/10)*100);
         $(this).index(),$(this).children("div").children("span").text(percentage+"%");
      });
 
        selector.children().each(function(){
          var i = $(this).index();          
          var percentage = Math.floor((values[i]/10)*100);
           $(this).children().children("div").css({
               "background":"rgba("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+", "+Math.floor(Math.random() * 255)+", 0.8)",
               "border-radius" : "4px",
               width: "0%",
               height: "10px"
           }).animate({
             width: percentage+"%"
           },2000);
        });
 
      });    