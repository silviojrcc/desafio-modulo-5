import { initCustomButton } from "./components/custom-button";
import { initChoice } from "./components/play-choice";
import { initRouter } from './router';
import { initCounter } from "./components/counter/my-counter";
import { initGameScore } from './components/score/index';
import { state } from "./state";

(function (){
    const container = document.querySelector(".root") as any;
    state.init();
    initCustomButton();
    initChoice();
    initCounter();
    initGameScore();
    initRouter(container);
})();