import { Lizard, Spock, Paper, Rock, Scissors } from "../SVGs/svgs"

// might have to make specific background colour for each option an inline style.

const playerOptions = [
  {
    id: 1,
    name: "spock",
    icon: Spock,
    colors: {
      colorDark: "hsl(189, 58%, 57%)",
      colorLight: "hsl(189, 59%, 53%)",
    },
    preGameGridPos: "pregame__spock",
  },
  {
    id: 2,
    name: "lizard",
    icon: Lizard,
    colors: {
      colorDark: "hsl(261, 72%, 63%)",
      colorLight: "hsl(261, 73%, 60%)",
    },
    preGameGridPos: "pregame__lizard",
  },
  {
    id: 3,
    name: "rock",
    icon: Rock,
    colors: {
      colorDark: "hsl(349, 70%, 56%)",
      colorLight: "hsl(349, 71%, 52%)",
    },
    preGameGridPos: "pregame__rock",
  },
  {
    id: 4,
    name: "paper",
    icon: Paper,
    colors: {
      colorDark: "hsl(230, 89%, 65%)",
      colorLight: "hsl(230, 89%, 62%)",
    },
    preGameGridPos: "pregame__paper",
  },
  {
    id: 5,
    name: "scissors",
    icon: Scissors,
    colors: {
      colorDark: "hsl(40, 84%, 53%)",
      colorLight: "hsl(39, 89%, 49%)",
    },
    preGameGridPos: "pregame__scissors",
  },
];

export default playerOptions