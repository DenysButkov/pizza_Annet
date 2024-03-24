import React from 'react';
import pizzas from '../assets/img/pizzas.json';
import { useParams } from 'react-router-dom';

const FullPizza = () => {
  const { id } = useParams();
  const pizza = pizzas.find(pizza => pizza.id === parseInt(id));

  if (!pizza) {
    return <div>Pizza not found</div>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <p>{pizza.description}</p>
      <h4>{pizza.price} €</h4>
    </div>
  );
}

export default FullPizza;