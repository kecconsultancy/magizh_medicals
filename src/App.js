import { Route, Routes } from 'react-router-dom';
import LoginPage from "./Components/LoginPage";
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from './Screen/ProductScreen';

function App() {
  return <>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/products" element={<ProductScreen />} />
    </Routes>
  </>
}

export default App;
