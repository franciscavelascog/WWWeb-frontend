import NavBar from "../components/navbar";
import Footer from "../components/footer";
import github from "../imgs/github.jpg";

function Nosotros(props){
    return (
        <div>
            <NavBar />
            <div class="container">
                <h1 id="titulo">NOSOTROS</h1>
                <div class="container_resumen">
                    <p id="resumen"> Somos un grupo de estudiantes de la carrera de Ingeniería en la Pontificia Universidad Católica de Chile, cursando el ramo 
                        Tecnologías y Aplicaciones Web (IIC2513). Dentro de este marco, nuestro equipo WWWeb conformado por Julio Huerta, Francisca Velasco e Ignacio Vial, desarolló el juego Hexagonía.
                    </p>
                </div>
            </div>
            <div>
                <div class="grid-container2">
                        <div class="grid-item3">
                            <img class="julio"/>
                        </div>
                        <div class="grid-item2">
                            <p class="nombres">Julio Huerta</p>
                            <div class="github">
                                <img src={github} width="25"/>
                                <a class="link_github" href="https://github.com/Julius9">@Julius9</a>
                                
                            </div>
                            <p class="resumen_txt">
                                <ul>
                                    <li>Estudiante de tercer año de College</li>
                                    <li>Major en Ingeniería de Software</li>
                                    <li>Minor en Ingeniería Industrial</li>
                                    <li>Minor en Psicología</li>
                                </ul>
                            </p>
                        </div>
                        <div class="grid-item3">
                            <img class="francisca"/>
                        </div>
                        <div class="grid-item2">
                            <p class="nombres">Francisca Velasco</p>
                            <div class="github">
                                <img src={github} width="25"/>
                                <a class="link_github" href="https://github.com/franciscavelascog">@franciscavelascog</a>
                            </div>
                                <ul>
                                    <li>Estudiante de quinto año de Ingeniería</li>
                                    <li>Major en Ingeniería Industrial</li>
                                    <li>Minor en Tecnologías de la Información</li>
                                    <li>Diploma en Tecnologías de la Información</li>
                                </ul>
                        </div>
                        <div class="grid-item3">
                            <img class="ignacio"/>
                        </div>
                        <div class="grid-item2">
                            <p class="nombres">Ignacio Vial</p>
                            <div class="github">
                                <img src={github} width="25"/>
                                <a class="link_github" href="https://github.com/ignaciovial01">@ignaciovial01</a>
                            </div>
                            <ul>
                                <li>Estudiante de terer año de Ingeniería</li>
                                <li>Major en Ingeniería de Software</li>
                                <li>Minor en Ingeniería Industrial</li>
                            </ul>
                        </div>
                    </div>
                </div>
            <Footer />
            <script src="../../index.js"></script>
        </div>
    )
}
export default Nosotros;

