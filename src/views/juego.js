import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Tablero from '../components/tablero';
import Estado from '../components/estado';
import '../styles/estilos.css';
import '../styles/tablero.css';
import usuario from "../imgs/usuario.jpg";
import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Juego(props){

function lanzarDados() {
        /*
        const valor = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        console.log("entra?", valor.toString());
        const numero = document.getElementById("numero");
        numero.innerHTML= valor;
        */

}

const estado = async () => {
    const url = `${SERVER_URL}/status/hero/1`;
    await axios.get(url).then(async (response) => {

        const hp = document.getElementById("hp");
        hp.innerText = `hp: ${response.data.hero.hp}` ;

        const physical = document.getElementById("physical");
        physical.innerText = `ataque: ${response.data.hero.physical_damage}` ;

        const magic = document.getElementById("magic");
        magic.innerText = `magia: ${response.data.hero.magic_damage}` ;

        const armor = document.getElementById("armor");
        armor.innerText = `armadura: ${response.data.hero.armor}` ;

        const money = document.getElementById("money");
        money.innerText = `dinero: ${response.data.hero.money}` ;

        const exp = document.getElementById("exp");
        exp.innerText = `experiencia: ${response.data.hero.exp}` ;

        const level = document.getElementById("level");
        level.innerText = `nivel: ${response.data.hero.level}` ;

        const relics = document.getElementById("relics");
        relics.innerText = `esferas: ${response.data.hero.relics}` ;
    }
    )

}


    const position = async () => {
        const url_state = `${SERVER_URL}/status/board_hexagons/1`;
        await axios.get(url_state).then((response) => {
            response.data.forEach((hex) => {
                const hexagono = document.getElementById(`${hex.id}`);
                if (hex.opened === true){
                    hexagono.className = "hexagon_open";
                }

                estado()
            })
        })


        const url_pos = `${SERVER_URL}/status/position/1`;
        await axios.get(url_pos).then((response) => {
            const hexagono = document.getElementById(`${response.data.at.id}`);
            console.log(response);
            hexagono.className = "hexagon_pos";
        }
        )

    }
    
    const moverse = async () => {
        const url = `${SERVER_URL}/dice/1`;
        await axios.get(url).then(async (response) => {
            const numero = document.getElementById("numero");
            console.log(response)
            numero.innerHTML= response.data.dice;

            const hexagono = response.data.possible[Math.floor(Math.random() * response.data.possible.length)];

            const url_put = `${SERVER_URL}/move/1/${hexagono.id}`;
            await axios.put(url_put)
        }
        )
    }


    const moverse_random = async () => {
            const valor = Math.floor(Math.random() * (61 - 1 + 1) + 1);
            const numero = document.getElementById("numero");
            numero.innerHTML= "!?";
            const url_put = `${SERVER_URL}/move/1/${valor}`;
            await axios.put(url_put);
    }


    const habilidad = async () => {
        const url_put = `${SERVER_URL}/ability/1`;
        await axios.put(url_put);
    }


    


    return (
        <div>
            <NavBar></NavBar>
            <div className="container-juego">
                <div className="container_resumen">
                    <h1 id="titulo">BIENVENID@ AL JUEGO</h1>
                </div>
                
                
                <Estado hp="0" ataque="0" mag="0" armadura="0" dinero="0" exp="0" nivel="0" esferas="0"></Estado>
                <section className="flexible">
                    <article className="large_left">
                        <Tablero></Tablero>
                    </article>

                    <article className="small_right">
                        <h3 className="titulos_txt">Es tu turno de lanzar los dados!</h3>
                        <div className="div_btn">
                            <button className="btn_submit" onClick={() => lanzarDados()}> LANZAR DADOS </button>
                        </div>
                        <div className="dado">
                            <h1 id="numero" className="valor_dado">?</h1>
                        </div>
                        <div className="div_btn">
                            <button className="btn_submit" onClick={() => moverse()}> MOVERSE </button>
                        </div>
                        <div className="div_btn">
                            <button className="btn_submit" onClick={() => moverse_random()}> MOVERSE RANDOM </button>
                        </div>
                        <div className="div_btn">
                            <button className="btn_submit" onClick={() => position()}> POSICION </button>
                        </div>
                    </article>
            </section>
                
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Juego;