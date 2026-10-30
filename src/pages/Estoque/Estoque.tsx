import { useState } from 'react'
import { PRODUTOS_RESUMO } from '../../data/mock'
import StatusBadge from '../../components/StatusBadge/StatusBadge'
import './Estoque.css'

// Cabeçalhos da tabela de produtos
const COLUNAS_PRODUTO = [
  { chave: 'nome',       titulo: 'Produto' },
  { chave: 'categoria',  titulo: 'Categoria' },
  { chave: 'fornecedor', titulo: 'Fornecedor' },
  { chave: 'quantidade', titulo: 'Quantidade', alinharDireita: true },
  { chave: 'status',     titulo: 'Status' },
]

function Estoque() {
  // Estados dos filtros
  const [filtroNome, setFiltroNome] = useState('')
  const [filtroPreco, setFiltroPreco] = useState('') // <select>
  const [filtroCategoria, setFiltroCategoria] = useState('') // <select>
  const [filtroQuantidade, setFiltroQuantidade] = useState('') // <select>

  // Valores únicos para os selects (baseado nos dados do mock)
  const categoriasUnicas = [...new Set(PRODUTOS_RESUMO.map(p => p.categoria))]
  const quantidadesUnicas = [...new Set(PRODUTOS_RESUMO.map(p => p.quantidade))].sort((a, b) => b - a)
  const precosUnicos = [...new Set(PRODUTOS_RESUMO.map(p => p.preco))].sort((a, b) => a - b)

  // Produtos filtrados
  const produtosFiltrados = PRODUTOS_RESUMO.filter((p) => {
    const nomeMatch = p.nome.toLowerCase().includes(filtroNome.toLowerCase())
    const precoMatch = String(p.preco) === String(filtroPreco) || filtroPreco === ''
    const categoriaMatch = p.categoria.toLowerCase() === filtroCategoria.toLowerCase() || filtroCategoria === ''
    const qtdMatch = String(p.quantidade) === String(filtroQuantidade) || filtroQuantidade === ''
    return nomeMatch && precoMatch && categoriaMatch && qtdMatch
  })

  // Ordena do maior para o menor quantidade
  const produtosOrdenados = [...produtosFiltrados].sort(
    (a, b) => b.quantidade - a.quantidade
  )

  return (
    <div className="estoque">
      <div className="pagina-cabecalho">
        <div>
          <h1>Estoque</h1>
          <p>Gerencie seus produtos em estoque</p>
        </div>
      </div>

      {/* --- Filtros acima da tabela --- */}
      <section className="estoque-filtros">
        <div className="filtro-grupo">
          <label>Filtrar por nome:</label>
          <input
            type="text"
            value={filtroNome}
            onChange={(e) => setFiltroNome(e.target.value)}
            placeholder="Nome do produto..."
          />
        </div>
        <div className="filtro-grupo">
          <label>Filtrar por preço:</label>
          <select
            value={filtroPreco}
            onChange={(e) => setFiltroPreco(e.target.value)}
          >
            <option value="">Todos os preços</option>
            {precosUnicos.map((p) => (
              <option key={p} value={p}>
                R$ {p.toFixed(2)}
              </option>
            ))}
          </select>
        </div>
        <div className="filtro-grupo">
          <label>Filtrar por categoria:</label>
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
          >
            <option value="">Todas as categorias</option>
            {categoriasUnicas.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="filtro-grupo">
          <label>Filtrar por quantidade:</label>
          <select
            value={filtroQuantidade}
            onChange={(e) => setFiltroQuantidade(e.target.value)}
          >
            <option value="">Todas as quantidades</option>
            {quantidadesUnicas.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
        </div>
      </section>

      {/* --- Tabela de produtos --- */}
      <section className="estoque-caixa">
        <table className="estoque-tabela">
          <thead>
            <tr>
              {COLUNAS_PRODUTO.map((col) => (
                <th key={col.chave}>{col.titulo}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {produtosOrdenados.map((p) => (
              <tr key={p.id}>
                <td>{p.nome}</td>
                <td>{p.categoria}</td>
                <td>{p.fornecedor}</td>
                <td className="numero">{p.quantidade}</td>
                <td>
                  <StatusBadge tipo={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Estoque