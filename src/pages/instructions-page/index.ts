export function initInstructionsPage(params) {
  const div = document.createElement("div");
  const bgImg = require("url:../../../src/img/fondo.png");
  
  div.innerHTML = `
    <section class="instructions__section">
      <div class="instructions__title">
        <h2 class="instruction"> Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h2>
      </div>
      <div class="instructions__button-container">
        <custom-button class="instructions__button">Jugar!</custom-button>
      </div>
      <div class="hands-container">
        <play-choice>tijeras</play-choice>
        <play-choice>papel</play-choice>
        <play-choice>piedra</play-choice>
      </div>
    </section>
  `;

  const style = document.createElement("style");
  style.innerHTML = `
    .instructions__section {
      background-image:url(${bgImg});
      display:flex;
      width:100%;
      height:100vh;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      padding-top:100px;
      padding-left: 20px;
      padding-right:20px;
    }

    .hands-container {
      display:flex;
      gap:40px;
      flex-direction:row;
      justify-content:space-evenly;
      overflow:hidden;
      padding: 0 20px;
    }

    .instructions__title {
        padding:20px;
        max-width:650px;
        margin-top:50px;
    }

    .instruction {
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
    }

    .instructions__button-container{
      text-align:center;
      width:100%;
      margin-top:50px;
    }
  `;

  div.appendChild(style);

  div.querySelector(".instructions__button")?.addEventListener("click", () => {
    params.goTo("/desafio-modulo-5/game");
  });
  
  return div;
}