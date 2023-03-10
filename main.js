window.addEventListener("load", init);

function init() {
  let lista = [
    "kep.jpg",
    "kep2.jpg",
    "kep3.jpg",
    "kep4.jpg",
    "kep5.jpg",
    "kep6.jpg",
    "kep7.jpg",
    "kep8.jpg",
  ];
  const ARTICLEELEM = document.querySelectorAll("article");
  for (let index = 0; index < lista.length; index++) {
    ARTICLEELEM[0].innerHTML +=
      "<div><img src='" + lista[index] + "' alt='kep'></div>";
  }
  const KEPELEM = document.querySelectorAll("article img");
  console.log(KEPELEM);
  let mainElem = document.querySelectorAll("section img");
  let foKep = document.querySelectorAll("section div img");
  let aktElem = 0;
  for (let index = 0; index < lista.length; index++) {
    KEPELEM[index].addEventListener("click", function () {
      foKep[0].src = lista[index];
      aktElem = index;
    });
  }

  const BALELEM = document.querySelectorAll(".bal");
  const JOBBELEM = document.querySelectorAll(".jobb");

  JOBBELEM[0].addEventListener("click", function () {
    aktElem++;
    foKep[0].src = lista[aktElem];
    console.log(aktElem);
  });
  BALELEM[0].addEventListener("click", function () {
    aktElem--;
    foKep[0].src = lista[aktElem];
    console.log(aktElem);
  });
}
