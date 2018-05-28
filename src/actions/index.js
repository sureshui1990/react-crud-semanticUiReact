export function selectProduct(product) {
    // selectProduct is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "PRODUCT_SELECTED",
      payload: product
    };
  }
  
  export function addProduct(product) {
    // AddProduct is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "PRODUCT_ADD",
      payload: product
    };
  }
  
  export function deleteProduct(product) {
    // DeleteProduct is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "PRODUCT_DELETE",
      payload: product
    };
  }
  
  export function updateProduct(product) {
    // updateProduct is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "PRODUCT_UPDATE",
      payload: product
    };
  }
  