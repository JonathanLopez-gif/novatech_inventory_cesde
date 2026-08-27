import React, { useState } from 'react';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';

export function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAdd = (product) => setProducts([...products, product]);
  const handleEdit = (product) => setEditingProduct(product);
  const handleUpdate = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setEditingProduct(null);
  };
  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>NovaTech Solutions - Inventario</h1>
      <ProductForm onAddProduct={handleAdd} />
      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
export default App;