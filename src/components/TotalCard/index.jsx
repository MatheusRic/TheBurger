import { DivTotal } from "./style";

const TotalCard = ({ cartTotal, setCurrentSale }) => {
  return (
    <DivTotal>
      <div className="info">
        <p>Total</p>
        <span>R${cartTotal.toFixed(2)}</span>
      </div>
      <button onClick={() => setCurrentSale([])}>Remover Todos</button>
    </DivTotal>
  );
};

export default TotalCard;
