import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const getCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "fetching",
        title: "Fetching Cart",
        message: "Your cart is fetching...",
      })
    );

    const fetchCart = async () => {
      const response = await fetch(
        "https://react-course-d7d7f-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) throw new Error("Fetching error");
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchCart();
      dispatch(cartActions.replaceCart(cartData));
      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success!",
          message: "Cart listed...",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "error!",
          message: "Fetching Error...",
        })
      );
    }
  };
};

export const sentCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "Sending...",
        message: "Sending Cart data!...",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-course-d7d7f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sent to Failed");
      }
    };

    try {
      await sendRequest(cart);
      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success!",
          message: "Sent Cart data successfully...",
        })
      );
    } catch (error) {
      dispatch(
        uiActions({ status: "Error", title: "Error!", message: "Sent Error!" })
      );
    }
  };
};
