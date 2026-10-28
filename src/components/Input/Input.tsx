import './Input.css';

// Props do input. "label" e "placeholder" são obrigatórias;
// as demais (tipo, nome, valor, aoMudar) são opcionais para não quebrar
// quem já usa o componente só com label + placeholder.
type InputProps = {
    label: string,
    placeholder: string,
    tipo?: 'text' | 'number' | 'date' | 'textarea',
    nome?: string,
    valor?: string,
    aoMudar?: (valor: string) => void
}

function Input({label, placeholder, tipo = 'text', nome, valor, aoMudar}: InputProps) {
    return(
        <div className='input-txt'>
            <label htmlFor={nome}>{label}</label> <br/>
            {tipo === 'textarea' ? (
                <textarea
                    id={nome}
                    name={nome}
                    rows={3}
                    placeholder={placeholder}
                    value={valor}
                    onChange={(e) => aoMudar?.(e.target.value)}
                />
            ) : (
                <input
                    id={nome}
                    name={nome}
                    type={tipo}
                    placeholder={placeholder}
                    value={valor}
                    onChange={(e) => aoMudar?.(e.target.value)}
                />
            )}
        </div>
    )
    
}
export default Input
