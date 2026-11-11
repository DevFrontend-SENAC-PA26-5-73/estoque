// Tela 1: Dashboard (visão geral do sistema).
import { useState } from 'react'
import Icon from '../../components/Icon/Icon'
import StatCard from '../../components/StatCard/StatCard'
import LowStockCard from '../../components/LowStockCard/LowStockCard'
import LineChart from '../../components/LineChart/LineChart'
import TabelaResumo from '../../components/TabelaResumo/TabelaResumo'
import type { ColunaResumo } from '../../components/TabelaResumo/TabelaResumo'
import PaginaCabecalho from '../../components/PaginaCabecalho/PaginaCabecalho'
import { ATIVIDADES, ESTOQUE_BAIXO, INDICADORES, VENDAS_MENSAIS } from '../../data/mock'
import type { Atividade } from '../../data/mock'
import './Dashboard.css'

// ---------- Colunas da tabela "Atividades recentes" ----------
const COLUNAS_ATIVIDADES: ColunaResumo<Atividade>[] = [
  {
    chave: 'acao',
    titulo: 'Ação',
    renderizar: (a) => (
      <span className="celula-acao"><Icon nome={a.icone} tamanho={18} /> {a.acao}</span>
    ),
  },
  { chave: 'detalhes', titulo: 'Detalhes', renderizar: (a) => a.detalhes },
  { chave: 'usuario', titulo: 'Usuários', renderizar: (a) => a.usuario },
  { chave: 'dataHora', titulo: 'Data/Hora', renderizar: (a) => a.dataHora },
]

function Dashboard() {
  // Filtros dos selects. Por enquanto só guardam a escolha (dados são fixos);
  // quando houver API, é aqui que você refaria a busca com o novo período.
  const [periodo, setPeriodo] = useState('30')
  const [periodoGrafico, setPeriodoGrafico] = useState('6')

  return (
    <div className="dashboard">
      {/* ---------- Título + filtro de período ---------- */}
      <PaginaCabecalho titulo="Dashboard" subtitulo="Visão geral do sistema">
        <label className="seletor">
          <Icon nome="calendar" tamanho={16} />
          <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
            <option value="7">Últimos 7 dias</option>
            <option value="30">Últimos 30 dias</option>
            <option value="90">Últimos 90 dias</option>
          </select>
        </label>
      </PaginaCabecalho>

      {/* ---------- Cards de indicadores ---------- */}
      <section className="dashboard-indicadores">
        {INDICADORES.map((item) => (
          <StatCard key={item.titulo} {...item} />
        ))}
      </section>

      {/* ---------- Gráfico de vendas + Estoque baixo ---------- */}
      <section className="dashboard-linha">
        <article className="painel">
          <div className="painel-cabecalho">
            <h2><Icon nome="trending" /> Vendas</h2>
            <select
              className="seletor-simples"
              value={periodoGrafico}
              onChange={(e) => setPeriodoGrafico(e.target.value)}
            >
              <option value="3">Últimos 3 meses</option>
              <option value="6">Últimos 6 meses</option>
            </select>
          </div>
          {/* Mostra só os últimos N meses conforme o select */}
          <LineChart dados={VENDAS_MENSAIS.slice(-Number(periodoGrafico))} />
        </article>

        <article className="painel">
          <div className="painel-cabecalho">
            <h2 className="titulo-alerta"><Icon nome="alert" /> Estoque baixo</h2>
            <a href="#/estoque" className="link-ver-mais">
              Ver estoque completo <Icon nome="arrowRight" tamanho={14} />
            </a>
          </div>

          <ul className="estoque-baixo">
            {ESTOQUE_BAIXO.map((p) => (
              <LowStockCard
                key={p.nome}
                nome={p.nome}
                categoria={p.categoria}
                quantidade={p.quantidade}
              />
            ))}
          </ul>
        </article>
      </section>

      {/* ---------- Atividades recentes ---------- */}
      <TabelaResumo
        titulo="Atividades recentes"
        icone="clock"
        link={{ texto: 'Ver todas as atividades', href: '#/relatorios' }}
        colunas={COLUNAS_ATIVIDADES}
        dados={ATIVIDADES}
        mensagemVazia="Nenhuma atividade recente."
        aoIdentificar={(a) => a.acao + a.dataHora}
      />
    </div>
  )
}

export default Dashboard
