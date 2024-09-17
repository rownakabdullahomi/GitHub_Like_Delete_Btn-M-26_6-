document.getElementById("delete-input").addEventListener("keyup", function(event){
    // console.log(event.target.value);
    if(event.target.value === "delete"){
        document.getElementById("btn-delete").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-delete").setAttribute("disabled", true);
    }
    
});

document.getElementById("btn-delete").addEventListener("click", function(){
   
    document.getElementById("delete-text").style.display = "none";
});