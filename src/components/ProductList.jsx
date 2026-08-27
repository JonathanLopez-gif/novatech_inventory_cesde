import React from 'react';
import { calculateTotalPrice } from '../utils/priceCalculator';

export function ProductList({ products, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio Base</th>
          <th>Precio Final (Con IVA)</th>
          <th>Categoría</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>${p.price}</td>
            <td>${calculateTotalPrice(p.price).toFixed(2)}</td>
            <td>{p.category}</td>
            <td>{p.stock}</td>
            <td>
              {onEdit && <button onClick={() => onEdit(p)}>Editar</button>}
              {onDelete && <button onClick={() => onDelete(p.id)}>Eliminar</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}