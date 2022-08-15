import {Header, PreGame, Game, Footer} from "./layouts/index";
import { RulesSmall, RulesLarge } from "./components";
import {useSelector} from "react-redux"

function App() {
  const { hasGameStarted, isPreGame } = useSelector((store) => store.game);
  //
  return (
    <div className="App app-page">
      <main className="app-layout">
        <Header />
        <RulesSmall />
        <RulesLarge />
        {isPreGame && <PreGame />}
        {hasGameStarted && <Game />}
        <Footer />
        <section className="attribution">
          <h6>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.djhwebdevelopment.com"
            target="_blank"
            rel="noreferrer"
          >
            David Henery
          </a>
          .
            </h6>
        </section>
      </main>
    </div>
  );
}

export default App;
