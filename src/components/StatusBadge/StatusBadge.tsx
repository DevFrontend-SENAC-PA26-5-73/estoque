function StatusBadge({ tipo, tamanho = 12 }: { tipo: string; tamanho?: number }) {
  // Mapeia os tipos de status para classes CSS
  const mapa: Record<string, string> = {
    entrada: 'tipo entrada',
    saida: 'tipo saida',
    ativo: 'tipo entrada',
    inativo: 'tipo saida',
    Entrada: 'tipo entrada',
    Saída: 'tipo saida',
    Ativo: 'tipo entrada',
    Inativo: 'tipo saida',
  }

  const classe = mapa[tipo] || 'tipo entrada'

  return (
    <span className={classe} style={{ fontSize: `${tamanho}px` }}>
      {tipo}
    </span>
  )
}

export default StatusBadge