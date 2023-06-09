export function initCounter() {
    class Counter extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        let counter = 3;
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");
        style.innerHTML = `
          .counter{
              color: black;
              min-width:60px;
              min-height:80px;
              font-size:100px;
          }        
        `;
        const intervalo = setInterval(() => {
          div.innerHTML = `
              <div class="counter">${counter}</div>
            `;
          if (counter <= 0) {
            clearInterval(intervalo);
            const contador = new CustomEvent("change", {
              detail: {
                numero: counter,
              },
            });
            this.dispatchEvent(contador);
          }
          counter--;
        }, 1000);
        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
    customElements.define("custom-counter", Counter);
  }