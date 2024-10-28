import { useSelector } from 'react-redux';

const ProductList = () => {
  const {products,category,search} = useSelector((state) => state.productStore);

  const items = products

  const filteredItems = items.filter((item) => {
    const matchesCategory = category === 'Todas' || item.category === category;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <div style={styles.grid}>
      {filteredItems.map((product) => (
        <div key={product.id} style={styles.card}>
          <h3>{product.name}</h3>
          <p>Categoría: {product.category}</p>
          <p>Precio: ${product.price.toFixed(2)}</p>
          <button onClick={()=>handleAddToCart} style={styles.button}>
            Añadir al Carrito
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  },
  button: {
    marginTop: '10px',
    padding: '5px 10px',
    cursor: 'pointer',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
  },
};

export default ProductList;
