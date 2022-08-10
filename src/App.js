import {Header, PreGame, Game, Footer} from "./layouts/index";
import { RulesSmall, RulesLarge } from "./components";

function App() {
  return (
    <div className="App app-page">
      <div className="app-layout">
        <Header />
        <RulesSmall/>
        <RulesLarge/>
        <PreGame />
        {/* <Game/> */}
        <Footer />
      </div>
    </div>
  )
}

export default App;
