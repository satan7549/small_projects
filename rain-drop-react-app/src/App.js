import "./App.css";
import RainEffect from "./components/RainEffect";
import WaveEffect from "./components/WaveEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rain Pattern Game</h1>
      </header>
      <main>
        {/* <RainEffect rows={15} cols={20} /> */}
        <WaveEffect rows={5} cols={5} />

      </main>
    </div>
  );
}

export default App;
