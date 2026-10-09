import './LowStockCard.css';

type LowStockCardProps = {
    nome: string;
    categoria: string;
    quantidade: number;

}

function LowStockCard(p: LowStockCardProps){

    return(
        <li key={p.nome}>
            <span className="estoque-baixo-foto" /> {/* espaço da foto do produto */}
            <div>
                <strong>{p.nome}</strong>
                <small>{p.categoria}</small>
            </div>
            <span className="etiqueta-qtd">{p.quantidade} un.</span>
        </li>
    )
}
export default LowStockCard;