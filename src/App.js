import {Header, PreGame, Game, Footer} from "./layouts/index";
import { RulesSmall, RulesLarge } from "./components";
import {useSelector} from "react-redux"

function App() {
  const { hasGameStarted, isPreGame } = useSelector((store) => store.game);
  //
  return (
    <div className="App app-page">
      <div className="app-layout">
        <Header />
        <RulesSmall />
        <RulesLarge />
        {isPreGame && <PreGame />}
        {hasGameStarted && <Game />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
