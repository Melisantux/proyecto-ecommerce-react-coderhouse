import "./App.css";
import { NavBar } from "./components/NavBar/NavBar.component";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.component";

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <main>
        <ItemListContainer
          greeting="Get ready to catch 'em all, relive cherished memories, and create new
        ones with our enchanting range of Pokemon merchandise."
        />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
