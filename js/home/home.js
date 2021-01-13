const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

const enviar = document.querySelector("#enviar");
const addCard = document.querySelector(".cards");

let nomeComida = document.querySelector("#adicionar");
let ingredientes = document.querySelector("#ingredientes");

btn.onclick = () => {
  modal.style.display = "block";
};

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

enviar.addEventListener('click', () => {
  let valorNomeComida = nomeComida.value;
  let valorIngrediente = ingredientes.value;

  addCard.innerHTML = `
      <section class="card">
      <div class="card-header">
      <h3>${valorNomeComida}</h3>
      <div class="imagem">
      <img
      src="https://source.unsplash.com/random/photo"
      alt="Foto Comida"
      />
      </div>
      </div>
      <div class="card-content">
      <p class="titulo-receita">Receita</p>
      <div class="lista">
          <ul>
          <p class="link-listas">
            ${valorIngrediente}
          </p>
          </ul>
      </div>
      </div>
      <button id="pedir">Pedir</button>
      </section>
  
      `;
});

function Database() {
  let connection;
  let openRequest = indexedDB.open("index.html", 1);
  openRequest.onupgradeneeded = (e) => {
    console.log("Cria ou altera um banco já existente");
    let minhaConnection = e.target.result;
    if (minhaConnection.objectStoreNames.contains("HTMLRender")) {
      minhaConnection.deleteObjectStore("HTMLRender");
    }
    minhaConnection.createObjectStore("HTMLRender", {
      autoIncrement: true,
    });
  };
  openRequest.onsuccess = (e) => {
    console.log("Conexão obtida com sucesso");
    connection = e.target.result;
  };
  openRequest.onerror = (e) => {
    console.log(e.target.error);
  };
}
