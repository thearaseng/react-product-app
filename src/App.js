import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateProductForm from './components/CreateProductForm'
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import { ProductListProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductListProvider>
      <div className="container" style={{maxWidth: '700px'}}>
        <NavBar />
        <hr />
        {/*<CreateProductForm />*/}
        <ProductList />
      </div>
    </ProductListProvider>
  );
}

export default App;
