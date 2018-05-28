import React, { Component } from "react";
import { connect } from "react-redux";
import { selectProduct,deleteProduct } from "../actions/index";
import { bindActionCreators } from "redux";
import _ from "lodash";
import ProductDetail from "./product-detail";
import ProductForm from "./product-form";
import { Button, Modal, Grid, Popup, Icon, Label, Image, Card} from 'semantic-ui-react';


class ProductTable extends Component {
  constructor(props){
    super(props)
    this.state={
      showModal: false,
      edit: false,
      view: false,
      mode: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.viewProduct = this.viewProduct.bind(this);
    
  }

  /* Close modal */
  close() {
    this.setState({ showModal: false });
  }

  /* Open modal */
  open() {
    this.setState({ showModal: true });
  }

  /* Setting Add product mode */
  addProduct(){
    var object={
      name:'',
      age:'',
      price:''
    }
    this.props.selectProduct(object);
    this.setState({edit: true,view: false,mode: false});
    this.open();
  }

  /* Setting edit product mode */
  editProduct(product){
    this.props.selectProduct(product);
    this.setState({edit: true,view: false,mode: true});
    this.open();
  }

  /* setting view product mode */
  viewProduct(product){
    this.props.selectProduct(product);
    this.setState({view: true,edit: false,mode: false});
    this.open();
  }

  /* Rendering Product view in card */
  renderList() {  
    return this.props.products.map(product => {
      return (

      <Grid.Column key={product.name} className="product-item"> 

      <Card>
        <div className="product-image">
      <Image src={product.image_base64} title={product.name} alt={product.category} size='medium' wrapped/>
      </div>
      <Card.Content>
      <Card.Header>
      <Popup 
    trigger={<span>{product.name}</span>}
    content={product.name}/></Card.Header>
      <Card.Meta>
        <span className='date'>
        {product.color}
        </span>
      </Card.Meta>
      <div className="category-price">
      <p className="category-price_category">{product.category}</p>
      <Button as='div' labelPosition='right'>
        <Button icon size="tiny" color="green">
        Price
        <Icon name='rupee' />
      </Button>
      <Label as='a' basic pointing='left' >{product.price}</Label>
    </Button>
    </div>
      <Card.Description>
    {product.description}
      </Card.Description>
     
      </Card.Content>

    <Card.Content extra>
    <Button.Group size="small" fluid >
    <Button animated primary basic onClick={()=>this.editProduct(product)}>
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name='edit' />
      </Button.Content>
    </Button>

        <Button animated color="purple" basic onClick={() => this.viewProduct(product)}>
      <Button.Content visible>View</Button.Content>
      <Button.Content hidden>
        <Icon name='eye' />
      </Button.Content>
    </Button>


  <Button animated color="red" basic onClick={()=>this.deleteProduct(product.name)}>
      <Button.Content visible>Delete</Button.Content>
      <Button.Content hidden>
        <Icon name='remove'  />
      </Button.Content>
    </Button>
    </Button.Group>
      </Card.Content>

            </Card>
            </Grid.Column>

      );
    });
  }

  /* Remove product from List */
  deleteProduct(name){
    let productArray=_.filter(this.props.products, function(obj) {
      return obj.name !== name;
    });
    this.props.deleteProduct(productArray)
  }

  render() { 

    return (
      <div>
  <Grid columns={1} padded>
  <Grid.Row>
    <Grid.Column textAlign="right">
      <Button animated="fade" color="blue" size="medium" className="custom-btn" onClick={() => this.addProduct()} >
      <Button.Content visible>
        Add the new product
      </Button.Content>
      <Button.Content hidden>
      <Icon name='plus' />
      </Button.Content>
    </Button>
    </Grid.Column>
    </Grid.Row>
    </Grid>
      
        <Grid columns={4} padded>
        <Grid.Row>
          {this.renderList()}
          </Grid.Row>
          </Grid>
      
      {/* Modal starts here */}
      <Modal  className="custom-modal" style={{height: 545,marginRight:'auto',marginLeft:'auto',marginTop:30}} open={this.state.showModal} icon="remove" onClose={this.close} closeIcon
      >
          {/* Modal Header */}
          <Modal.Header>
            {this.props.product.hasOwnProperty('name') && this.props.product.name}
          </Modal.Header>
          {/* Modal Body */}
          <Modal.Content>
            {/* show/hide components */}
            { this.state.edit ? <ProductForm mode={this.state.mode} closeModal={this.close}/> : null }
            { this.state.view ? <ProductDetail /> : null }
          </Modal.Content>
        </Modal>
        {/* Modal ends here */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of ProductList
  return {
    products: state.products,
    product: state.product
  };
}

// Anything returned from this function will end up as props
// on the ProductList container
function mapDispatchToProps(dispatch) {
  // Whenever selectProduct or deleteProduct is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectProduct, deleteProduct }, dispatch);
}

// Promote ProductList from a component to a container - it needs to know
// about this new dispatch method, selectProduct. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
