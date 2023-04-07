export function initChoice() {

    const rockImg = require("url:../../img/piedra.png");
    const paperImg = require("url:../../img/papel.png");
    const scissorsImg = require("url:../../img/tijeras.png");

    class Choice extends HTMLElement {
        constructor() {
            super();
            this.render()
        }
        render() {
            const shadow = this.attachShadow({ mode: 'open' });
            const div = document.createElement('div');
            const style = document.createElement('style');
            const size = this.getAttribute("data-size" || "sm")
            div.className = "choice";

            div.innerHTML = `
              <img class="choice-img ${size}" src="${this.textContent === 'piedra' ? rockImg : (this.textContent === 'tijeras' ? scissorsImg : paperImg)}">
            `;

            style.innerHTML = `
            .choice {
                display: flex;
            }
            
            .choice-img{
                height: 159px;
                width: 61px;
                object-position: 0px 40px;
                transition: all 0.5s;
            }

            .xl {
                height: 300px;
                width: 160px;
            }

            .choice-img:hover{
                cursor: pointer;
                transform: scale(1.5);
            }

            @media (min-width: 769px){
                .choice-img{
                    height: 190px;
                    width: 70px;
                    object-position: 0px 60px;
                }

                .xl {
                    height: 300px;
                    width: 160px;
                }
              }
          `;

            shadow.appendChild(div);
            shadow.appendChild(style);
        };
    };
    customElements.define('play-choice', Choice);
};