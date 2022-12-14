
export const checkforSpock = (playerName, houseName) => {
  // - Spock beats Scissors - Spock beats Rock
  // (DRAW)
  if (playerName === "spock" && houseName === "spock") {
    return "draw"
  }
  // (Win)
  if (
    (playerName === "spock" && houseName === "scissors") ||
    houseName === "rock"
  ) {
    return "you win"
  }
  // (Lose)
  if (houseName === "paper" || houseName === "lizard"){
    return "you lose"
  }
};

export const checkforLizard = (playerName,houseName) => {
  // - Lizard beats Spock - Lizard beats Paper
  // (DRAW)
  if (playerName === "lizard" && houseName === "lizard") {
    return "draw";
  }
  // (Win)
  if (
    (playerName === "lizard" && houseName === "spock") ||
    houseName === "paper"
  ) {
    return "you win"
  }
  // (Lose)
  if (houseName === "scissors" || houseName === "rock"){
    return "you lose"
  }
}

export const checkforRock = (playerName, houseName) => {
  // - Rock beats Lizard - Rock beats Scissors
  // (DRAW)
  if (playerName === "rock" && houseName === "rock") {
    return "draw"
  }
  // (Win)
  if (
    (playerName === "rock" && houseName === "lizard") ||
    houseName === "scissors"
  ) {
    return "you win"
  }
  // (Lose)
  if (houseName === "paper" || houseName === "spock") {
    return "you lose"
  }
};

export const checkforPaper = (playerName, houseName) => {
  // - Paper beats Rock - Paper beats Spock
  // (DRAW)
  if (playerName === "paper" && houseName === "paper") {
    return "draw"
  }
  // (Win)
  if (
    (playerName === "paper" && houseName === "rock") ||
    houseName === "spock"
  ) {
    return "you win"
  }
  // (Lose)
  if (houseName === "scissors" || houseName === "lizard") {
    return "you lose"
  }
};

export const checkforScissors = (playerName, houseName) => {
  // - Scissors beats Paper - Scissors beats Lizard
  // (DRAW)
  if (playerName === "scissors" && houseName === "scissors") {
    return "draw"
  }
  // (Win)
  if (
    (playerName === "scissors" && houseName === "lizard") ||
    houseName === "paper"
  ) {
    return "you win"
  }
  // (Lose)
  if (houseName === "spock" || houseName === "rock") {
    return "you lose"
  }
};