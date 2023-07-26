import React from 'react';
import Item from '../Item/Item.js';
import './ItemList.css';
import { Container, Row, Col } from 'react-bootstrap';

function ItemList({ items }) {
  // Agrupar los items en grupos de 3
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <Container>
      {/* Map a través de los grupos */}
      {groupedItems.map((group, index) => (
        <Row key={index} className="ItemList">
          {group.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={4} xl={4} className="product-col"> {/* Aplica la clase CSS aquí */}
              <Item
                item={item}
                nombre={item.name}
                precio={item.price}
                img={item.img}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default ItemList;
