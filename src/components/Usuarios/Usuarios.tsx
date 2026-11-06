import { useState, useEffect } from 'react'
import './Usuarios.css'


interface Usuario {
  id: number
  nome: string
  email: string
}

function Usuarios() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        setCarregando(true)
        setErro(null)

        const resposta = await fetch('http://localhost:3000/usuarios')

        if (!resposta.ok) {
          throw new Error(`Erro ${resposta.status}`)
        }

        const dados: Usuario[] = await resposta.json()
        setUsuarios(dados)
      } catch (e) {
        setErro(e instanceof Error ? e.message : 'Erro desconhecido')
      } finally {
        setCarregando(false)
      }
    }

    buscarUsuarios()
  }, [])

  if (carregando) return <p>Carregando usuários...</p>
  if (erro) return <p>Erro: {erro}</p>
  if (usuarios.length === 0) return <p>Nenhum usuário encontrado.</p>

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>
      <ul className="lista-usuarios">
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} — {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Usuarios