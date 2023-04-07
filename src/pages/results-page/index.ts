import { state } from "../../state";

export function initResult(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  const lastState = state.getState();

  const fondo = require("url:../../../src/img/fondo.png");
  const imgWin = require("url:../../../src/img/ganaste.png");
  const imgLose = require("url:../../../src/img/perdiste.png");
  const imgDraw = require("url:../../../src/img/empate.png");

  function createPlayElement(playState) {
    const playElement = document.createElement("div");
    playElement.innerHTML = `<play-choice data-size="xl">${playState}</play-choice>`;
    return playElement;
  }

  const playerPlay = createPlayElement(lastState.currentGame.playerPlay);
  const computerPlay = createPlayElement(lastState.currentGame.computerPlay);

  div.innerHTML = `
    <section class="result__section">
      <div class="computer-play"></div>
      <div class="player-play"></div>
      <section class="results-container">
        <div>
          <img class="result-img" src="${imgWin}"></img>
        </div>
        <div>
          <game-score></game-score>
        </div>
        <div class="container-buttons">
          <custom-button class="button-return-to-play">Volver a Jugar </custom-button>
        </div>
      </section>
    </section>
  `;

  style.innerHTML = `
    .result-img{
      max-width:230px;
      max-height:230px;
    }

    .result__section{
      background-image:url(${fondo});
      display:flex;
      height:100vh;
      flex-direction:column;
      align-items:center;
    }

    .results-container{
      padding:20px;
      display:none;
      flex-direction:column;
      justify-content: space-between;
      align-items:center;
      position:absolute;
      min-width:375px;
      top:0px;
      bottom:0px;
      right:0px;
      left:0px;
    }

    .player-play{
      position: absolute;
      bottom:0px;
    }

    .computer-play{
      transform:rotate(180deg);
    }

    .button-return-to-play{
      width:100%;
    }
  `;

  const resultsContainer: any = div.querySelector(".results-container");
  const resultImg: any = div.querySelector(".result-img");
  const intervalo = setInterval(() => 1000);

  setTimeout(() => {
    clearInterval(intervalo);

    const results = {
      player: {
        background: "rgba(136, 137, 73, 0.9)",
        img: imgWin,
      },
      computer: {
        background: "rgba(137, 73, 73, 0.9)",
        img: imgLose,
      },
      draw: {
        background: "rgba(255, 233, 0, 0.7)",
        img: imgDraw,
      },
    };

    const currentResult = results[lastState.currentGame.result];

    resultsContainer.style.display = "flex";
    resultsContainer.style.background = currentResult.background;
    resultImg.src = currentResult.img;
  }, 2000);

  div.querySelector(".computer-play")?.appendChild(computerPlay);
  div.querySelector(".player-play")?.appendChild(playerPlay);
  div.appendChild(style);

  div.querySelector(".button-return-to-play")?.addEventListener("click", () => {
    params.goTo("/desafio-modulo-5/instructions");
  });

  return div;
}
