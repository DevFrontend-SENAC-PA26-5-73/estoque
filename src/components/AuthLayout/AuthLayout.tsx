// Moldura das telas de Login e Cadastro: marca no topo, título, conteúdo e rodapé.
// Como as duas telas são iguais nisso, o código fica aqui UMA vez só.
import type { ReactNode } from 'react'
import './AuthLayout.css'

interface AuthLayoutProps {
  titulo: string       // ex.: "Login de Usuário"
  children: ReactNode  // o formulário de cada tela entra aqui dentro
}

function AuthLayout({ titulo, children }: AuthLayoutProps) {
  return (
    <div className="auth">
      <h1 className="auth-marca">KAZAS KASTANHAU</h1>
      <h2 className="auth-titulo">{titulo}</h2>

      {children}

      <footer className="auth-rodape">ERP - SISTEMA V1.0.0</footer>
    </div>
  )
}

export default AuthLayout
