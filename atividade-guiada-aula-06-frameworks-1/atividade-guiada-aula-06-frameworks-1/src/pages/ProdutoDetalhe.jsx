import { Link, useParams } from 'react-router-dom'
import { produtos } from './Produtos'

export default function ProdutoDetalhe() {
  const { id } = useParams()
  const produtoEncontrado = produtos.find((produto) => produto.id === parseInt(id, 10))

  if (!produtoEncontrado) {
    return (
      <section className="page-container not-found">
        <span className="error-icon">!</span>
        <h1>Produto não encontrado!</h1>
        <p>O produto informado não existe no catálogo.</p>
        <Link className="back-link" to="/produtos">Voltar para a lista</Link>
      </section>
    )
  }

  return (
    <section className="page-container">
      <span className="eyebrow">Produto #{produtoEncontrado.id}</span>
      <h1>Detalhes do Produto</h1>
      <div className="detail-card">
        <h2>{produtoEncontrado.nome}</h2>
        <p>Preço: <strong>{produtoEncontrado.preco}</strong></p>
      </div>
      <Link className="back-link" to="/produtos">← Voltar para a lista</Link>
    </section>
  )
}
