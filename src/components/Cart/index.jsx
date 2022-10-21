import { CartUl, CartDiv, CartHeader } from "./style";
import TotalCard from "../TotalCard";
import CartLi from "../CartLi";

const Cart = ({ currentSale, setCurrentSale, cartTotal, setCartTotal }) => {
  return (
    <CartDiv>
      <CartHeader>
        <h3>Carrinho de Compras</h3>
      </CartHeader>
      <CartUl>
        {currentSale.length == 0 ? (
          <span>Sua sacola esta vazia </span>
        ) : (
          <CartLi
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        )}
      </CartUl>
      {currentSale.length > 0 ? (
        <TotalCard cartTotal={cartTotal} setCurrentSale={setCurrentSale} />
      ) : (
        <></>
      )}
    </CartDiv>
  );
};

export default Cart;
