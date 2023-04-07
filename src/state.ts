type Jugada = "piedra" | "papel" | "tijeras";

const state = {
  data: {
    currentGame: {
      computerPlay: "",
      playerPlay: "",
      result: ""
    },
    playHistory: {
      player: 0,
      computer: 0,
    },
  },

  init() {
    const localData = localStorage.getItem("saved-state") as any;
    if (localData) {
      this.setState(JSON.parse(localData));
    }
  },

  getScore() {
    return this.data.playHistory;
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    localStorage.setItem("saved-state", JSON.stringify(newState));
  },

  setPlay(play) {
    const currentState = this.getState();
    const computerPlay = this.randomComputerPlay();

    currentState.currentGame.playerPlay = play;
    currentState.currentGame.computerPlay = computerPlay;

    const winner = this.whoWins(play, computerPlay);

    this.setState(currentState);
    this.updateScore(winner);
  },

  randomComputerPlay() {
    const moves: Jugada[] = ["piedra", "papel", "tijeras"];
    const randomMove = Math.floor(Math.random() * 3);
    return moves[randomMove];
  },

  whoWins(playerPlay: Jugada, computerPlay: Jugada) {
    if (playerPlay == computerPlay) {
      return "draw";
    }

    const winnerPlays = {
      piedra: "tijeras",
      papel: "piedra",
      tijeras: "papel",
    };

    if (winnerPlays[playerPlay] == computerPlay) {
      return "player";
    }

    return "computer";
  },

  updateScore(winner){
    const currentState = this.getState();

    if (winner === "player") {
      currentState.playHistory.player++;
    }

    if (winner === "computer"){
      currentState.playHistory.computer++;
    }

    currentState.currentGame.result = winner;
    this.setState(currentState);
  },

};

export { state, Jugada };
