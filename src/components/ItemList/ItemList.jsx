import React from 'react';
import Item from '../Item/Item.js';
import './ItemList.css';
import { Container, Row, Col } from 'react-bootstrap';

function ItemList({ items }) {
  return (
    <Container>
      <Row className="ItemList">
        {items.map((item) => (
          <Col key={item.id} sm={6} md={4} lg={3} xl={2}>
            <Item
              item={item}
              nombre={item.name}
              category={item.category}
              precio={item.price}
              img={item.img}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
