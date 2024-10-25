import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartStore.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div style={styles.container}><h2>Tu carrito está vacío.</h2></div>;
  }

  return (
    <div style={styles.container}>
      <h2>Carrito de Compras</h2>
      <ul style={styles.list}>
        {cartItems.map((item) => (
          <li key={item.id} style={styles.item}>
            <div>
              <strong>{item.name}</strong>
              <p>Precio: ${item.price.toFixed(2)}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))} style={styles.button}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
  button: {
    padding: '5px 10px',
    cursor: 'pointer',
    backgroundColor: '#dc3545',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    height: '30px',
  },
};

export default Cart;