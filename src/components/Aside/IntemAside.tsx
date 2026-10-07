import Icon from '../Icon/Icon'
import type { IconName } from '../Icon/Icon'

type IntemAsideProps = {
    id: string
    label: string
    icone: IconName
    rotaAtual: string
}

function IntemAside(rota: IntemAsideProps) {
    return (
        <a
            key={rota.id}
            href={`#/${rota.id}`}
            // Adiciona a classe "ativo" no item da página atual
            className={rota.id === rota.rotaAtual ? 'aside-item ativo' : 'aside-item'}
            >
            <Icon nome={rota.icone} />
            {rota.label}
        </a>
    )
}

export default IntemAside;