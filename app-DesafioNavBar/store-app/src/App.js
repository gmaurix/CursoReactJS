import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const Titulo = (props) => {
  return <h2>{props.title}</h2>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar /> 
      </header>
      <section>
        <ItemListContainer>
          <Titulo title="Catalogo" />
        </ItemListContainer>
      </section>
    </div>
  );
}
/* render(<App/>,document.getElementById('root')); */
export default App;
