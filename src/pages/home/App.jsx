import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'

function App() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliqueiNoBotao() {
    if (inputRef.current.value.trim() === '')
      return;
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos])
    // limpar input:
    inputRef.current.value = ''
  }
  function pressEnter(event) {
    if (event.key === 'Enter') {
      cliqueiNoBotao()
    }
  }
  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }
  return (
    <Container>
      <h1>Lista de compras</h1>
      <input placeholder="produto..." ref={inputRef} onKeyDown={pressEnter}></input>
      <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>
      <p>lista:</p>
      {produtos.map((produto) => (
        <Product key={produto.id}>
          <p >{produto.nome}</p>
          <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
        </Product>
      ))}
    </Container>
  )
}

export default App