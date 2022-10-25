import NavBar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/estilos.css';
import mapa from "../imgs/mapa.png";

function LandingPage(props){
        return (
                <div className="container">
                        <NavBar/>
                        <div className="inicio">
                                <h1 id="titulo_inicio">HEXAGONIA</h1>
                        </div>
                        <div>
                                <h1 id="titulo">¡QUE COMIENCE EL JUEGO!</h1>
                                <div className="container_resumen">

                                        <p id="resumen">El juego consiste en descubrir los caminos de un mapa de hexagonos ocultos 
                                        a través del movimiento. Consigue recursos hasta poder enfrentar al enemigo final, 
                                        ¡pero cuidado! Debes ser eficiente para llegar a este antes que tus enemigos y conseguir 
                                        la victoria! Adelante, comienza escogiendo tu personaje favorito y ¡aventúrate en el mapa!</p>

                                        <img src={mapa} width="400"/>
                                </div>   
                        </div>
                        <h1 id="titulo">PERSONAJES</h1>
                        <div className="grid-container">
                                <div className="grid-item">
                                        <img className="picaro"/>
                                        <p className="personaje">PICARO</p>
                                        <p className="personaje_txt">Personaje débil y daño a distancia. Su habilidad puede ser hacerse invisible y tener una probabilidad de devolver un golpe.</p>
                                </div>
                                <div className="grid-item">
                                        <img className="arquero"/>
                                        <p className="personaje">ARQUERO</p>
                                        <p className="personaje_txt">Personaje de poca vida y daño a distancia. Su habilidad puede ser una flecha que ignore parte de la armadura y habilidad pasiva que pueda moverse una casilla más por turno.</p>
                                </div>
                                <div className="grid-item">
                                        <img className="hielo"/>
                                        <p className="personaje">MAGO DE HIELO</p>
                                        <p className="personaje_txt">Habilidad lluvia de granizo en área.(Puede ser más tanque que los otros magos). Habilidad pasiva los enemigos cerca de él se pueden mover menos casillas (simulando que son más lentos)</p>
                                </div>
                                <div className="grid-item">
                                        <img className="fuego"/>
                                        <p className="personaje">MAGO DE FUEGO</p>
                                        <p className="personaje_txt">Habilidad cono de fuego que aplica quemadura. La habilidad pasiva puede descubrir más terreno.</p>
                                </div>
                        </div>
                        <div className="grid-item">
                                <a href="../views/register">
                                        <button className="btn_registrate" id="b3"> REGISTRATE </button>
                                </a>
                        </div>
                        <Footer />
                </div>
        )
}

export default LandingPage;