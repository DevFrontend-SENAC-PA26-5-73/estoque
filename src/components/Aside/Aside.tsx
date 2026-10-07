// Menu lateral (sidebar) azul, presente em todas as páginas.
import Icon from '../Icon/Icon'
import { ROTAS_PRINCIPAIS, ROTA_CONFIGURACOES } from '../../routes'
import './Aside.css'

interface AsideProps {
  rotaAtual: string // id da página aberta, para destacar o item no menu
}

function Aside({ rotaAtual }: AsideProps) {
  return (
    <aside className="aside">
      {/* Logo + nome do sistema */}
      <div className="aside-marca">
        <Icon nome="warehouse" tamanho={34} />
        <div>
          <strong>ERP</strong>
          <span>Gestão de Estoque</span>
        </div>
      </div>

      {/* Itens principais: o "map" cria um link para cada rota da lista */}
      <nav className="aside-menu">
        {ROTAS_PRINCIPAIS.map((rota) => (
          <a
            key={rota.id}
            href={`#/${rota.id}`}
            // Adiciona a classe "ativo" no item da página atual
            className={rota.id === rotaAtual ? 'aside-item ativo' : 'aside-item'}
          >
            <Icon nome={rota.icone} />
            {rota.label}
          </a>
        ))}
      </nav>

      {/* Parte de baixo: Configurações e Sair */}
      <nav className="aside-rodape">
        <a
          href={`#/${ROTA_CONFIGURACOES.id}`}
          className={ROTA_CONFIGURACOES.id === rotaAtual ? 'aside-item ativo' : 'aside-item'}
        >
          <Icon nome={ROTA_CONFIGURACOES.icone} />
          {ROTA_CONFIGURACOES.label}
        </a>
        {/* TODO: ligar ao logout quando existir autenticação */}
        <button type="button" className="aside-item">
          <Icon nome="logout" />
          Sair
        </button>
      </nav>
    </aside>
  )
}
        
export default Aside
