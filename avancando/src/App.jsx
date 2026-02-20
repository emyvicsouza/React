import './App.css'

import city from './assets/city.jpg'

import Dados from './components/dados'

function App() {


  return (
    <div>
        <h1>Avançando no React </h1>
      <img src= {city} alt ="imagem do assets"/>

      <img src='/img1.jpg' alt="imagem em public"/>

      <Dados/>
      
    </div>
  )
}

export default App