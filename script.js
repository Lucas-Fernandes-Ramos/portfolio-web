
//alert("Olá mundo");


var humburguer = document.querySelector('.humburguer');
//console.log(humburguer);

humburguer.addEventListener("click", function(){
  document.querySelector(".container")
  .classList.toggle("show-menu");
});