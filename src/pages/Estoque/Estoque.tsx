// Tela: Estoque (movimentações).
// Tabela com os campos do protótipo: Produto, Quantidade, Data da Movimentação,
// Observação, Local, Usuário e Tipo de Movimentação, mais botões de imprimir
// e exportar como PDF abaixo da tabela.
import { MOVIMENTACOES } from '../../data/mock'
import './Estoque.css'

// Cabeçalhos das colunas, na ordem do protótipo
const COLUNAS = [
  'Produto',
  'Quantidade',
  'Data da Movimentação',
  'Observação',
  'Local',
  'Usuário',
  'Tipo de Movimentação',
]

function Estoque() {
  // Abre a janela de impressão do navegador.
  // O CSS @media print (em Estoque.css) esconde menu, topo e botões na impressão.
  const imprimir = () => window.print()

  // "Exportar como PDF" usa o mesmo recurso: na janela de impressão,
  // escolha o destino "Salvar como PDF". Assim não precisa de biblioteca extra.
  // (Se quiser gerar o PDF direto, dá para usar jsPDF + jspdf-autotable depois.)
  const exportarPdf = () => window.print()

  return (
    <div className="estoque">
      <div className="pagina-cabecalho">
        <div>
          <h1>Estoque</h1>
          <p>Acompanhe as movimentações de entrada e saída de produtos</p>
        </div>
      </div>

      {/* Caixa branca com a tabela do estoque */}
      <section className="estoque-caixa">
        <table className="estoque-tabela">
          <thead>
            <tr>
              {COLUNAS.map((nome) => (
                <th key={nome}>{nome}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MOVIMENTACOES.map((m) => (
              <tr key={m.id}>
                <td>{m.produto}</td>
                <td className="numero">{m.quantidade}</td>
                <td>{m.data}</td>
                <td>{m.observacao}</td>
                <td>{m.local}</td>
                <td>{m.usuario}</td>
                <td>
                  {/* A classe muda a cor: "entrada" (verde) ou "saida" (vermelho) */}
                  <span className={m.tipo === 'Entrada' ? 'tipo entrada' : 'tipo saida'}>
                    {m.tipo}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Botões de ação (escondidos na impressão) */}
      <div className="estoque-acoes">
        <button type="button" className="botao" onClick={imprimir}>
          Imprimir
        </button>
        <button type="button" className="botao" onClick={exportarPdf}>
          Exportar como PDF
        </button>
      </div>
    </div>
  )
}

export default Estoque
