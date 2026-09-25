export default function Sobre() {
  return (
    <section className="page-container">
      <span className="eyebrow">Informações</span>
      <h1>Sobre Nós</h1>
      <p>
        Esta aplicação foi desenvolvida como atividade prática para demonstrar
        navegação entre páginas usando React Router.
      </p>
      <p className="muted">
        A aplicação funciona como uma SPA: a URL muda e o React renderiza o
        componente correspondente sem recarregar toda a página.
      </p>
    </section>
  )
}
