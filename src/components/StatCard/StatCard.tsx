// Card de indicador do Dashboard (Produtos, Estoque, Vendas, Financeiro).
import Icon from '../Icon/Icon'
import type { Indicador } from '../../data/mock'
import './StatCard.css'

function StatCard({ titulo, valor, variacao, icone }: Indicador) {
  return (
    <article className="stat-card">
      <button type="button" className="stat-card-menu" aria-label="Opções">
        <Icon nome="dots" tamanho={16} />
      </button>

      <div className="stat-card-topo">
        <span className="stat-card-icone"><Icon nome={icone} tamanho={44} /></span>
        <div>
          <span className="stat-card-titulo">{titulo}</span>
          <strong className="stat-card-valor">{valor}</strong>
        </div>
      </div>

      <div className="stat-card-variacao">
        <Icon nome="trending" tamanho={16} />
        <span>{variacao}</span>
        <small>vs mês anterior</small>
      </div>
    </article>
  )
}

export default StatCard
