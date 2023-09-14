import { Link } from "react-router-dom"
import Cabecalho from "./Cabecalho"

export default function Lista(){
    return(
        <>
        
            
            <Cabecalho>        
                    <li><Link to='/'>Incio</Link> </li>
                    <li><Link to='/aparelhos'>Aparelhos</Link> </li>
                    
            </Cabecalho>
            
        </>
    )
}