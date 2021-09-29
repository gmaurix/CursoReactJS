import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./context/cartContext";

const Titulo = (props) => {
  return <h2>{props.title}</h2>;
};

function App() {
  return (

  <Router>
      <div className="App">
        <header className="App-header">
          <Titulo />
          <NavBar />
        </header>
        <Switch>
          <section>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route
              path="/categoria/:idcategoria"
              component={ItemListContainer}
            />
            <Route exact path="/itemList">
              <ItemListContainer />
            </Route>
            <Route exact path="/itemDetail/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart" component={Cart} />
          </section>
        </Switch>
      </div>
    </Router>
  );
}
/* render(<App/>,document.getElementById('root')); */
export default App;
