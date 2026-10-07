// Tela de Login de Usuário.
import { useState } from 'react'
import type { FormEvent } from 'react'
import AuthLayout from '../../components/AuthLayout/AuthLayout'

function Login() {
  // Cada campo do formulário fica guardado em um estado ("campo controlado")
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  // Roda quando o usuário clica em "Entrar" (ou aperta Enter)
  const aoEnviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault() // impede o navegador de recarregar a página

    if (login.trim() === '' || senha === '') {
      setErro('Preencha o login e a senha.')
      return
    }

    // TODO: aqui entrará a chamada à API (ex.: fetch('/api/login', ...)).
    // Por enquanto o login é simulado: qualquer dado vai para o Dashboard.
    setErro('')
    window.location.hash = '#/dashboard'
  }

  return (
    <AuthLayout titulo="Login de Usuário">
      <form className="auth-form" onSubmit={aoEnviar}>
        <label className="auth-campo">
          Login
          <input
            type="text"
            placeholder="Digite seu CPF ou e-Mail"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            autoComplete="username"
          />
        </label>

        <label className="auth-campo">
          Senha
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            autoComplete="current-password"
          />
        </label>

        {erro && <p className="auth-erro">{erro}</p>}

        <button type="submit" className="auth-botao">Entrar</button>

        {/* Link extra (não está no protótipo) para chegar na tela de cadastro */}
        <p className="auth-link">
          Não tem conta? <a href="#/cadastro">Cadastre-se</a>
        </p>
      </form>
    </AuthLayout>
  )
}

export default Login
