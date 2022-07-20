import VeryEasy from "./components/veryEasy";
import BasicInfo from "./components/BasicInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Very Easy</h1>
        <VeryEasy />
        <h1>Medium</h1>
        <BasicInfo />
      </header>
    </div>
  );
}

export default App;
