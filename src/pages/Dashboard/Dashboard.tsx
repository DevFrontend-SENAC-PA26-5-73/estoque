// Tela 1: Dashboard (visão geral do sistema).
import { useState } from 'react'
import Icon from '../../components/Icon/Icon'
import StatCard from '../../components/StatCard/StatCard'
import LineChart from '../../components/LineChart/LineChart'
import { ATIVIDADES, ESTOQUE_BAIXO, INDICADORES, VENDAS_MENSAIS } from '../../data/mock'
import './Dashboard.css'

function Dashboard() {
  // Filtros dos selects. Por enquanto só guardam a escolha (dados são fixos);
  // quando houver API, é aqui que você refaria a busca com o novo período.
  const [periodo, setPeriodo] = useState('30')
  const [periodoGrafico, setPeriodoGrafico] = useState('6')

  return (
    <div className="dashboard">
      {/* ---------- Título + filtro de período ---------- */}
      <div className="pagina-cabecalho">
        <div>
          <h1>Dashboard</h1>
          <p>Visão geral do sistema</p>
        </div>

        <label className="seletor">
          <Icon nome="calendar" tamanho={16} />
          <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
            <option value="7">Últimos 7 dias</option>
            <option value="30">Últimos 30 dias</option>
            <option value="90">Últimos 90 dias</option>
          </select>
        </label>
      </div>

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
              <li key={p.nome}>
                <span className="estoque-baixo-foto" /> {/* espaço da foto do produto */}
                <div>
                  <strong>{p.nome}</strong>
                  <small>{p.categoria}</small>
                </div>
                <span className="etiqueta-qtd">{p.quantidade} un.</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* ---------- Atividades recentes ---------- */}
      <section className="painel">
        <div className="painel-cabecalho">
          <h2><Icon nome="clock" /> Atividades recentes</h2>
          <a href="#/relatorios" className="link-ver-mais">
            Ver todas as atividades <Icon nome="arrowRight" tamanho={14} />
          </a>
        </div>

        <div className="tabela-rolagem">
          <table className="tabela-atividades">
            <thead>
              <tr>
                <th>AÇÃO</th>
                <th>DETALHES</th>
                <th>USUÁRIOS</th>
                <th>DATA/HORA</th>
              </tr>
            </thead>
            <tbody>
              {ATIVIDADES.map((a) => (
                <tr key={a.acao + a.dataHora}>
                  <td>
                    <span className="celula-acao"><Icon nome={a.icone} tamanho={18} /> {a.acao}</span>
                  </td>
                  <td>{a.detalhes}</td>
                  <td>{a.usuario}</td>
                  <td>{a.dataHora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
