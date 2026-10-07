// Dados FICTÍCIOS só para montar o visual das telas.
// Quando o back-end existir, estas listas serão substituídas por chamadas à API (fetch).
import type { IconName } from '../components/Icon/Icon'

// ----- Cards do topo do Dashboard -----
export interface Indicador {
  titulo: string
  valor: string
  variacao: string // ex.: "+12,5%"
  icone: IconName
}

export const INDICADORES: Indicador[] = [
  { titulo: 'PRODUTOS',   valor: '1.248',      variacao: '+12,5%', icone: 'box' },
  { titulo: 'ESTOQUE',    valor: '3.842',      variacao: '+5,2%',  icone: 'warehouse' },
  { titulo: 'VENDAS',     valor: 'R$ 28.450',  variacao: '+5,4%',  icone: 'cart' },
  { titulo: 'FINANCEIRO', valor: 'R$ 12.780',  variacao: '+6,3%',  icone: 'dollar' },
]

// ----- Gráfico de vendas (últimos 6 meses) -----
export interface PontoGrafico {
  rotulo: string
  valor: number
}

export const VENDAS_MENSAIS: PontoGrafico[] = [
  { rotulo: 'Jan', valor: 20000 },
  { rotulo: 'Fev', valor: 30000 },
  { rotulo: 'Mar', valor: 26000 },
  { rotulo: 'Abr', valor: 17000 },
  { rotulo: 'Mai', valor: 30000 },
  { rotulo: 'Jun', valor: 27000 },
]

// ----- Lista "Estoque baixo" -----
export interface ProdutoEstoqueBaixo {
  nome: string
  categoria: string
  quantidade: number
}

export const ESTOQUE_BAIXO: ProdutoEstoqueBaixo[] = [
  { nome: 'Produto A', categoria: 'Eletrônicos', quantidade: 5 },
  { nome: 'Produto B', categoria: 'Informática', quantidade: 6 },
  { nome: 'Produto C', categoria: 'Periféricos', quantidade: 6 },
  { nome: 'Produto D', categoria: 'Acessórios',  quantidade: 3 },
  { nome: 'Produto E', categoria: 'Gamer',       quantidade: 2 },
]

// ----- Tabela "Atividades recentes" -----
export interface Atividade {
  acao: string
  icone: IconName
  detalhes: string
  usuario: string
  dataHora: string
}

export const ATIVIDADES: Atividade[] = [
  { acao: 'Produto cadastrado', icone: 'plusCircle', detalhes: 'Mouse Logitech',          usuario: 'Ederson Tenorio', dataHora: 'Hoje, 14:32' },
  { acao: 'Venda realizada',    icone: 'cart',       detalhes: 'Teclado Mecânico',        usuario: 'Ederson Tenorio', dataHora: 'Hoje, 13:48' },
  { acao: 'Entrada de estoque', icone: 'box',        detalhes: 'Monitor 24" Full HD',     usuario: 'Ederson Tenorio', dataHora: 'Hoje, 11:20' },
  { acao: 'Novo usuário',       icone: 'userPlus',   detalhes: 'Maria Silva (Vendedor)',  usuario: 'Ederson Tenorio', dataHora: 'Hoje, 10:05' },
  { acao: 'Produto atualizado', icone: 'edit',       detalhes: 'Fonte 500W',              usuario: 'Ederson Tenorio', dataHora: 'Ontem, 16:42' },
]

// ----- Tela "Relatórios do Estoque" -----
// Os campos seguem exatamente a lista do protótipo:
// Produto, Quantidade, Data da Movimentação, Observação, Local, Usuário, Tipo de Movimentação.
export type TipoMovimentacao = 'Entrada' | 'Saída'

export interface Movimentacao {
  id: number
  produto: string
  quantidade: number
  data: string
  observacao: string
  local: string
  usuario: string
  tipo: TipoMovimentacao
}

export const MOVIMENTACOES: Movimentacao[] = [
  { id: 1, produto: 'Mouse Logitech',      quantidade: 20, data: '06/10/2026', observacao: 'Reposição mensal',        local: 'Depósito A', usuario: 'Ederson Tenorio', tipo: 'Entrada' },
  { id: 2, produto: 'Teclado Mecânico',    quantidade: 2,  data: '06/10/2026', observacao: 'Venda balcão',            local: 'Loja',       usuario: 'Maria Silva',     tipo: 'Saída' },
  { id: 3, produto: 'Monitor 24" Full HD', quantidade: 10, data: '06/10/2026', observacao: 'Compra de fornecedor',    local: 'Depósito B', usuario: 'Ederson Tenorio', tipo: 'Entrada' },
  { id: 4, produto: 'Fonte 500W',          quantidade: 4,  data: '05/10/2026', observacao: 'Troca em garantia',       local: 'Depósito A', usuario: 'Ederson Tenorio', tipo: 'Saída' },
  { id: 5, produto: 'Headset Gamer',       quantidade: 8,  data: '05/10/2026', observacao: 'Reposição de estoque',    local: 'Depósito B', usuario: 'Maria Silva',     tipo: 'Entrada' },
  { id: 6, produto: 'Cabo HDMI 2m',        quantidade: 15, data: '04/10/2026', observacao: 'Venda online',            local: 'Loja',       usuario: 'Maria Silva',     tipo: 'Saída' },
]
