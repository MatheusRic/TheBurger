import Product from "../Product";
import { CardUl } from "./style";

const ProductList = ({ filter, handleClick }) => {
  return (
    <CardUl>
      {filter?.map((elem) => (
        <Product product={elem} key={elem.id} handleClick={handleClick} />
      ))}
    </CardUl>
  );
};

export default ProductList;
