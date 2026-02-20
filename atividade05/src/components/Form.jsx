import "./Form.css"
import { useState } from "react"
import Button from "../components/Button"

const Form = () => {

  // Estados
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [idade, setIdade] = useState("")
  const [telefone, setTelefone] = useState("")
  const [pais, setPais] = useState("")
  const [bio, setBio] = useState("")
  const [funcao, setFuncao] = useState("Usuário")
  const [senha, setSenha] = useState("")
  const [termos, setTermos] = useState(false)

  const [erro, setErro] = useState("")
  const [sucesso, setSucesso] = useState("")

  // Função para limpar formulário
  const resetForm = () => {
    setNome("")
    setSobrenome("")
    setEmail("")
    setIdade("")
    setTelefone("")
    setPais("")
    setBio("")
    setFuncao("Usuário")
    setSenha("")
    setTermos(false)
  }

  // Envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault()

    setErro("")
    setSucesso("")

    if (!nome.trim()) {
      setErro("Nome é obrigatório.")
      return
    }

    if (!email.trim()) {
      setErro("Email é obrigatório.")
      return
    }

    if (senha.length < 6) {
      setErro("Senha deve ter no mínimo 6 caracteres.")
      return
    }

    if (!termos) {
      setErro("Você precisa aceitar os termos.")
      return
    }

    setSucesso("Cadastro realizado com sucesso!")
    resetForm()
  }

  return (
    <div className="container">
      <h1>Cadastro de Usuário</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="text"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <input
          type="text"
          placeholder="País"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />

        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <select
          value={funcao}
          onChange={(e) => setFuncao(e.target.value)}
        >
          <option>Usuário</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className="checkbox">
          <input
            type="checkbox"
            checked={termos}
            onChange={(e) => setTermos(e.target.checked)}
          />
          <label>Aceitar termos</label>
        </div>

        {erro && <p className="erro">{erro}</p>}
        {sucesso && <p className="sucesso">{sucesso}</p>}

        <Button
          text="Enviar Cadastro"
          type="submit"
          disabled={!termos}
        />

        <Button
          text="Limpar"
          type="button"
          onClick={resetForm}
        />

      </form>
    </div>
  )
}

export default Form