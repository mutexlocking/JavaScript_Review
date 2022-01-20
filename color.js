var Body = {

    setBackgroundColor : function(targetColor){
        //document.querySelector('body').style.backgroundColor=targetColor;
        $('body').css('backgroundColor', targetColor);
    },
    
    setTextColor : function(targetColor){
        //document.querySelector('body').style.color=targetColor;
        $('body').css('color', targetColor);
    }

}

var Links = {
    setLinkColor : function(targetColor){
                        // var links = document.querySelectorAll('a');
                        // for(var i=0; i<links.length; i++){
                        //         links[i].style.color=targetColor;
                        // }

                        $('a').css('color', targetColor);
                    }
}


function changeMode(self){
   
    if(self.value === 'Night Mode'){
        Body.setBackgroundColor('black')
        Body.setTextColor('white');
        Links.setLinkColor('powderblue');
        self.value='Day Mode';
    }

    else{
        Body.setBackgroundColor('white')
        Body.setTextColor('black');
        Links.setLinkColor('black');
        self.value='Night Mode';
    }
}