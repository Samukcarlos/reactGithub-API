import { Outlet } from "react-router-dom";


export default function  Nothing(){
    return(
        <>
        <h1>Usuário não encontrado</h1>
        <Outlet />
        </>
    )
}