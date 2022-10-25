import NavButton from './button';

function NavBar(props){
    return (
        <div className="navbar">
            <a href='/'>Home</a>
            <a href='../views/register'>Registrarse</a>
            <a href="#hola">Iniciar Sesión</a>
            <a href='../views/juego'>Jugar</a>
            <div className="dropdown">
                <button className="dropbtn">Hexagonia 
                <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href='../views/explicacion'>Guía y Reglas</a>
                    <a href='../views/about'>Acerca de</a>
                    <a href='../views/nosotros'>Nosotros</a>
                    <a href='../views/contactanos'>Contáctanos</a>
                </div>
            </div> 
        </div>
    )
}

export default NavBar;
