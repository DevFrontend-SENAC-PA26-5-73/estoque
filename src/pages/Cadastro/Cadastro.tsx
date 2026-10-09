// Tela de Cadastro de Usuário.
import { useState } from 'react'
import type { FormEvent } from 'react'
import AuthLayout from '../../components/AuthLayout/AuthLayout'

// Coloca a máscara 000.000.000-00 enquanto o usuário digita o CPF
function formatarCpf(valor: string): string {
  const n = valor.replace(/\D/g, '').slice(0, 11) // só números, no máximo 11
  return n
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1-$2')
}

// Todos os campos do formulário num único objeto
interface DadosCadastro {
  nome: string
  cpf: string
  nascimento: string
  email: string
  login: string
  senha: string
}

const FORMULARIO_VAZIO: DadosCadastro = {
  nome: '', cpf: '', nascimento: '', email: '', login: '', senha: '',
}

function Cadastro() {
  const [dados, setDados] = useState<DadosCadastro>(FORMULARIO_VAZIO)
  const [erro, setErro] = useState('')

  // Atualiza UM campo sem perder os outros.
  // "campo" é o nome da propriedade (nome, cpf, ...) e "valor" o que foi digitado.
  const atualizar = (campo: keyof DadosCadastro, valor: string) => {
    setDados((anterior) => ({ ...anterior, [campo]: valor }))
  }

  const aoEnviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    // Validações simples (o back-end também deve validar!)
    if (Object.values(dados).some((v) => v.trim() === '')) {
      setErro('Preencha todos os campos.')
      return
    }
    if (dados.cpf.length !== 14) {
      setErro('CPF incompleto.')
      return
    }
    if (dados.senha.length < 8) {
      setErro('A senha deve ter pelo menos 8 caracteres.')
      return
    }

    // TODO: enviar "dados" para a API (ex.: fetch('/api/usuarios', { method: 'POST', ... })).
    setErro('')
    window.location.hash = '#/login' // volta para o login depois de cadastrar
  }

  return (
    <AuthLayout titulo="Cadastro de Usuário">
      <form className="auth-form" onSubmit={aoEnviar}>
        <label className="auth-campo">
          Nome
          <input type="text" value={dados.nome} onChange={(e) => atualizar('nome', e.target.value)} autoComplete="name" />
        </label>

        <label className="auth-campo">
          CPF
          <input
            type="text"
            inputMode="numeric"
            value={dados.cpf}
            onChange={(e) => atualizar('cpf', formatarCpf(e.target.value))}
          />
        </label>

        <label className="auth-campo">
          Data De Nascimento
          <input type="date" value={dados.nascimento} onChange={(e) => atualizar('nascimento', e.target.value)} />
        </label>

        <label className="auth-campo">
          Email
          <input type="email" value={dados.email} onChange={(e) => atualizar('email', e.target.value)} autoComplete="email" />
        </label>

        <label className="auth-campo">
          Login
          <input type="text" value={dados.login} onChange={(e) => atualizar('login', e.target.value)} autoComplete="username" />
        </label>

        <label className="auth-campo">
          Senha
          <input type="password" value={dados.senha} onChange={(e) => atualizar('senha', e.target.value)} autoComplete="new-password" />
        </label>

        {erro && <p className="auth-erro">{erro}</p>}

        <button type="submit" className="auth-botao">Cadastrar</button>

        <p className="auth-link">
          Já tem conta? <a href="#/login">Entrar</a>
        </p>
      </form>
    </AuthLayout>
  )
}

export default Cadastro
