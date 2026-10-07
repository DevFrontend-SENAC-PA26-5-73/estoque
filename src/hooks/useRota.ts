// Mini "roteador" baseado no hash da URL (ex.: http://localhost:5173/#/relatorios).
// Foi feito assim para NÃO precisar instalar nenhuma biblioteca nova.
// Se mais tarde quiser usar o react-router-dom, basta trocar este hook.
import { useEffect, useState } from 'react'
import { TODAS_AS_ROTAS } from '../routes'

const ROTA_PADRAO = 'dashboard'

// Lê o hash atual e devolve o id da rota (ou a rota padrão se for inválido)
function lerRotaDaUrl(): string {
  const id = window.location.hash.replace('#/', '')
  return TODAS_AS_ROTAS.some((r) => r.id === id) ? id : ROTA_PADRAO
}

export function useRota(): string {
  const [rota, setRota] = useState<string>(lerRotaDaUrl)

  useEffect(() => {
    // Sempre que o hash mudar (clique no menu, botão voltar...), atualiza o estado
    const aoMudar = () => setRota(lerRotaDaUrl())
    window.addEventListener('hashchange', aoMudar)
    return () => window.removeEventListener('hashchange', aoMudar)
  }, [])

  return rota
}
