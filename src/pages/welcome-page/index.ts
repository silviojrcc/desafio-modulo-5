export function initWelcomePage(params) {
  const div = document.createElement("div") as any;
  const bgImg = require("url:../../../src/img/fondo.png");
  
  div.innerHTML = `
    <section class="welcome__section">
      <div class="title-container">
        <h1 class="title">Piedra, Papel o Tijera</h1>
      </div>
      <div class="button-container">
        <custom-button class="button">Comenzar</custom-button>
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
    .welcome__section {
      background-image:url(${bgImg});
      display:flex;
      width:100%;
      height:100vh;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      padding-top:20px;
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

    .title-container {
      margin-top:50px;
    }

    .title {
      font-style: normal;
      font-weight: 700;
      font-size: 80px;
      color: #009048;
    }

    .button-container {
      text-align:center;
      width:100%;
      margin-top:50px;
    }
  `;

  div.appendChild(style);

  div.querySelector(".button").addEventListener("click", () => {
    params.goTo("/desafio-modulo-5/instructions");
  });

  return div;
}