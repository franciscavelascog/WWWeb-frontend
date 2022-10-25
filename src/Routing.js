import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './views/landingpage';
import Explicacion from './views/explicacion';
import About from './views/about';
import Nosotros from './views/nosotros';
import ContactUs from './views/contactanos';
import Register from './views/register';
import Juego from './views/juego';

function Routing (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<LandingPage/>}/>
                <Route path={'/views/explicacion'} element={<Explicacion/>}/>
                <Route path={'/views/about'} element={<About/>}/>
                <Route path={'/views/nosotros'} element={<Nosotros/>}/>
                <Route path={'/views/contactanos'} element={<ContactUs/>}/>
                <Route path={'/views/register'} element={<Register/>}/>
                <Route path={'/views/juego'} element={<Juego/>}/>
            </Routes>
        </BrowserRouter>
    )
    
}

export default Routing;