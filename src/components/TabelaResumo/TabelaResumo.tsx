// Tabela de resumo dentro de um painel (usa as classes .painel / .painel-cabecalho de App.css).
// Nasceu da tabela de "Atividades recentes" do Dashboard: recebe as colunas e as linhas
// prontas, então serve para qualquer lista (produtos, fornecedores...).
// Quando uma célula precisa de um visual diferente (etiqueta de status), basta
// devolver um <span> com a classe desejada em "renderizar".
import type { ReactNode } from 'react'
import Icon from '../Icon/Icon'
import type { IconName } from '../Icon/Icon'
import './TabelaResumo.css'

export interface ColunaResumo<T> {
  titulo: string      // texto do cabeçalho (renderizado em maiúsculas pelo CSS)
  chave: string       // identificador único da coluna
  renderizar: (item: T) => ReactNode
  alinharDireita?: boolean
}

interface TabelaResumoProps<T> {
  titulo: string
  icone: IconName
  link?: { texto: string; href: string }  // link opcional no canto direito do cabeçalho
  colunas: ColunaResumo<T>[]
  dados: T[]
  mensagemVazia: string
  aoIdentificar: (item: T) => string | number  // chave única de cada linha
}

function TabelaResumo<T>({
  titulo,
  icone,
  link,
  colunas,
  dados,
  mensagemVazia,
  aoIdentificar,
}: TabelaResumoProps<T>) {
  return (
    <section className="painel tabela-resumo">
      <div className="painel-cabecalho">
        <h2><Icon nome={icone} /> {titulo}</h2>
        {link && (
          <a href={link.href} className="link-ver-mais">
            {link.texto} <Icon nome="arrowRight" tamanho={14} />
          </a>
        )}
      </div>

      {dados.length === 0 ? (
        <p className="tabela-resumo-vazia">{mensagemVazia}</p>
      ) : (
        <div className="tabela-rolagem">
          <table className="tabela-resumo-tabela">
            <thead>
              <tr>
                {colunas.map((coluna) => (
                  <th key={coluna.chave}>{coluna.titulo}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dados.map((item) => (
                <tr key={aoIdentificar(item)}>
                  {colunas.map((coluna) => (
                    <td key={coluna.chave} className={coluna.alinharDireita ? 'alinhar-direita' : undefined}>
                      {coluna.renderizar(item)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default TabelaResumo
