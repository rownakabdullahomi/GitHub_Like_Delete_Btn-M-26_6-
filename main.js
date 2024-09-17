document.getElementById("delete-input").addEventListener("keyup", function(event){
    // event.target.value  ---->  get the value from the text-box while user typing (using keyup event) 

    if(event.target.value === "delete"){
        document.getElementById("btn-delete").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-delete").setAttribute("disabled", true);
    }
    
});

document.getElementById("btn-delete").addEventListener("click", function(){
   
    // hiding or removing the text
    //document.getElementById("delete-text").style.display = "none";  // option-1
    // or
    document.getElementById("delete-text").setAttribute("hidden", true); // option-2

    // make the button disabled again
    document.getElementById("btn-delete").setAttribute("disabled", true);

    // clear the input text field
    document.getElementById("delete-input").value = "";
});