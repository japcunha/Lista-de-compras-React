import { useRef, useState } from "react";
import AddButton from "./Components/AddButton";
import TrashButton from "./Components/TrashButton";
import Product from "./Components/Product";

export default function Home() {
  const inputRef = useRef();
  const [produtos, setprodutos] = useState([]);

  const cliqueiNoBotao = () => {
    const nome = inputRef.current.value.trim();
    if (nome) {
      const novoProduto = {
        id: Date.now(),
        nome,
      };
      setprodutos([...produtos, novoProduto]);
      inputRef.current.value = "";
    }
  };

  const pressEnter = (e) => {
    if (e.key == "Enter") {
      cliqueiNoBotao();
    }
  };
  const deletarProduto = (id) => {
    setprodutos(produtos.filter((p) => p.id !== id));
  };

  return (
    <>
      <div className="Container">
        <h1>Lista de compras</h1>

        <input
          placeholder="produto..."
          ref={inputRef}
          onKeyDown={pressEnter}
        ></input>
        <AddButton className="AddButton" onClick={cliqueiNoBotao}>
          Adicionar
        </AddButton>
         <p>lista:</p>
      <div className="lista">
        {produtos.map((produto) => (
          <Product className="Product" key={produto.id}>
            <p>{produto.nome}</p>
            <TrashButton
              className="TrashButton"
              onClick={() => deletarProduto(produto.id)}
            >
              🗑️
            </TrashButton>
          </Product>
        ))}
        </div>
      </div>
    </>
  );
}
