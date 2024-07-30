import "./App.css";
import Matrix from "./components/Matrix";
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
        {/* <WaveEffect rows={5} cols={5} /> */}
        <Matrix rows={20} cols={20} />
      </main>
    </div>
  );
}

export default App;
