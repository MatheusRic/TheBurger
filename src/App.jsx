import { useEffect, useState } from "react";
import "./App.css";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import TagHeader from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [cartTotal, setCartTotal] = useState(0);
  const filter = products.filter((product) =>
    product.name.toLowerCase().includes(filteredProducts.toLocaleLowerCase())
  );

  const handleClick = (productId) => {
    const food = products.filter((elem) => elem.id === productId);

    if (currentSale.some((elem) => elem.name === food[0].name) === false) {
      return setCurrentSale([
        ...currentSale,
        {
          id: food[0].id,
          name: food[0].name,
          category: food[0].category,
          price: food[0].price,
          img: food[0].img,
          quantity: 1,
        },
      ]);
    } else {
      currentSale.forEach((elem) => {
        if (elem.id === productId) {
          elem.quantity += 1;
          setCartTotal(cartTotal + elem.price);
        }
      });
    }
  };

  console.log(products);
  useEffect(() => {
    setCartTotal(
      currentSale.reduce(function (soma, atual) {
        return (soma += atual.price * atual.quantity);
      }, 0)
    );
  }, [currentSale]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <TagHeader
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      ></TagHeader>
      <div className="container">
        <ProductList filter={filter} handleClick={handleClick} />
        <Cart
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </div>
    </div>
  );
}

export default App;
