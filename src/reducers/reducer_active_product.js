export default function(state = {}, action) {
  switch (action.type) {
    case "PRODUCT_SELECTED": {
      return action.payload;
    }
    default:
      return state;
  }
}
