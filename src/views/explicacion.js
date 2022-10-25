import NavBar from "../components/navbar";
import Footer from "../components/footer";
import mapa_avanzado from "../imgs/mapa_avanzado.png";
import dados from "../imgs/dados.png";
import clases from "../imgs/clases.png";
import cartas from "../imgs/cartas.png";
import objetos from "../imgs/objetos.png";
import esferas from "../imgs/esferas.png";
import batalla from "../imgs/batalla.png";
import playervs from "../imgs/playervs.png";
import enemigos from "../imgs/enemigos.png";
import hex_dragon from "../imgs/hexagono_dragon.png";
import dragon_der from "../imgs/dragon_der.gif";

function Explicacion(props){
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="container_resumen">
                    <h1 id="titulo">GUÍA Y REGLAS</h1>
                    <p id="resumen"> 
                    Hexagonia es un juego de descubrimiento y supervivencia. Tu misión será avanzar por los casilleros ocultos para recolectar 
                    recursos y así sobrevivir el ataque de enemigos y otros jugadores. Conforme avances en la partida podras fortalecerte hasta lograr
                    desafiar al temible Dragón y poder ganar la partida!
                    </p>
                </div>
            </div>

            
            <section className="flexible">
                <article className="large_left">
                    <h3 className="titulos_txt">El Mapa</h3>
                    <p className="explicacion_txt">
                    El mapa basico de hexagonia es un gran hexagono compuesto de casillas en forma de pequeños hexagonos (hexagonolocura!). 
                    Estos Hexagonos comienzan ocultos al inico de la partida y debes ir recorriendolos para encontrar recursos, esto te permitirá subir de
                    nivel y armarte mejor! Pero cuidado... tambien hay enemigos cerca, por lo cual deberas derrotarlos para sobrevivir y poder enfrentar
                    al temido Dragón!

                    <p className="explicacion_txt">
                    Existen hexagonos de tipo:
                    <ul className="lista">
                    <li> Dinero </li>
                    <li> Experiencia </li>
                    <li> Objetos </li>
                    <li> Enemigos </li>
                    <li> Cartas </li>
                    <li> Esferas del Dragón </li>
                    <li> Dragón </li>
                    </ul>
                    </p>
                    </p>
                </article>

                <article className="small_right">
                    <img src={mapa_avanzado} width="600"/>
                </article>
            </section>


            
            <section className="flexible">
                <article className="small_left">
                    <img src={dados} width="300"/>
                </article>

                <article className="large_right">
                    <h3 className="titulos_txt">Exploración</h3>
                    <p className="explicacion_txt">
                    Para explorar el mapa debes lanzar un dado, el cual indicará el número de hexagonos que puedes avanzar, revelando
                    el hexagono en que caigas. Al revelarse obtendrás el efecto de inmediato según el tipo de casilla, ya sea una recompensa, un objeto o carta,
                    o un enfrentamiento contra un enemigo... o incluso un enfrentamiento contra otro jugador!!
                    </p>
                </article>
            </section>

            
            <section className="flexible">
                <article className="large_left">
                    <h3 className="titulos_txt">Pero antes... debes escoger tu Personaje!</h3>
                    <p className="explicacion_txt">
                        El personaje es el que avanzará a través del mapa. Existen distintas clases de personajes, los cuales se diferencian por sus particulares caracteristicas como
                        puntos de vida máximos, puntos de ataque físico y mágico, probabilidad de golpe crítico, armadura física y resistencia mágica. Además, cada tipo de personaje
                        posee una habilidad especial adicional la cual puede ser activada después de descubrir una cierta cantidad de hexagonos. 
                        <p className="explicacion_txt">
                            Los personajes pueden ser:
                            <ul>
                            <li> Arquero: Comienza a atacar antes, pero tiene menos vida </li>
                            <li> Tanque: Resiste mucho, pero pega poco </li>
                            <li> Mago de Fuego: Pega mucho, pero resiste poco </li>
                            <li> Mago de Hielo: Equilibrado, además relentiza a sus rivales </li>
                            <li> Picaro: Equilibrado, ádemas esquiva ataques </li>
                            </ul>
                        </p>
                    </p>
                </article>

                <article className="small_right">
                    <img src={clases} width="500"/>
                </article>
            </section>


            <section className="flexible">
                <article className="small_left">
                    <img src={cartas} width="400"/>
                </article>

                <article className="large_right">
                    <h3 className="titulos_txt">Cartas de Fortuna</h3>
                    <p className="explicacion_txt">
                    A lo largo de la partida, puedes ir encontrando cartas de fortuna; las cuales te pueden beneficiar o 
                        perjudicar durante del juego. Entre sus efectos positivos se encuentran un botín de oro o experiencia,
                        iluminar zonas del mapa, robarle experiencia u oro a otro jugador, mandar a un jugador a su casilla de inicio, etc.
                        Mientras que sus efectos negativos son perder experiencia u oro, recibir daño, volver a la casilla de inicio, entre otros.
                    </p>
                </article>
            </section>

  
            <section className="flexible">
                <article className="large_left">
                    <h3 className="titulos_txt">Objetos</h3>
                    <p className="explicacion_txt"> 
                        Conforme vayas avanzando en el mapa, por medio de cartas o vencer enemigos, irás encontrando objetos. Estos mejoran los atributos
                        de tu personaje para que puedan tener más vida base, ataque físico, ataque mágico, probabilidad de crítico, armadura física y resistencia mágica.
                        Aunque el efecto no es permanente, una vez perdido o desechado el objeto, también perderás los puntos de mejora. Por último, conforme avance la partida
                        podrás encontrar cada vez mejores objetos.

                    </p>
                </article>

                <article className="small_right">
                    <img src={objetos} width="500"/>
                </article>
            </section>


            
            <section className="flexible">
                <article className="small_left">
                    <img src={esferas} width="300"/>
                </article>

                <article className="large_right">
                    <h3 className="titulos_txt">Esferas del Dragón</h3>
                    <p className="explicacion_txt"> 
                        Además de objetos y cartas, puedes recolectar unas reliquias especiales llamadas "esferas del Dragón" siendo estas un total
                        de 5. Aquel jugador que recolecte todas las esferas, tiene el derecho a pedir un deseo... el cual es escoger uno de entre tres 
                        objetos raros y muy poderosos, el cual además implica una bonificación de daño en la pelea final contra el Dragón.
                    </p>
                </article>
            </section>


            
            <section className="flexible">
                <article className="large_left">
                    <h3 className="titulos_txt">Enfretamientos</h3>
                    <p className="explicacion_txt"> 
                        A lo largo de la partida puedes enfrentarte a otros jugadores, enemigos o al Dragón. En todas estas el sistema de combate es el mismo:
                        Ataca primero el jugador que inico el enfrentamiento y luego el contrincante. Sucesivamente se atacan hasta que uno de los dos pierde toda su vida, 
                        entonces se decide un ganador y un perdedor, en caso de que el jugador sea el perdedor, este pierde una vida y vuelve a su casilla de inicio.
                    </p>
                </article>

                <article className="small_right">
                    <img src={batalla} width="250"/>
                </article>
            </section>


            
            <section className="flexible">
                <article className="small_left">
                    <img src={playervs} width="250"/>
                </article>

                <article className="large_right">
                    <h3 className="titulos_txt">Vs otro jugador</h3>
                    <p className="explicacion_txt"> 
                        Al enfrentar a otro jugador y salir victorioso, el ganador le arrebatará sus puntos de oro, experiencia y esferas del Dragón al jugador perdedor.
                        Además, el perdedor perderá una vida y volverá a su casilla de inicio.
                    </p>
                </article>
            </section>


            
            <section className="flexible">
                <article className="large_left">
                    <h3 className="titulos_txt">Enemigos</h3>
                    <p className="explicacion_txt"> 
                        Al caer en un hexagono, este puede ser de un enemigo del mapa, lo cual inicia un cambate automáticamente entre ellos.
                        Existen tres tipos de enemigos; los esqueletos más débiles, el duende de dificultad media y el demonio, el más difícil entre
                        los 3. Al vencerlos se obtienen bonificaciones extra de experiencia y oro.
                    </p>
                </article>

                <article className="small_right">
                    <img src={enemigos} width="500"/>
                </article>
            </section>


            
            <section className="flexible">
                <article className="small_left">
                    <img src={hex_dragon} width="300"/>
                </article>

                <article className="large_right">
                    <h3 className="titulos_txt">El Dragón</h3>
                    <p className="explicacion_txt"> 
                        Es el jefe final del juego Hexagonia, su hexagono esta revelado desde el comienzo de la partida y esta siempre
                        al centro del mapa. Es el enemigo no jugaable más poderoso que puedes enfrentar y a pesar de que puedes pelear
                        con el desde el principio... si no vas bien preparado, quemará todas tus esperanzas y vidas. Por lo que asegurate de 
                        explorar bien el mapa, para poder subir de nivel y recolectar buenos objetos antes de ir a enfrentarlo
                    </p>
                </article>
            </section>


            
            <section className="flexible">
                <article className="large_left">
                    <h3 className="titulos_txt">¿ Como ganar ?</h3>
                    <p className="explicacion_txt"> 
                        Se puede ganar la partida de dos formas:
                    </p>

                    <ol className="lista_num">
                        <p className="explicacion_txt"> 
                            <li> Venciendo al Dragón: al salir victorioso de la batalla contra el Dragón la partida termina automáticamente y el jugador
                            vencedor es proclamado como el ganador del juego. </li>
                        </p>

                        <p className="explicacion_txt"> 
                            <li>Sobreviviendo: Cuando los demás jugadores van perdiendo enfrentamientos estos pierden una vida y son enviados a
                            su hexagono de inico, al perder todas las vidas el jugador pierde tambien el juego. Cuando solo queda un jugador, este es automaticamente
                            proclamado como el ganador. </li>
                        </p>
                    </ol>


                    
                </article>

                <article className="small_right">
                    <img src={dragon_der} width="500"/>
                </article>
            </section>
            <Footer />
            <script src="../../index.js"></script>
        </div>
    )
}
export default Explicacion;

