import  ReactDOM  from "react-dom";

import MenuTopo from "./Componentes/MenuTopo";
import SeparadorHeader from "./Componentes/SeparadorHeader";
import Conteudo from "./Componentes/Conteudo";
function App(){
    return(
    <div>
        <MenuTopo />
        <SeparadorHeader />
        <Conteudo />
    </div>

    )
}

ReactDOM.render(<App />, document.querySelector(".root"));