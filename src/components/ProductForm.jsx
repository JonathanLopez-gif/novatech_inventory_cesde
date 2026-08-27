import React, { useState } from 'react';

export function ProductForm({ onAddProduct }) {
  const [form, setForm] = useState({ name: '', price: '', category: '', stock: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    onAddProduct({ ...form, id: Date.now(), price: parseFloat(form.price), stock: parseInt(form.stock) });
    setForm({ name: '', price: '', category: '', stock: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '8px' }}>
      <input placeholder="Nombre" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
      <input placeholder="Precio" type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required />
      <input placeholder="Categoría" value={form.category} onChange={e => setForm({...form, category: e.target.value})} />
      <input placeholder="Stock" type="number" value={form.stock} onChange={e => setForm({...form, stock: e.target.value})} />
      <button type="submit">Agregar Producto</button>
    </form>
  );
}