import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct,updateProduct } from "../actions/index";
import { bindActionCreators } from "redux";
import { Button, Form, TextArea, Header } from 'semantic-ui-react';

class ProductForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      productname:'',
      color:'',
      imgsrc:'',
      price:'',
      category:'',
      update_name:'',
      image_base64: '',
      add: false,
      edit: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
/**
 * Function is to validate the fields
 */
  validateFields = () => {
    let submitFlag = true;
    let nameError = '', image_base64Error = '';

    if (!this.state.name && this.state.name === '') {
        nameError = 'Name Field is Mandatory';
        submitFlag = false;
    } else nameError = '';
    if (this.state.image_base64 === '') {
      image_base64Error =  'Image Field is Mandatory';
      submitFlag = false;
  } else image_base64Error = '';
  this.setState({ nameError, image_base64Error});

  return submitFlag;
  }

  /* AddProduct */
  handleSubmit(event) {
    if (this.validateFields()) {
      var object = {
        name: this.state.name,
        color: this.state.color,
        imgsrc: this.state.imgsrc,
        description: this.state.description,
        price: this.state.price,
        category: this.state.category,
        image_base64: this.state.image_base64
      }
      this.props.addProduct(object);
      this.props.closeModal();
    }
  }

  /* updateProduct */
  handleUpdate(event){
    let products = this.props.products;
    let productToUpdate = {
      name:this.state.name,
      color:this.state.color,
      imgsrc:this.state.imgsrc,
      description:this.state.description,
      price:this.state.price,
      category:this.state.category,
      image_base64: this.state.image_base64
    }
    
    const index = products.findIndex(product => product.name === this.state.update_name)
    products[index] = productToUpdate;
    // productArray.push(object);
    this.props.updateProduct(products)
    this.props.closeModal();
  }

  /* Reset product Form */
  resetForm(event){
    this.setState({
      name:'',
      color:'',
      imgsrc:'',
      description:'',
      price:'',
      category:''
    })
  }

  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      this.setState({image_base64:  reader.result});
    }.bind(this);
  }

  componentDidMount(){
    if(this.props.product){
      this.setState({
        name:this.props.product.name ? this.props.product.name : '',
        color:this.props.product.color ? this.props.product.color : '',
        imgsrc:this.props.product.imgsrc ? this.props.product.imgsrc : '',
        description:this.props.product.description ? this.props.product.description : '',
        price:this.props.product.price ? this.props.product.price : '',
        category:this.props.product.category ? this.props.product.category : '',
        update_name:this.props.product.name ? this.props.product.name : '',
        image_base64: this.props.product.image_base64 ?  this.props.product.image_base64 : ''
      })
      if(this.props.mode===false){
        this.setState({
          add:true,
          edit:false
        })
      }
      else if(this.props.mode===true){
        this.setState({
          add:false,
          edit:true
        })
      }
    }

  }

  render() { 
    return (
      <Form>
      <Form.Group widths="equal">
            <Form.Field>
            <label>Product Name</label>
                  <input type="text" name="name" className="form-control" value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Name"></input>
               {this.state.nameError !== '' && <Header className="custom-header" color="red" as="h5">{this.state.nameError}</Header>}
               </Form.Field>    
 {/* Field price */}
          <Form.Field>
                  <label>Price</label>
                  <input type="number" name="price" className="form-control" value={this.state.price} onChange={(event)=>{this.setState({price:event.target.value})}} placeholder="Price"></input>
                  </Form.Field>              
                  </Form.Group>

  <Form.Group widths="equal">                  
          {/* Field color */}
          <Form.Field>
                   <label>Color</label> 
                   <input type="text" name="color" className="form-control" value={this.state.color} onChange={(event)=>{this.setState({color:event.target.value})}} placeholder="Color"></input>
                   </Form.Field>
         {/* Field category */}
         <Form.Field>
                  <label>Category</label>
                  <Form.Group inline className="radio-group">
                <label><input type="radio" name="category" defaultValue="Electronics" checked={this.state.category === 'Electronics'} onChange={(event)=>this.setState({category:event.target.value})} />Electronics</label>
                <label><input type="radio" name="category" defaultValue="Appliancs" checked={this.state.category === 'Appliancs'} onChange={(event)=>this.setState({category:event.target.value})} />Appliancs</label>
                <label><input type="radio" name="category" defaultValue="Sports" checked={this.state.category === 'Sports'} onChange={(event)=>this.setState({category:event.target.value})} />Sports</label>
               </Form.Group>
                </Form.Field>
                </Form.Group>
    {/* Field Image */}
          <Form.Field>
              <label>Product Image</label>
        <Form.Group inline className="selected-img">      
        <input type="file" onChange={this.fileChangedHandler} />
        <div className="selected-image">
    {this.state.image_base64 !== '' && <img src={this.state.image_base64} alt={this.state.productname} /> }
    {this.state.image_base64Error !== '' && <Header  color='red' as="h5">{this.state.image_base64Error}</Header>}
</div>
</Form.Group>

  </Form.Field>

          {/* Field description */}
          <Form.Field control={TextArea} label='Description'  value={this.state.description} onChange={(event)=>{this.setState({description:event.target.value})}}  />

         {/* Button show/hide operations */}
         <Form.Field>
            <Button.Group>
               { this.state.add ? <Button primary  onClick={this.handleSubmit}>Submit</Button> : null }
               { this.state.edit ? <Button  primary onClick={this.handleUpdate}>Update</Button> : null }
               <Button  secondary onClick={this.resetForm}>Reset</Button>
            </Button.Group>
            </Form.Field>

    </Form>
    );
  }
}
function mapStateToProps(state) {
  return {
    product: state.product,
    products: state.products
  };
}
// Anything returned from this function will end up as props
// on the ProductList container
function mapDispatchToProps(dispatch) {
  // Whenever addProduct or updateProduct is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ addProduct: addProduct, updateProduct: updateProduct }, dispatch);
}

// Promote ProductList from a component to a container - it needs to know
// about this new dispatch method, selectProduct. Make it available
// as a prop.
export default connect(mapStateToProps,mapDispatchToProps)(ProductForm);
