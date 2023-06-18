import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { ProductDTO } from "../../assets/models";
import axios from "axios";
import './styles.css'



export default function GitBody(){


    type FormData = {
        perfilGithub: string; 
    }

    const [formData, setFomData] = useState<FormData>({

        perfilGithub: "Samukcarlos" 
        
    });

        

const params = useParams();

const navigate = useNavigate();

const [product, setProduct] = useState<ProductDTO>();


useEffect(() => {

  axios.get(`https://api.github.com/users/${formData.perfilGithub}`)
    .then(response => {
        setProduct(response.data);
        console.log((String(params.perfilGithub)))
       
        
    })
    .catch(() => {
        navigate("nothing");
    });
 }, []); 
    

    return(
    <>
        
            <div className="imgStyle">

                <img src= {product?.avatar_url}   />
           
            </div>
            <section>
                <h3>
                    Informações
                </h3>
                <div> 
                    Perfil: {product?.login}                     
                </div>
                <div>
                    Seguidores:{product?.followers} 
                </div>
                <div>
                    Localidade:{product?.location} 
                </div>               
                <div>
                    Nome:{product?.name} 
                </div>
            </section>
        
            <Outlet />
    </>
    )

}
