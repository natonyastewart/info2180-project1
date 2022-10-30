window.onload = function(){
    var inputText = document.getElementsByTagName("input")[0];
    var message = document.getElementsByClassName("message")[0];

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    document.getElementsByClassName("btn")[1].onclick=function(event){
        event.preventDefault();

        if (inputText.value.match(mailformat) < 1){
            message.innerHTML = "Please enter a valid email address.";
        }
    
        else{
            message.innerHTML = "Thank you! Your email address "+ inputText.value +" has been added to our mailing list!";
        }
        
    }

}