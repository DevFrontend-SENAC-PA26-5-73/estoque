// Barra do topo: botão de menu, busca, notificações e usuário logado.
import Icon from '../Icon/Icon'
import './Topbar.css'

interface TopbarProps {
  aoAlternarMenu: () => void // chamada ao clicar no botão "hambúrguer"
}

function Topbar({ aoAlternarMenu }: TopbarProps) {
  return (
    <header className="topbar">
      <button type="button" className="topbar-menu" onClick={aoAlternarMenu} aria-label="Abrir/fechar menu">
        <Icon nome="menu" tamanho={22} />
      </button>

      <label className="topbar-busca">
        <Icon nome="search" tamanho={16} />
        <input type="search" placeholder="Buscar no sistema..." />
      </label>

      <div className="topbar-direita">
        <button type="button" className="topbar-sino" aria-label="Notificações">
          <Icon nome="bell" tamanho={22} />
          <span className="topbar-sino-ponto" />
        </button>

        {/* Usuário logado (por enquanto fixo; depois virá do login) */}
        <div className="topbar-usuario">
          <span className="topbar-avatar">ET</span>
          <div>
            <strong>Ederson Tenorio</strong>
            <span>Administrador</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
