import "../../assets/css/jogo/index.css"
function Jogo({jogo}){
    return(
        <div className="jogo_container"> 
            <p className="jogo_descricao">nome: {jogo.nome}</p>
            <p className="jogo_descricao">ano: {jogo.ano}</p>
            <p className="jogo_descricao">console: {jogo.console}</p>
        </div>
    )
}
export default Jogo