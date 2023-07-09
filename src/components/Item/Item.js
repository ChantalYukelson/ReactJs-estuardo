import React from 'react';
import { Button, Card, Badge, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importar el componente Link
import useCartContext from '../../store/CartContext';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Item({ item }) {
  const { getItemQuantity, isInCart } = useCartContext();

  const { name, price, img, description, stock } = item;

  return (
    <Card className="Item bg-pink h-100 shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
      <Card.Title>{name}</Card.Title>
      <span className="position-absolute top-4 end-4 translate-middle badge rounded-pill bg-info">
        {isInCart(item) ? (
          <div className="cart-icon2">
            <FontAwesomeIcon icon={faCartShopping} size="1x" color="black" />
            <div className="mostrar-cantidadItem">{getItemQuantity(item)}</div>
          </div>
        ) : (
          <div className="cart-icon2">
            <FontAwesomeIcon icon={faCartShopping} size="1x" color="black" />
            <div className="mostrar-cantidadItem">0</div>
          </div>
        )}
      </span>
      <Link to={`/item/${item.id}`}> {/* Envolver el botón "Ver detalles" con el componente Link */}
        <Card.Img className="picHover" variant="top" src={img} alt={name} />
      </Link>
      <Card.Body></Card.Body>
      <Container className="d-flex justify-content-center text-center align-middle w-100 mw-30">
        <Badge bg="success me-2 mb-4 text-center price-button">{price} $</Badge>
      </Container>
      <Link to={`/item/${item.id}`}> {/* Envolver el botón "Ver detalles" con el componente Link */}
        <Button className="btn btn-dark btn-hover-white">Ver detalles</Button>
      </Link>
    </Card>
  );
}

export default Item;
