// ItemAside.tsx
import Icon from '../Icon/Icon'
import type { IconName } from '../Icon/Icon'
import './Aside.css';

export type Rota = {
  id: string
  label: string
  icone: IconName
}

type ItemAsideProps = {
  rota: Rota
  rotaAtual: string
}

function ItemAside({ rota, rotaAtual }: ItemAsideProps) {
  return (
    <a
      href={`#/${rota.id}`}
      className={rota.id === rotaAtual ? 'aside-item ativo' : 'aside-item'}
      aria-current={rota.id === rotaAtual ? 'page' : undefined}
    >
      <Icon nome={rota.icone} />
      {rota.label}
    </a>
  )
}

export default ItemAside