import { Lizard, Spock, Paper, Rock, Scissors } from "../SVGs/svgs"

// might have to make specific background colour for each option an inline style.

const playerOptions = [
  {
    id: 1,
    name: "spock",
    icon: Spock,
    colorDark: "hsl(189, 58%, 57%)",
    colorLight: "hsl(189, 59%, 53%)",
  },
  {
    id: 2,
    name: "lizard",
    icon: Lizard,
    colorDark: "hsl(261, 72%, 63%)",
    colorLight: "hsl(261, 73%, 60%)",
  },
  {
    id: 3,
    name: "rock",
    icon: Rock,
    colorDark: "hsl(349, 70%, 56%)",
    colorLight: "hsl(349, 71%, 52%)",
  },
  {
    id: 4,
    name: "paper",
    icon: Paper,
    colorDark: "hsl(230, 89%, 65%)",
    colorLight: "hsl(230, 89%, 62%)",
  },
  {
    id: 5,
    name: "scissors",
    icon: Scissors,
    colorDark: "hsl(40, 84%, 53%)",
    colorLight: "hsl(39, 89%, 49%)",
  },
];

export default playerOptions