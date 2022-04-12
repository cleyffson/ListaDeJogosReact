import Jogo from "./componentes/jogo";
import "./assets/css/jogo/index.css"


function App() {
  const jogo1={
    "nome": "god of war",
    "ano": "2005",
    "console": "ps2"
  }
  const jogo2={
    "nome": "cs",
    "ano": "2010",
    "console": "pc"
  }
  const jogo3={
    "nome": "mario",
    "ano": "2015",
    "console": "ps4"
  }
  
  
  const jogos=[jogo1,jogo2,jogo3]
  return (
      <div className="jogos_container">
          {
             jogos.map((jogo, index)=>{
                return <Jogo key={index} jogo={jogo}></Jogo>
              })
          }
      </div>  
    )
}

export default App;
