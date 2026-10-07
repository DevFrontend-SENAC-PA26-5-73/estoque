// Componente de ícones em SVG (estilo "traço", como nos protótipos).
// Evita instalar biblioteca de ícones. Para adicionar um ícone novo,
// basta incluir uma entrada no objeto CAMINHOS (viewBox 24x24).
import type { ReactNode } from 'react'

const CAMINHOS = {
  dashboard: <><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></>,
  box: <><path d="M21 8 12 3 3 8v8l9 5 9-5z" /><path d="m3 8 9 5 9-5" /><path d="M12 13v8" /></>,
  warehouse: <><path d="M3 21V9l9-6 9 6v12" /><rect x="8" y="12" width="8" height="9" /><path d="M8 16.5h8" /></>,
  cart: <><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.7 12.4a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H6" /></>,
  dollar: <><circle cx="12" cy="12" r="9" /><path d="M15 9.5C15 8.1 13.7 7 12 7s-3 1.1-3 2.5 1.3 2.2 3 2.5 3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5" /><path d="M12 5.5V7M12 17v1.5" /></>,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" /><path d="M18 14.3c2.2.7 3.5 2.6 3.5 5.7" /></>,
  file: <><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h6" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></>,
  logout: <><path d="M9 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /></>,
  bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  trending: <><path d="m3 17 6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  alert: <><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4M12 17h.01" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></>,
  plusCircle: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></>,
  userPlus: <><circle cx="10" cy="8" r="3.5" /><path d="M3 20c0-3.6 3-6 7-6" /><path d="M18 8v6M15 11h6" /></>,
  edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  dots: <><circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /></>,
} satisfies Record<string, ReactNode>

// O tipo IconName vira automaticamente a lista de nomes acima
// (ajuda o editor a sugerir e evita digitar um nome que não existe).
export type IconName = keyof typeof CAMINHOS

interface IconProps {
  nome: IconName
  tamanho?: number // largura/altura em px (padrão 20)
}

function Icon({ nome, tamanho = 20 }: IconProps) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"      // pega a cor do texto do elemento pai
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"         // ícone é decorativo para leitores de tela
    >
      {CAMINHOS[nome]}
    </svg>
  )
}

export default Icon
