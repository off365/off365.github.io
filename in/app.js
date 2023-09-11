   //CHANGING QUOTE

    var allQ = $("blockquote");
    var currentQ = 0;

    function changeQ(){

        $(allQ[currentQ]).fadeOut(800 , function(){

            if(currentQ === (allQ.lenght = 2)){
                currentQ  = 0;
            }else{
                currentQ++;
            }
            $(allQ[currentQ]).fadeIn(800);

        })
     
    }
    var qTimer = setInterval(changeQ , 3000); 