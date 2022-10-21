import { CardLi } from "./style";

const Product = ({ product, handleClick }) => {
  return (
    <CardLi>
      <img src={product.img} alt="" />
      <div className="info">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <div>
          <span>R${product.price.toFixed(2)}</span>
          <button onClick={() => handleClick(product.id)}>Adicionar</button>
        </div>
      </div>
    </CardLi>
  );
};

export default Product;
