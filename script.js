window.addEventListener("load", init);

function init(){
    const articleElem = document.querySelectorAll("article");
    articleElem[0].innerHTML="<div><img src='kep.jpg' alt='kep' ></div>"
    articleElem[0].innerHTML +="<button>OK</button>";
    const buttonElem = document.querySelectorAll("article button");

    const kepElem = document.querySelectorAll("article div img")


    buttonElem[0].addEventListener("click",function(event){
        const divElem = document.querySelectorAll("article div");
        divElem[0].classList.add("formazas")
        divElem[0].style.border="1px solid red";
        kepElem[0].src="kep3.jpg"
    })
    kepElem[0].addEventListener("mouseover",function(event){
        kepElem[0].src="kep2.jpg"
        event.target.style.border="5px solid orange"

    })
    kepElem[0].addEventListener("mouseout",function(event){
        kepElem[0].src="kep.jpg"
        event.target.style.border="0px solid orange"

    })


}
