import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Image, Header } from 'semantic-ui-react';

class ProductDetail extends Component {
  /* View Indvidual Product Detail */
  render() {
    if (!this.props.product) {
      return <div>Select a product to view profile.</div>;
    }

    return (
      <div>

          <Header as="h4">Product details</Header>
        {/* Field name */}
        <Grid columns='equal'>
        <Grid.Column>
              <label>Name :</label> 
              </Grid.Column>
              <Grid.Column width={12}>
              <b>{this.props.product.name}</b>
              </Grid.Column>
              </Grid>

        {/* Field color */}
        <Grid columns='equal'>
        <Grid.Column>
              <label>Color</label> :
              </Grid.Column>
              <Grid.Column width={12}>
              <b>{this.props.product.color}</b>
              </Grid.Column>
              </Grid>   
              
        {/* Field price */}
        <Grid columns='equal'>
        <Grid.Column>
              <label>Price</label> :
              </Grid.Column>
              <Grid.Column width={12}>
              <b>{this.props.product.price}</b>
              </Grid.Column>
              </Grid>

        {/* Field category */}
        <Grid columns='equal'>
        <Grid.Column>
              <label>Category</label> :
              </Grid.Column>
              <Grid.Column width={12}>
              <b>{this.props.product.category}</b>
              </Grid.Column>
              </Grid>              

        {/* Field Image field */}
        <Grid columns='equal'>
        <Grid.Column>
              <label>Product image</label> :
              </Grid.Column>
              <Grid.Column width={12}>
              <div className="selected-image selected-image__custom">
              <Image src={this.props.product.image_base64} size="small"  />
              </div>
              </Grid.Column>
              </Grid>
        {/* Field description */}
        <Grid columns='equal'>
        <Grid.Column>
              <label>Description</label> :
              </Grid.Column>
              <Grid.Column width={12}>
              <p>{this.props.product.description}</p>
              </Grid.Column>
              </Grid>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

export default connect(mapStateToProps)(ProductDetail);
