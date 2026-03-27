import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductShow from './pages/ProductShow';
import ProductCreate from './pages/ProductCreate';
import ProductEdit from './pages/ProductEdit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/show/:id" element={<ProductShow />} />
          <Route path="/products/new" element={<ProductCreate />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} />
          {/* Default redirect to products */}
          <Route path="*" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;