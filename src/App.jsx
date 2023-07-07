import { MainRouter } from './router/MainRouter';
import './App.css';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className='main-container'>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  );
}

export default App;
