
import { BrowserRouter, Navigate,  Route, Routes } from 'react-router-dom';
import './index.css';


import Home from './assets/home';
import HomeBody from './body/homeBody';
import GitBody from './body/GitBody';
import Nothing from './body/Nothing';
import Body from './body';

export default function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home />} >   
      <Route path='/'element={<HomeBody />} />               
              <Route path="*" element={<Nothing />} />
            <Route path="home" element={<HomeBody />} />    
            <Route path="perfil" element={<Body />} > 
                <Route path="git" element={<GitBody />} /> 
                
                <Route path="*" element={<Nothing />} />
                </Route> 
            
                                              
      </Route>
    
    </Routes>
  </BrowserRouter>
  
 );

  
}


