// Componente raiz: decide QUAL tela mostrar. Cada tela mora em seu próprio arquivo (pages/).
import { useState } from 'react'
import './App.css'
import Aside from './components/Aside/Aside'
import Topbar from './components/Topbar/Topbar'
import Cadastro from './pages/Cadastro/Cadastro'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Relatorios from './pages/Relatorios/Relatorios'
import Estoque from './pages/Estoque/Estoque'
import { useRota } from './hooks/useRota'
import { ROTAS_CADASTRO, TODAS_AS_ROTAS } from './routes'
import Produtos from './pages/Produtos/Produtos'
import CadastroProduto from './pages/Produtos/CadastroProduto'
import CadastroFornecedor from './pages/Produtos/CadastroFornecedor'

function App() {
  // Qual página está aberta (vem do hash da URL)
  const rota = useRota()

  // Controla se o menu lateral está aberto (botão "hambúrguer" no topo)
  const [menuAberto, setMenuAberto] = useState(() => window.innerWidth > 800) // em celular começa fechado

  // ---------- Telas públicas: sem menu e sem topo ----------
  if (rota === 'login') return <Login />
  if (rota === 'cadastro') return <Cadastro />

  // ---------- Telas internas: com menu lateral + barra do topo ----------
  // As rotas de cadastro são comparadas PRIMEIRO: "produtos/cadastro" também
  // começa com "produtos", então essa checagem precisa vir antes da de produtos.
  let pagina
  if (rota === 'dashboard') {
    pagina = <Dashboard />

  } else if (rota === ROTAS_CADASTRO.produto) {
    pagina = <CadastroProduto />

  } else if (rota === ROTAS_CADASTRO.fornecedor) {
    pagina = <CadastroFornecedor />

  } else if (rota === 'produtos') {
    pagina = <Produtos />

  } else if (rota === 'relatorios') {
    pagina = <Relatorios />

  } else if (rota === 'estoque') {
    pagina = <Estoque />

  } else {
    // As demais telas ainda não foram desenvolvidas: mostra um aviso simples
    const titulo = TODAS_AS_ROTAS.find((r) => r.id === rota)?.label
    pagina = (
      <>
        <h1>{titulo}</h1>
        <p>Página em desenvolvimento.</p>
      </>
    )
  }

  return (
    <div className={menuAberto ? 'layout' : 'layout layout-menu-fechado'}>
      {menuAberto && <Aside rotaAtual={rota} />}

      <div className="layout-conteudo">
        <Topbar aoAlternarMenu={() => setMenuAberto((aberto) => !aberto)} />
        <main className="pagina">{pagina}</main>
      </div>
    </div>
  )
}

export default App;
