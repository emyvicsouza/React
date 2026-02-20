
const nome = "Emily"

const dados = {
    idade: 22,
    job: "Estudante",
}

const skills = ["React", "C#", "JS", "HTML"];

const projects = [
{nome:"Portofólio", tech: "react + CSS", status: "Finalizado"},
{nome:"Lista de Tarefas", tech: "Javascript", status: "Em Andamento"},

]

const TemplateExpression = () => {
  return (
    <div>
        <p>A soma é {2 + 2}</p>
       <h3>Seu nome é: {nome}</h3>
       <p> Sua idade é {dados.idade} anos você é um {dados.trabalho} 

       </p>

       <p>você tem {skills.length}habilidades</p>

       <h4>Habilidades</h4>
       <ul>
        {skills.map ((skills) => (
            <li key= {skill}>{ skill }</li>

        ))}
       </ul>

       <h4>Projetos</h4>
       <ul>
        {projects.map((project) =>(

         <li key={project.name}>
             {project.name} - {project.tech} - {project.status}

        </li> 

        ))}
       </ul>

    </div>
  )
}

export default TemplateExpression