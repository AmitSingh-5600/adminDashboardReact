import "./App.css";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <div className="app-glass">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
