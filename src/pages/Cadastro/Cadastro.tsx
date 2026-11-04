// Tela de Cadastro de Usuário.
import { useState } from 'react'
import type { FormEvent } from 'react'
import AuthLayout from '../../components/AuthLayout/AuthLayout'
import Input from '../../components/Input/Input'
import Botao from '../../components/Botao/Botao'
import Icon from '../../components/Icon/Icon'
import CpfCnpjMask from '../../components/CpfCnpjMask/CpfCnpjMask'

// Todos os campos do formulário num único objeto
interface DadosCadastro {
  nome: string
  cpf: string
  nascimento: string
  email: string
  login: string
  senha: string
  confirmarSenha: string
}

const FORMULARIO_VAZIO: DadosCadastro = {
  nome: '', cpf: '', nascimento: '', email: '', login: '', senha: '', confirmarSenha: '',
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
    // CPF completo = 11 dígitos (a máscara adiciona pontos/traço automaticamente)
    if (dados.cpf.replace(/\D/g, '').length !== 11) {
      setErro('CPF incompleto.')
      return
    }
    if (dados.senha.length < 8) {
      setErro('A senha deve ter pelo menos 8 caracteres.')
      return
    }
    if (dados.senha !== dados.confirmarSenha) {
      setErro('As senhas não coincidem.')
      return
    }

    // TODO: enviar "dados" para a API (ex.: fetch('/api/usuarios', { method: 'POST', ... })).
    setErro('')
    window.location.hash = '#/login' // volta para o login depois de cadastrar
  }

  return (
    <AuthLayout titulo="Cadastro de Usuário">
      <form className="auth-form" onSubmit={aoEnviar}>
        <Input
          variante="auth"
          label="Nome"
          placeholder="Digite seu nome"
          tipo="text"
          nome="nome"
          valor={dados.nome}
          aoMudar={(valor) => atualizar('nome', valor)}
          autoComplete="name"
        />

        <div className="input-txt input-auth">
          <label htmlFor="cpf">CPF</label>
          <CpfCnpjMask tipo="cpf" value={dados.cpf} onChange={(valor) => atualizar('cpf', valor)} />
        </div>

        <Input
          variante="auth"
          label="Data De Nascimento"
          placeholder="Selecione sua data de nascimento"
          tipo="date"
          nome="nascimento"
          valor={dados.nascimento}
          aoMudar={(valor) => atualizar('nascimento', valor)}
        />

        <Input
          variante="auth"
          label="Email"
          placeholder="Digite seu e-mail"
          tipo="email"
          nome="email"
          valor={dados.email}
          aoMudar={(valor) => atualizar('email', valor)}
          autoComplete="email"
        />

        <Input
          variante="auth"
          label="Login"
          placeholder="Crie um login"
          tipo="text"
          nome="login"
          valor={dados.login}
          aoMudar={(valor) => atualizar('login', valor)}
          autoComplete="username"
        />

        <Input
          variante="auth"
          label="Senha"
          placeholder="Crie uma senha"
          tipo="password"
          nome="senha"
          valor={dados.senha}
          aoMudar={(valor) => atualizar('senha', valor)}
          autoComplete="new-password"
          mostrarOcultarSenha
        />

        <Input
          variante="auth"
          label="Confirmar Senha"
          placeholder="Digite a senha novamente"
          tipo="password"
          nome="confirmarSenha"
          valor={dados.confirmarSenha}
          aoMudar={(valor) => atualizar('confirmarSenha', valor)}
          autoComplete="new-password"
          mostrarOcultarSenha
        />

        {erro && <p className="auth-erro">{erro}</p>}

        <Botao tipo="submit" variante="auth" texto="Cadastrar" icone={<Icon nome="userPlus" tamanho={16} />} />

        <p className="auth-link">
          Já tem conta? <a href="#/login">Entrar</a>
        </p>
      </form>
    </AuthLayout>
  )
}

export default Cadastro
