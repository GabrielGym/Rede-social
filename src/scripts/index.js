const buttonsAside = document.querySelectorAll("#buttonsAside")

function buttonsHouver (){
    for(let i = 0; i < buttonsAside.length; i++){
        
        buttonsAside[i].addEventListener("click", () =>{
            buttonsAside[i].innerText = `Seguindo`
            buttonsAside[i].classList.add("button-seguindo")
        }) 
        
    }

}
buttonsHouver()

