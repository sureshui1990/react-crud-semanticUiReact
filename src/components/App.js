import React, { Component } from 'react';
import '../assets/css/App.css';
import ProductList from "../containers/product-list";
import { Container,Header, Segment } from 'semantic-ui-react';


export default class App extends Component {

  render() {

    return (
      <section>
        <header>
        <Segment>
        <Header as="h2" content="Crud - Product Management" />
        </Segment>
        </header>
      <Container>
        <ProductList />
      </Container>
      </section>
    );
  }
}
