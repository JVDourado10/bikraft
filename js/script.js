//Ativar Items do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Galeria de Bicicletas
const galeria = document.querySelectorAll('.bicicleta-fotos img');
const galeriaContainer = document.querySelector('.bicicleta-fotos');

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 400px)").matches;
  if(media){
     galeriaContainer.prepend(img);
  }
 
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);


//Animação
if(window.SimpleAnime){
  new SimpleAnime();
}