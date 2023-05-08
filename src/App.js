import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { calculateTotals } from "./redux/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems]);

  return (
    <>
      <main>
        <NavBar />
        <CartContainer />
      </main>
    </>
  )
}
export default App;