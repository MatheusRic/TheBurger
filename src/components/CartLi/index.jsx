import { Quantity, TagLi } from "./style.js";

const CartLi = ({ currentSale, setCurrentSale, setCartTotal, cartTotal }) => {
  const removeItem = (indexAtual) => {
    setCurrentSale(currentSale.filter((elem, index) => index !== indexAtual));
  };
  const removeQuantity = (currentId) => {
    currentSale.forEach((elem, index) => {
      if (elem.id === currentId) {
        elem.quantity -= 1;
        setCurrentSale([...currentSale]);
      }
      if (elem.quantity === 0) {
        const updateCurrentSale = currentSale.filter(
          (elem) => elem.id !== currentId
        );
        setCurrentSale(updateCurrentSale);
      }
    });
  };
  const addQuantity = (currentId) => {
    currentSale.forEach((elem) => {
      if (elem.id === currentId) {
        elem.quantity += 1;
        setCurrentSale([...currentSale]);
      }
    });
  };

  return currentSale.map((elem, index) => (
    <TagLi key={index}>
      <img src={elem.img} alt="" />
      <div className="nameDesc">
        <h2>{elem.name}</h2>
        <Quantity>
          <button onClick={() => removeQuantity(elem.id)}>-</button>
          <p>{elem.quantity}</p>
          <button onClick={() => addQuantity(elem.id)}>+</button>
        </Quantity>
        <h4>{elem.category}</h4>
      </div>
      <button onClick={() => removeItem(index)} className="remove">
        Remover
      </button>
    </TagLi>
  ));
};

export default CartLi;
