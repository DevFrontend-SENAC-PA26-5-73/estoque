// Botão padrão do sistema.
// - Sem "href": renderiza um <button> (envie "aoClicar" e "tipo").
// - Com "href": renderiza um <a> com a mesma aparência (usado para navegar entre telas).
// A variante "secundario" troca o preenchimento por contorno.
import type { ReactNode } from 'react';
import './Botao.css';

type BotaoProps = {
    texto?: string,
    ariaLabel?: string,
    href?: string,
    aoClicar?: () => void,
    tipo?: 'button' | 'submit',
    variante?: 'primario' | 'secundario',
    icone?: ReactNode,
}

function Botao({
    texto = 'Entrar',
    ariaLabel,
    href,
    aoClicar,
    tipo = 'button',
    variante = 'primario',
    icone,
}: BotaoProps) {
    const classe = variante === 'secundario' ? 'botao botao-secundario' : 'botao';
    const conteudo = (
        <>
            {icone}
            {texto}
        </>
    );

    if (href) {
        return (
            <a href={href} className={classe} aria-label={ariaLabel} onClick={aoClicar}>
                {conteudo}
            </a>
        );
    }

    return (
        <button type={tipo} className={classe} aria-label={ariaLabel} onClick={aoClicar}>
            {conteudo}
        </button>
    );
}
export default Botao;
