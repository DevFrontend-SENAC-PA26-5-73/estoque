// Cabeçalho padrão das páginas (título + subtítulo + ação à direita).
// O estilo fica em App.css (.pagina-cabecalho, .pagina h1, .pagina-cabecalho p),
// então este componente só monta a estrutura.
// Qualquer ação da direita (select, botões, etc.) entra como "children".
import type { ReactNode } from 'react'

type PaginaCabecalhoProps = {
  titulo: string
  subtitulo?: string
  children?: ReactNode
}

function PaginaCabecalho({ titulo, subtitulo, children }: PaginaCabecalhoProps) {
  return (
    <div className="pagina-cabecalho">
      <div>
        <h1>{titulo}</h1>
        {subtitulo && <p>{subtitulo}</p>}
      </div>
      {children}
    </div>
  )
}

export default PaginaCabecalho
