const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});
// Animacion carrusel

let imagenes = [
  {"url" : "img/Evento/IMG-20250601-WA0012.jpg"}, 
  {"url" : "img/Evento/IMG-20250601-WA0023.jpg"},
  {"url" : "img/Evento/IMG-20250601-WA0028.jpg"}
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
  actual -=1
  if(actual == -1){
    actual = imagenes.length - 1
  }
  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
  posicionCarrusel()
})

adelante.addEventListener('click', function(){
  actual +=1
  if(actual == imagenes.length){
    actual = 0
  }
  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
  posicionCarrusel()
})

function posicionCarrusel(){
  puntos.innerHTML = ""
  for(var i = 0; i < imagenes.length; i++){
    if(i == actual){
      puntos.innerHTML += '<p class = "bold">.<p>'
    } else{
      puntos.innerHTML += '<p>.<p>'
    }
  }
}