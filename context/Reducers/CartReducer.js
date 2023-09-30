const cartReducer = (state, action) => {
  var newCart = { ...state };
  const itemCode = action.itemCode;

  switch (action.type) {
    case "ADD TO CART":
      if (itemCode in state) {
        newCart[itemCode].quantity = parseInt(state[itemCode].quantity) + 1;
      } else {
        newCart[itemCode] = { action };
      }
      console.log("newcart is ", JSON.stringify(newCart));
      return newCart;

    case "REMOVE FROM CART":
      if (itemCode in state) {
        newCart[itemCode].quantity = parseInt(state[itemCode].quantity) - 1;
      } else {
        console.error("not present in cart");
      }
      if (newCart[itemCode].quantity <= 0) delete newCart[itemCode];
      console.log("newcart is ", JSON.stringify(newCart));
      return newCart;

    case "CLEAR CART":
      return {};

    default:
      return state;
  }
};
export default cartReducer;
