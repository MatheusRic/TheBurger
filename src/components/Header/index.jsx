import { TagHeader } from "./style";
import logo from "./logo.png";

const Header = ({ filteredProducts, setFilteredProducts }) => {
  return (
    <TagHeader>
      <img src={logo} alt="" />
      <form>
        <div>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            value={filteredProducts}
            onChange={(event) => setFilteredProducts(event.target.value)}
          />
        </div>
        <button>Pesquisar</button>
      </form>
    </TagHeader>
  );
};

export default Header;
