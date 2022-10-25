import NavBar from "../components/navbar";
import Footer from "../components/footer";

function About(props){
    return (
        <div>
            <NavBar />
            <h1 id="titulo">ACERCA DE</h1>
            <div class="grid-container-about">
                <div class="container_proyecto_1">
                    <p class="texto_about"> Hexagonia es un juego multijugador de tablero hexagonal por turnos. En este, eres un Héroe que debe ir descubriendo el mapa para conseguir recompensas. 
                        El objetivo es ser el último jugador en pie o derrotar al Dragón que se encuentra al centro del tablero.
                    </p>
                    <p class="texto_about"> El juego aún se encuentra en su etapa inicial y no es jugable actualmente. Se espera poder lanzar una primera versión entes de que termine el presente año. 
                        Por el momento, puedes visitar la página de "reglas de juego" para tener a mano todo lo que necesites saber y así poder probarlo inmediatamente cuando este disponible.
                    </p>
                </div>
                <div class="container_proyecto_1">
                    <p class="texto_about">
                        Este es un proyecto del ramo "Tecnologías y Aplicaciones Web" - IIC2513 y fue creado con el fin de poner a prueba lo aprendido durante el semestre. 
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;