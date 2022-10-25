import NavBar from "../components/navbar";
import Footer from "../components/footer";

function Register(props){
    return (
        <div>
            <NavBar />
            <div class="container_register">
                <h1 id="titulo_register">REGISTRARSE</h1>
                <p id="alerta"></p>
                <div class="container_resumen">
                    <form>
                        <label for="fname">Nombres:</label>
                        <input type="text" placeholder="Ingresar nombres" id="nombres" name="fname"></input>
                        <label for="lname">Apellidos:</label>
                        <input type="text" placeholder="Ingresar apellidos" id="apellidos" name="lname"></input>
                        <label for="lname">Usuario:</label>
                        <input type="text" placeholder="Ingresar nombre de usuario" id="usuario" name="lname"></input>
                        <label for="mail">Mail:</label>
                        <input type="text" placeholder="Ingresar mail válido" id="mail" name="mail"></input>
                        <label for="lname">Contraseña:</label>
                        <input type="password" placeholder="Ingresar contraseña" id="contraseña" name="lname"></input>
                        <label for="lname">Verificar Contraseña:</label>
                        <input type="password" placeholder="Repetir contraseña" id="ver_contra" name="lname"></input>
                    </form>
                    <div class="div_btn">
                        <button class="btn_submit" onclick="verificar_reg()"> SUBMIT </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Register;

