import React from 'react'

interface CpfCnpjMaskProps {
  value: string
  onChange: (value: string) => void
  tipo: 'cpf' | 'cnpj'
}

// Formata o valor para o padrão desejado
// CPF: 123.456.789-12 | CNPJ: 12.345.678/0001-23
// Monta a máscara a partir dos dígitos (sem regex em cadeia),
// para não duplicar separadores (ex.: "456..789").
function formatar(value: string, tipo: 'cpf' | 'cnpj'): string {
  const soNumeros = value.replace(/\D/g, '').slice(0, tipo === 'cpf' ? 11 : 14)

  if (tipo === 'cpf') {
    if (soNumeros.length <= 3) return soNumeros
    if (soNumeros.length <= 6) return `${soNumeros.slice(0, 3)}.${soNumeros.slice(3)}`
    if (soNumeros.length <= 9) return `${soNumeros.slice(0, 3)}.${soNumeros.slice(3, 6)}.${soNumeros.slice(6)}`
    return `${soNumeros.slice(0, 3)}.${soNumeros.slice(3, 6)}.${soNumeros.slice(6, 9)}-${soNumeros.slice(9)}`
  }
  if (soNumeros.length <= 2) return soNumeros
  if (soNumeros.length <= 5) return `${soNumeros.slice(0, 2)}.${soNumeros.slice(2)}`
  if (soNumeros.length <= 8) return `${soNumeros.slice(0, 2)}.${soNumeros.slice(2, 5)}.${soNumeros.slice(5)}`
  if (soNumeros.length <= 12) return `${soNumeros.slice(0, 2)}.${soNumeros.slice(2, 5)}.${soNumeros.slice(5, 8)}/${soNumeros.slice(8)}`
  return `${soNumeros.slice(0, 2)}.${soNumeros.slice(2, 5)}.${soNumeros.slice(5, 8)}/${soNumeros.slice(8, 12)}-${soNumeros.slice(12)}`
}

function CpfCnpjMask({ value, onChange, tipo }: CpfCnpjMaskProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value
    const formatado = formatar(valor, tipo)
    if (formatado !== value) {
      onChange(formatado)
    }
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={tipo === 'cpf' ? '000.000.000-00' : '00.000.000/0000-00'}
      autoComplete={tipo === 'cpf' ? 'cpf' : 'cnpj'}
    />
  )
}

export default CpfCnpjMask
