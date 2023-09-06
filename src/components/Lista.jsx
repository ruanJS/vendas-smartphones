import { Link } from "react-router-dom"
import Cabecalho from "./Cabecalho"

export default function Lista(){
    return(
        <>
        
            
            <Cabecalho>        
                    <li><Link to='/'>Incio</Link> </li>
                    <li><Link to='/aparelho'>Aparelhos</Link> </li>
                    
            </Cabecalho>
            
        </>
    )
}