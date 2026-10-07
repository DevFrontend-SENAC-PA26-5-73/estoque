// Lista única de rotas do sistema.
// Usada pelo menu lateral (Aside) e pelo App para decidir qual página mostrar.
// Assim, para criar uma página nova basta incluir uma linha aqui.
import type { IconName } from './components/Icon/Icon'

export interface Rota {
  id: string        // vai na URL: #/<id>
  label: string     // texto exibido no menu
  icone: IconName   // ícone do menu
}

// Itens da parte de cima do menu
export const ROTAS_PRINCIPAIS: Rota[] = [
  { id: 'dashboard',  label: 'Dashboard',  icone: 'dashboard' },
  { id: 'produtos',   label: 'Produtos',   icone: 'box' },
  { id: 'estoque',    label: 'Estoque',    icone: 'warehouse' },
  { id: 'vendas',     label: 'Vendas',     icone: 'cart' },
  { id: 'financeiro', label: 'Financeiro', icone: 'dollar' },
  { id: 'usuarios',   label: 'Usuários',   icone: 'users' },
  { id: 'relatorios', label: 'Relatórios', icone: 'file' },
]

// Item da parte de baixo do menu (o "Sair" é um botão, não uma rota)
export const ROTA_CONFIGURACOES: Rota = {
  id: 'configuracoes', label: 'Configurações', icone: 'settings',
}

export const TODAS_AS_ROTAS: Rota[] = [...ROTAS_PRINCIPAIS, ROTA_CONFIGURACOES]
