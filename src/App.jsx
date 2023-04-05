import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <GameResult />
      <GameBoard />
    </div>
  );
}

export default App;
