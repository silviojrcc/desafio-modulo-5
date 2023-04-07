import { initWelcomePage } from './pages/welcome-page';
import { initGamePage } from './pages/game-page';
import { initInstructionsPage } from './pages/instructions-page';
import { initResult } from './pages/results-page';

const routes = [
  { path: /\/desafio-modulo-5\/welcome/, component: initWelcomePage },
  { path: /\/desafio-modulo-5\/instructions/, component: initInstructionsPage },
  { path: /\/desafio-modulo-5\/game/, component: initGamePage },
  { path: /\/desafio-modulo-5\/result/, component: initResult },
];

export function initRouter(container: Element) {
  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  
  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.host.includes("github.io") || "/") {
    goTo("/desafio-modulo-5/welcome");
  } else {
    handleRoute(location.pathname);
  }
  
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
