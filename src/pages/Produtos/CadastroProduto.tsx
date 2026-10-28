// Tela para cadastro de Produtos.
// Os campos seguem a seguinte ordem: nome, descrição, código de barras, quantidade,
// data de vencimento, lote, localização, corredor, prateleira, nível, posição,
// fornecedor (dropdown com os fornecedores cadastrados) e status (ativo/inativo).
// Por enquanto os dados ficam só no estado; quando tiver API, é só trocar os
// console.log por chamadas de fetch.
import { useState } from 'react'
import Input from '../../components/Input/Input'
import { FORNECEDORES } from '../../data/mock'
import './Produtos.css'

// Formato do formulário: toda string (inputs guardam texto), exceto o status
// que tem só os dois valores possíveis.
type StatusProduto = 'ativo' | 'inativo'

interface FormularioProduto {
  nome: string
  descricao: string
  codigoBarras: string
  quantidade: string
  dataVencimento: string
  lote: string
  localizacao: string
  corredor: string
  prateleira: string
  nivel: string
  posicao: string
  fornecedor: string
  status: StatusProduto
}

const FORMULARIO_VAZIO: FormularioProduto = {
  nome: '',
  descricao: '',
  codigoBarras: '',
  quantidade: '',
  dataVencimento: '',
  lote: '',
  localizacao: '',
  corredor: '',
  prateleira: '',
  nivel: '',
  posicao: '',
  fornecedor: '',
  status: 'ativo',
}

function Produtos() {
  const [formulario, setFormulario] = useState<FormularioProduto>(FORMULARIO_VAZIO)

  // Atualiza um campo do formulário e mantém o restante intacto.
  const atualizarCampo = (campo: keyof FormularioProduto, valor: string) => {
    setFormulario((atual) => ({ ...atual, [campo]: valor }))
  }

  // Campos obrigatórios para o cadastro (o rascunho aceita o formulário incompleto).
  const camposObrigatorios = (): string[] => {
    const faltando: string[] = []
    if (!formulario.nome.trim()) faltando.push('Nome do Produto')
    if (!formulario.quantidade.trim()) faltando.push('Quantidade')
    if (!formulario.fornecedor) faltando.push('Fornecedor')
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
    console.log('Produto cadastrado:', formulario)
    window.alert('Produto cadastrado com sucesso!')
    setFormulario(FORMULARIO_VAZIO)
  }

  const salvarRascunho = () => {
    // TODO: substituir por POST/salvamento local do rascunho
    console.log('Rascunho salvo:', formulario)
    window.alert('Rascunho salvo com sucesso!')
  }

  return (
    <div className="produtos">
      {/* ---------- Título da página ---------- */}
      <div className="pagina-cabecalho">
        <div>
          <h1>Cadastro de Produtos</h1>
          <p>Acompanhe o gerenciamento do estoque</p>
        </div>
      </div>

      <form className="produto-form" onSubmit={cadastrar}>
        <Input
          label="Nome do Produto"
          placeholder="Ex.: Mouse Logitech"
          nome="nome"
          valor={formulario.nome}
          aoMudar={(valor) => atualizarCampo('nome', valor)}
        />

        <Input
          label="Descrição"
          placeholder="Breve descrição do produto"
          nome="descricao"
          valor={formulario.descricao}
          aoMudar={(valor) => atualizarCampo('descricao', valor)}
        />

        <Input
          label="Código de Barras"
          placeholder="Ex.: 7891234567890"
          nome="codigoBarras"
          valor={formulario.codigoBarras}
          aoMudar={(valor) => atualizarCampo('codigoBarras', valor)}
        />

        <Input
          label="Quantidade"
          placeholder="Ex.: 10"
          nome="quantidade"
          tipo="number"
          valor={formulario.quantidade}
          aoMudar={(valor) => atualizarCampo('quantidade', valor)}
        />

        <Input
          label="Data de Vencimento"
          placeholder=""
          nome="dataVencimento"
          tipo="date"
          valor={formulario.dataVencimento}
          aoMudar={(valor) => atualizarCampo('dataVencimento', valor)}
        />

        <Input
          label="Lote"
          placeholder="Ex.: L2026-001"
          nome="lote"
          valor={formulario.lote}
          aoMudar={(valor) => atualizarCampo('lote', valor)}
        />

        <Input
          label="Localização"
          placeholder="Ex.: Depósito A"
          nome="localizacao"
          valor={formulario.localizacao}
          aoMudar={(valor) => atualizarCampo('localizacao', valor)}
        />

        <Input
          label="Corredor"
          placeholder="Ex.: 03"
          nome="corredor"
          valor={formulario.corredor}
          aoMudar={(valor) => atualizarCampo('corredor', valor)}
        />

        <Input
          label="Prateleira"
          placeholder="Ex.: B"
          nome="prateleira"
          valor={formulario.prateleira}
          aoMudar={(valor) => atualizarCampo('prateleira', valor)}
        />

        <Input
          label="Nível"
          placeholder="Ex.: 2"
          nome="nivel"
          valor={formulario.nivel}
          aoMudar={(valor) => atualizarCampo('nivel', valor)}
        />

        <Input
          label="Posição"
          placeholder="Ex.: 05"
          nome="posicao"
          valor={formulario.posicao}
          aoMudar={(valor) => atualizarCampo('posicao', valor)}
        />

        {/* ---------- Fornecedor: dropdown com os fornecedores cadastrados ---------- */}
        <div className="input-txt">
          <label htmlFor="fornecedor">Fornecedor</label> <br />
          <select
            id="fornecedor"
            name="fornecedor"
            value={formulario.fornecedor}
            onChange={(e) => atualizarCampo('fornecedor', e.target.value)}
          >
            <option value="">Selecione um fornecedor</option>
            {FORNECEDORES.map((fornecedor) => (
              <option key={fornecedor.id} value={String(fornecedor.id)}>
                {fornecedor.nome}
              </option>
            ))}
          </select>
        </div>

        {/* ---------- Status: ativo ou inativo ---------- */}
        <div className="input-txt">
          <label htmlFor="status">Status</label> <br />
          <select
            id="status"
            name="status"
            value={formulario.status}
            onChange={(e) => atualizarCampo('status', e.target.value)}
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>

        {/* ---------- Botões de ação ---------- */}
        <div className="produto-acoes">
          <button type="submit" className="botao">Cadastrar</button>
          <button type="button" className="botao botao-secundario" onClick={salvarRascunho}>
            Salvar como Rascunho
          </button>
        </div>
      </form>
    </div>
  )
}

export default Produtos
