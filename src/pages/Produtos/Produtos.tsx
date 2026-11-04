// Menu de produtos
// Essa tela resume os cadastros feitos, sejam de produtos ou fornecedores,
// e os exibe em duas tabelas diferentes: "Produtos Cadastrados" e "Fornecedores Cadastrados".
// Os botões do cabeçalho levam para as telas de cadastro.
import Icon from "../../components/Icon/Icon";
import Botao from "../../components/Botao/Botao";
import TabelaResumo from "../../components/TabelaResumo/TabelaResumo";
import StatusBadge from "../../components/StatusBadge/StatusBadge";
import type { ColunaResumo } from "../../components/TabelaResumo/TabelaResumo";
import { FORNECEDORES_RESUMO, PRODUTOS_RESUMO } from "../../data/mock";
import type { FornecedorResumo, ProdutoResumo } from "../../data/mock";
import { ROTAS_CADASTRO } from "../../routes";
import "./Produtos.css";

// ---------- Colunas da tabela "Produtos Cadastrados" ----------
const COLUNAS_PRODUTOS: ColunaResumo<ProdutoResumo>[] = [
  { chave: 'nome',       titulo: 'Produto',    renderizar: (p) => <strong>{p.nome}</strong> },
  { chave: 'categoria',  titulo: 'Categoria',  renderizar: (p) => p.categoria },
  { chave: 'fornecedor', titulo: 'Fornecedor', renderizar: (p) => p.fornecedor },
  { chave: 'quantidade', titulo: 'Qtd.',       renderizar: (p) => p.quantidade, alinharDireita: true },
  {
    chave: 'status',
    titulo: 'Status',
    // Reaproveita as etiquetas de "Entrada"/"Saída" do relatório (verdes/vermelhas)
    renderizar: (p) => <StatusBadge tipo={p.status} />,
  },
]

// ---------- Colunas da tabela "Fornecedores Cadastrados" ----------
const COLUNAS_FORNECEDORES: ColunaResumo<FornecedorResumo>[] = [
  { chave: 'nome',     titulo: 'Fornecedor', renderizar: (f) => <strong>{f.nome}</strong> },
  { chave: 'cnpj',     titulo: 'CNPJ',       renderizar: (f) => f.cnpj },
  { chave: 'contato',  titulo: 'Contato',    renderizar: (f) => f.contato },
  { chave: 'telefone', titulo: 'Telefone',   renderizar: (f) => f.telefone },
]

function Produtos() {
  return(
    <div className="produtos">
      <div className="pagina-cabecalho">
        <div>
          <h1>Produtos</h1>
          <p>Acompanhe o gerenciamento do estoque</p>
        </div>

        {/* Atalhos para as telas de cadastro */}
        <div className="produtos-acoes">
          <Botao
            href={`#/${ROTAS_CADASTRO.produto}`}
            texto="Cadastrar Produto"
            icone={<Icon nome="box" tamanho={16} />}
          />
          <Botao
            href={`#/${ROTAS_CADASTRO.fornecedor}`}
            texto="Cadastrar Fornecedor"
            icone={<Icon nome="userPlus" tamanho={16} />}
          />
        </div>
      </div>

      {/* ---------- Tabelas de resumo ---------- */}
      <section className="produtos-resumos">
        <TabelaResumo
          titulo="Produtos Cadastrados"
          icone="box"
          colunas={COLUNAS_PRODUTOS}
          dados={PRODUTOS_RESUMO}
          mensagemVazia="Nenhum produto cadastrado ainda."
          aoIdentificar={(p) => p.id}
          link={{ texto: 'Cadastrar produto', href: `#/${ROTAS_CADASTRO.produto}` }}
        />

        <TabelaResumo
          titulo="Fornecedores Cadastrados"
          icone="userPlus"
          colunas={COLUNAS_FORNECEDORES}
          dados={FORNECEDORES_RESUMO}
          mensagemVazia="Nenhum fornecedor cadastrado ainda."
          aoIdentificar={(f) => f.id}
          link={{ texto: 'Cadastrar fornecedor', href: `#/${ROTAS_CADASTRO.fornecedor}` }}
        />
      </section>
    </div>
  );
}

export default Produtos;
