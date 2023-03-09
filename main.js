window.addEventListener("load", init);

function init(){
    const articleElem = document.querySelectorAll("article");
    var lista = ["<div><img src='kep.jpg' alt='kep' ></div>", "<div><img src='kep2.jpg' alt='kep2' ></div>"]
    for (let index = 0; index < lista.length; index++) {
        articleElem[0].innerHTML = lista[index];
        
    }

}