import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import './style.css'


export default function  Body(){

    

    type FormData = {
        perfilGithub: string; 
    }

    const [formData, setFomData] = useState<FormData>({

        perfilGithub: ''
    });

    function handlePerfilGitChange(event: any){
        setFomData({...formData, perfilGithub: event.target.value})
    }

    return(
        <>
        <main>
        <section>
            <div>
        <h2>Encontre seu perfil no Github</h2>
        </div>
        <div>
        <input 
        name="perfilGit"
        value={formData.perfilGithub}
        type="text" 
        placeholder="Usuário Github"
        onChange={handlePerfilGitChange}
        />
        
        </div>
           <div className="buttonStyles">
            <Link to="git">
                    <button type='submit'>Começar</button>
            </Link>
            </div>
            
        </section>
        <Outlet />
        
        </main>
        
                  
        </>
    )
}