import React from 'react';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Palha Italiana', price: 5.00, quantity: 1 },
    { id: 2, name: 'Brigadeiro', price: 15.00, quantity: 2 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Carrinho</h1>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Quantidade: {item.quantity}</p>
              <p>Preço: R${item.price}</p>
            </div>
          ))}
          <h2>Total: R${total.toFixed(2)}</h2>
          <button>Finalizar Pedido</button>
        </>
      ) : (
        <p>Seu carrinho está vazio.</p>
      )}
    </div>
  );
};

export default Cart;
