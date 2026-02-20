import "../components/Form.css"
import { useState } from "react"

const Form = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(""); 
    setEmail("");
    setBio(""); 
    setrole("");

  }

  return (
    <div className="container">
      
      <h1>Form com React</h1>

      <form onSubmit={handleSubmit}>

        <label>
          Nome
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Bio
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>

        <label>
          Função no Sistema
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <button type="submit">Enviar</button>

      </form>

    </div>
  );
};

export default Form;