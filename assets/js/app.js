let baseEndpoint = 'https://api.github.com';
let usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector('#name'); //El selector es de tipo id, por lo que debe ser #name y se elimina el $ ya que no es una buena practica usarlo al definir el nombre de variables.  
const b = document.querySelector('#blog'); //El selector es de tipo id, por lo que debe ser #blog y se elimina el $ ya que no es una buena practica usarlo al definir el nombre de variables.
const l = document.querySelector('#location');//El selector es de tipo id, por lo que debe ser #location y se elimina el $ ya que no es una buena practica usarlo al definir el nombre de variables.


async function displayUser(username) { //Se agrega async antes de la funcion para que la funcion devuelva una promesa
  n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // Se agrega la promesa que permite convertir el contenido obtenido por fetch en un JSON y acceder por medio de la constante data a los atributos
  console.log(data); 
  
  n.textContent = `${data.name}`; //Se utilizan batckticks para que funcione la plantilla literal
  b.textContent = `${data.blog}`; //Se utilizan batckticks para que funcione la plantilla literal
  l.textContent = `${data.location}`; //Se utilizan batckticks para que funcione la plantilla literal
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);