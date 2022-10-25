import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Estado(props){

    
    function mostrarObjetos (){
        //const valor = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        console.log("Objetos");
        //const numero = document.getElementById("numero");
        //console.log("numero", numero.innerHTML);
        //numero.innerHTML= valor;
      }


    const habilidad = async () => {
        const url_put = `${SERVER_URL}/ability/1`;
        await axios.put(url_put);
    }

    return (
        <div className="atributos">
            <div className="grid-container-atributos">
                <div className="grid-item-atributo">
                    <img className="usuario"/>
                </div>
                <div className="grid-item-atributo">
                    <p className="atributo_txt" id="hp">
                        hp: {props.hp}
                    </p>
                    <p className="atributo_txt" id="physical">
                        ataque: {props.ataque}
                    </p>
                    <p className="atributo_txt" id="magic">
                        mag: {props.mag}
                    </p>
                    <p className="atributo_txt" id="armor">
                        armadura: {props.armadura}
                    </p>
                </div>
                <div className="grid-item-atributo">
                    <p className="atributo_txt" id="money">
                        dinero: {props.dinero}
                    </p>
                    <p className="atributo_txt" id="exp">
                        experiencia: {props.exp}
                    </p>
                    <p className="atributo_txt" id="level">
                        nivel: {props.nivel}
                    </p>
                    <p className="atributo_txt" id="relics">
                        esferas: {props.esferas}
                    </p>
                </div>
                <div className="grid-item-atributo">
                    <div className="div_btn">
                        <button className="btn_atributo" onClick={() => mostrarObjetos()}> OBJETOS </button>
                    </div>
                    <div className="div_btn">
                        <button className="btn_atributo" onClick={() => habilidad()}> HABILIDAD </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Estado;