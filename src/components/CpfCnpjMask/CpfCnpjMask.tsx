import React from 'react'

interface CpfCnpjMaskProps {
  value: string
  onChange: (value: string) => void
  tipo: 'cpf' | 'cnpj'
}

// Formata o valor para o padrão desejado
function formatar(value: string, tipo: 'cpf' | 'cnpj'): string {
  const soNumeros = value.replace(/\D/g, '').slice(0, tipo === 'cpf' ? 11 : 14)

  if (tipo === 'cpf') {
    return soNumeros
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/(\d{3})(\d{1,2})$/, '.$1-$2')
  }
  return soNumeros
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
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