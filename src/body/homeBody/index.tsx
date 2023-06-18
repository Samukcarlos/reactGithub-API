import { Link} from "react-router-dom";
import './style.css';

export default function HomeBody(){
    return(   
        <>       
            
           <main>
            <section>
                <h2>Desafio Github API</h2>
                <h3>DevSuperior - Escola de programação</h3>
            </section>
            </main>
            <div className='button-styles'>
            
            <Link to="perfil">
                    <button type='submit'>Começar</button>
            </Link>
            </div>
          
        
            
            </>  
            
    )
}