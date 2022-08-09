import {Header, PreGame, Game, Footer} from "./layouts/index";

function App() {
  return (
    <div className="App app-page">
      <div className="app-layout">
        <Header />
        {/* <PreGame /> */}
        <Game/>
        <Footer />
      </div>
    </div>
  )
}

export default App;
