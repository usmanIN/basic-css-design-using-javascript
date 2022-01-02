$(document).ready(function(){    
  
  const arr =[  "Data Structure & Algorithms", "Data Science", "Python", "MySQL", "PHP", 
                "HTML", "Bootstrap", "Jquery", "Java", "Machine Learning", 
                "CodeIgniter", "Laravel", "MVC", "Flask", "Git & Github", 
                "Javascript", "CSS"
            ];

    $.each(shuffle(arr), function(key, value) {
      $("skill").append("<span class='badge badge-pill'> " + value + "</span>");    
      $("skill>span").css({
        "text-transform":"uppercase",
        "positon":"absolute"        
      });
    });
    
    function shuffle(array) {
        return array.sort( ()=>Math.random()-0.5 );
    }
     
    // menubar
    $("div.content").parent().find(".content:not(:first)").css({"display":"none"});
     $(".menubar a").each(function(){
        $(this).click(function(e){
          event.preventDefault();
          const i = $(this).index();                    
            $("div.content").eq(i)
            .css({"display":"block",            
            "transition": "transform 0.25s ease-out",
            "transform":"rotateY(360deg)"
            //"animation":"popUpContent .1s linear alternate"
          }).siblings().css("display","none");  

        });
     });

     // popup models 
     $("div.project-content").css("display","none");

     $("span#project-btn").each(function(){
        $(this).parent().css("display","none");
        $(this).parent().parent().on({
          mouseenter:function(){
            $(this).find("div").css({
              "display":"block",
              "text-align":"center",
              "position": "relative",              
              "left": "0",
              "top": "-100%",              
              "opacity": "0.9",
              "background-color":"#000"              
            }).animate({"height":"100%","padding":"50px"});
          },
          mouseleave: function(){
            $(this).find("div").animate({"height":"0","padding":"0"}).slideUp();
          }
        });
      });        

     $("span#project-btn").click(function(){        
        $(this).parent().parent().next(".project-content").css({
          "display":"block",
          "position": "fixed",
          "left": "0",
          "top": "0",          
          "width": "100%",
          "height": "100%",                            
          "display": "-ms-flexbox",
          "display": "flex",
          "-ms-flex-wrap":"wrap",
          "flex-wrap":"wrap",
          "-ms-flex-pack":"center",
          "justify-content": "center",
          "margin": "0 auto",
          "z-index": "100",
          
          //"transition": "opacity 250ms 700ms ease",
          //"animation":"popUpContent .1s linear alternate",
          "overflow": "auto",
          "background-color": "rgba(31,32,41,.75)"
        }).children("div").css({
          "text-align":"justify",
          "background-color": "#FFF",                    
          "padding": "20px",
          "width":"100%",
          "margin-top":"10px",                    
          "border": "1px solid #888"
        }).parent(".project-content").click(function(){
            $(this).css({         
              "display" : "none"
            });
        });
     });

     // Portfoilo Filter
     $("div.filter a").click(function(){
        var keyword = $(this).text().toLowerCase();
        if(keyword==="all"){
          $("div.project").show();
        }else{
          $("div.project").hide().filter(function(){
              if($(this).text().toLowerCase().indexOf(keyword) > -1){
                var i = $(this).index();
                $("div.project").eq(i).show();
              };
          });
        }
     });

    $.each(['progressbar.js','bubble.js','typewriter.js'],function(key,value){
      var imported = document.createElement('script');
          imported.src = "assessts/"+value;
          document.documentElement.appendChild(imported);    
    });         
});
