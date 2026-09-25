import { Link } from 'react-router-dom'

export const produtos = [
  { id: 1, nome: 'Notebook Gamer', preco: 'R$ 5.000' },
  { id: 2, nome: 'Mouse sem fio', preco: 'R$ 150' },
  { id: 3, nome: 'Teclado Mecânico', preco: 'R$ 350' },
]

export default function Produtos() {
  return (
    <section className="page-container">
      <span className="eyebrow">Catálogo</span>
      <h1>Nossos Produtos</h1>
      <p className="muted">Clique em um produto para visualizar seus detalhes.</p>

      <ul className="product-list">
        {produtos.map((prod) => (
          <li key={prod.id}>
            <Link to={`/produtos/${prod.id}`}>
              <span>
                <strong>{prod.nome}</strong>
                <small>Produto #{prod.id}</small>
              </span>
              <span className="price">{prod.preco}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
