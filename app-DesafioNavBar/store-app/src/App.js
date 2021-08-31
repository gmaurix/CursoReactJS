import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Desafío crear Navbar: Diego Gautero</p>
      </header>
    </div>
  );
}

export default App;
