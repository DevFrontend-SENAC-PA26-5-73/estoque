// Tela para cadastro de Fornecedores.
// Segue o mesmo padrão visual do CadastroProduto: título da página, formulário em grade
// (reaproveitando o componente Input) e os botões de ação usando o componente Botao.
// Por enquanto os dados ficam só no estado; quando tiver API, é só trocar os
// console.log por chamadas de fetch.
import { useState } from 'react'
import Input from '../../components/Input/Input'
import Botao from '../../components/Botao/Botao'
import Icon from '../../components/Icon/Icon'
import { ROTAS_CADASTRO } from '../../routes'
import './Produtos.css'

// ----- Máscara de CNPJ: 00.000.000/0000-00 -----
function formatarCnpj(valor: string): string {
  const n = valor.replace(/\D/g, '').slice(0, 14) // só números, no máximo 14
  return n
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
}

// ----- Máscara de telefone: (00) 00000-0000 -----
function formatarTelefone(valor: string): string {
  const n = valor.replace(/\D/g, '').slice(0, 11)
  return n
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
}

interface FormularioFornecedor {
  nome: string
  cnpj: string
  contato: string
  email: string
  telefone: string
  endereco: string
}

const FORMULARIO_VAZIO: FormularioFornecedor = {
  nome: '',
  cnpj: '',
  contato: '',
  email: '',
  telefone: '',
  endereco: '',
}

function CadastroFornecedor() {
  const [formulario, setFormulario] = useState<FormularioFornecedor>(FORMULARIO_VAZIO)

  // Atualiza um campo do formulário e mantém o restante intacto.
  const atualizarCampo = (campo: keyof FormularioFornecedor, valor: string) => {
    setFormulario((atual) => ({ ...atual, [campo]: valor }))
  }

  // Campos obrigatórios para o cadastro.
  const camposObrigatorios = (): string[] => {
    const faltando: string[] = []
    if (!formulario.nome.trim()) faltando.push('Nome / Razão Social')
    if (!formulario.cnpj.trim()) faltando.push('CNPJ')
    if (!formulario.telefone.trim()) faltando.push('Telefone')
    return faltando
  }

  const cadastrar = (e: React.FormEvent) => {
    e.preventDefault()

    const faltando = camposObrigatorios()
    if (faltando.length > 0) {
      window.alert(`Preencha os campos obrigatórios: ${faltando.join(', ')}`)
      return
    }

    // TODO: substituir por POST para a API
    console.log('Fornecedor cadastrado:', formulario)
    window.alert('Fornecedor cadastrado com sucesso!')
    setFormulario(FORMULARIO_VAZIO)
  }

  return (
    <div className="produtos">
      {/* ---------- Título da página ---------- */}
      <div className="pagina-cabecalho">
        <div>
          <h1>Cadastro de Fornecedores</h1>
          <p>Acompanhe o gerenciamento do estoque</p>
        </div>

        {/* Volta para a tela de Produtos (resumo dos cadastros) */}
        <Botao
          href="#/produtos"
          texto="Voltar"
          variante="secundario"
          icone={<Icon nome="arrowRight" tamanho={16} />}
        />
      </div>

      <form className="produto-form" onSubmit={cadastrar}>
        <Input
          label="Nome / Razão Social"
          placeholder="Ex.: Distribuidora Alpha Ltda"
          nome="nome"
          valor={formulario.nome}
          aoMudar={(valor) => atualizarCampo('nome', valor)}
        />

        <Input
          label="CNPJ"
          placeholder="Ex.: 00.000.000/0000-00"
          nome="cnpj"
          valor={formulario.cnpj}
          aoMudar={(valor) => atualizarCampo('cnpj', formatarCnpj(valor))}
        />

        <Input
          label="Pessoa de Contato"
          placeholder="Ex.: Carlos Menezes"
          nome="contato"
          valor={formulario.contato}
          aoMudar={(valor) => atualizarCampo('contato', valor)}
        />

        <Input
          label="Telefone"
          placeholder="Ex.: (91) 90000-0000"
          nome="telefone"
          valor={formulario.telefone}
          aoMudar={(valor) => atualizarCampo('telefone', formatarTelefone(valor))}
        />

        <Input
          label="E-mail"
          placeholder="Ex.: contato@fornecedor.com"
          nome="email"
          valor={formulario.email}
          aoMudar={(valor) => atualizarCampo('email', valor)}
        />

        {/* Endereço ocupa a linha inteira (mesma regra usada na descrição do produto) */}
        <div className="campo-linha-inteira">
          <Input
            label="Endereço"
            placeholder="Ex.: Rua das Flores, 120 - Belém/PA"
            nome="endereco"
            valor={formulario.endereco}
            aoMudar={(valor) => atualizarCampo('endereco', valor)}
          />
        </div>

        {/* ---------- Botões de ação ---------- */}
        <div className="produto-acoes">
          <Botao tipo="submit" texto="Cadastrar" />
          <Botao
            href={`#/${ROTAS_CADASTRO.produto}`}
            texto="Cadastrar Fornecedor"
            variante="secundario"
          />
        </div>
      </form>
    </div>
  )
}

export default CadastroFornecedor
