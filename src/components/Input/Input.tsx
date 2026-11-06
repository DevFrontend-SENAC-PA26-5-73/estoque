import './Input.css';
import { useState } from 'react';

// Props do input. "label" e "placeholder" são obrigatórias;
// as demais (tipo, nome, valor, aoMudar) são opcionais para não quebrar
// quem já usa o componente só com label + placeholder.
// - tipo: inclui os tipos das telas de auth (email, password).
// - autoComplete e inputMode: opcionais para facilitar o preenchimento.
// - variante: 'padrao' é o visual usado nos formulários de produto/fornecedor;
//   'auth' repete o visual das telas de login/cadastro (.auth-campo).
// - mostrarOcultarSenha: quando true e o tipo é 'password', exibe um botão
//   para visualizar (olho) / ocultar a senha digitada.
type InputProps = {
    label: string,
    placeholder: string,
    tipo?: 'text' | 'number' | 'date' | 'email' | 'password' | 'textarea',
    nome?: string,
    valor?: string,
    aoMudar?: (valor: string) => void,
    autoComplete?: string,
    inputMode?: 'none' | 'numeric' | 'text' | 'decimal' | 'tel' | 'search' | 'email' | 'url',
    variante?: 'padrao' | 'auth',
    mostrarOcultarSenha?: boolean,
}

function Input({label, placeholder, tipo = 'text', nome, valor, aoMudar, autoComplete, inputMode, variante = 'padrao', mostrarOcultarSenha = false}: InputProps) {
    // Estado interno só usado quando há botão de mostrar/ocultar senha.
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const ehSenhaComBotao = tipo === 'password' && mostrarOcultarSenha;
    const classe = variante === 'auth' ? 'input-txt input-auth' : 'input-txt';
    return(
        <div className={classe}>
            <label htmlFor={nome}>{label}</label>
            {tipo === 'textarea' ? (
                <textarea
                    id={nome}
                    name={nome}
                    rows={3}
                    placeholder={placeholder}
                    value={valor}
                    onChange={(e) => aoMudar?.(e.target.value)}
                    autoComplete={autoComplete}
                />
            ) : ehSenhaComBotao ? (
                <div className="input-senha-wrapper">
                    <input
                        id={nome}
                        name={nome}
                        type={senhaVisivel ? 'text' : 'password'}
                        placeholder={placeholder}
                        value={valor}
                        onChange={(e) => aoMudar?.(e.target.value)}
                        autoComplete={autoComplete}
                        inputMode={inputMode}
                    />
                    <button
                        type="button"
                        className="botao-mostrar-senha"
                        aria-label={senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
                        title={senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
                        onClick={() => setSenhaVisivel((visivel) => !visivel)}
                    >
                        {senhaVisivel ? '🙈' : '👁️'}
                    </button>
                </div>
            ) : (
                <input
                    id={nome}
                    name={nome}
                    type={tipo}
                    placeholder={placeholder}
                    value={valor}
                    onChange={(e) => aoMudar?.(e.target.value)}
                    autoComplete={autoComplete}
                    inputMode={inputMode}
                />
            )}
        </div>
    )

}
export default Input
