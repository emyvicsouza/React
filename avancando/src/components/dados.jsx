import React,{useState} from 'react'






const Dados = () => {
    let valor = 10;
    const [anotherNumber,setAnotherNumber] = useState(15);

  return (
    <div>
        <div>
           <p>Valor:{valor}</p>

        <button onClick = {() => (valor = 10)}>
            Mudar Variável
        </button>

        </div>
             <p>Valor:{anotherNumber}</p>

        <button onClick = {() =>  setAnotherNumber(20)}>
            Mudar Valor
        </button>
        <div>


        </div>

    </div>
  )
}

export default Dados