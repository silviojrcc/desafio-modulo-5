import { state } from "../../state";

export function initGameScore() {
  class GameScore extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");
      const score = state.getScore();

      div.innerHTML = `
      <div class="container">
        <h3 class="title">Score</h3>
        <p class="text" variant="body">Player: ${score.player}</p>
        <p class="text" variant="body">Maquina: ${score.computer}</p>
      </div>
      `;

      style.innerHTML = `
        .container{
            border:solid black 5px;
            border-radius:2px;
            min-width:230px;
            min-height:190px;
            background-color:white;
        }

        .title{
            font-size:50px;
            text-align:center;
            color:black;
        }
        
        .text{
            font-size:35px;
            text-align:right;
            padding:5px;
        }
      `;

      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("game-score", GameScore);
}