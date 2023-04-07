export function initCustomButton(){

    class Button extends HTMLElement {
        constructor() {    
          super();
          this.render();
        }
        
        render(){
            const shadow = this.attachShadow({mode: 'open'});
            const button = document.createElement("button");
            const style = document.createElement("style");
            button.textContent= this.textContent;
            button.className = "boton";

            style.innerHTML = `
                .boton{
                    width: 322px;
                    background-color: #006CFC;
                    color:#fff;
                    font-size:35px;
                    border: solid 4px #001997;
                    border-radius: 15px;
                    margin:0;
                    padding:20px 0;
                    font-family: 'Odibee Sans', cursive;
                }

                .boton:hover{
                    cursor: pointer;
                    background-color: #0d5bc1;
                }

                @media (min-width: 769px){
                    .boton{
                        width: 404px;
                        font-size:45px;
                    }
                  }
            `;

            shadow.appendChild(button);
            shadow.appendChild(style);

        }
    }
    customElements.define("custom-button", Button);

}