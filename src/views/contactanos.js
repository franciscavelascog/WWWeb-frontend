import NavBar from "../components/navbar";
import Footer from "../components/footer";

function ContactUs(props){
    return (
        <div>
            <NavBar />
            <div className="grid-container-contact">
                <h1 id="titulo-contact">¡CONTÁCTANOS!</h1>
                <p id="alerta"></p>
                <div className="container-form-contact">
                    <label className="label-contact">Nombre:</label>
                    <input id="nombreContact" className="input-contact" placeholder="Ingresar nombre"></input>
                    <label className="label-contact">Mail:</label>
                    <input id="emailContact" className="input-contact" placeholder="Ingresar email válido"></input>
                    <label className="label-contact">Mensaje:</label>
                    <textarea id="mensajeContact" className="input-contact" rows="10" cols="40" placeholder="Escribe aquí tus comentarios"></textarea>
                    <button className="boton-submit-contact" onclick="enviarContact()" >ENVIAR</button>
                </div>
            </div>
            <Footer />
            <script src="../../index.js"></script>
        </div>
        
    )
}
export default ContactUs;

