import '../css/stylesheet.css';
import '../css/normalize.css';
import React from 'react';
import foto from '../resources/images/cute-dog-during-consultation_23-2149314347.jpg';
import { IoLogoFacebook, IoLogoPinterest, IoMdMail, IoLogoInstagram, IoLogoWhatsapp, IoMdPaw} from "react-icons/io";


class AboutUs extends React.Component{
render(){
    return(
    <div class="contenedor nosotros">       
        <div class="nosotros-main sombra">        
            <h2>Sobre Nosotros</h2>
            <div align="center">
                <IoMdPaw class="bigLogo"/>
            </div>
            <p><b>Dr gato</b> es una marca que... Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus natus architecto veniam cupiditate enim quas at placeat similique. Cupiditate alias et aliquam, expedita assumenda deleniti nostrum. Mollitia, asperiores dolorem!</p>
            <p>Desde la administración de Dr gato conocemos lo importante que es tu mascota, por eso queremos brindar a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laudantium et neque animi error vero ratione numquam ipsum consequuntur unde rem corrupti fugit deleniti architecto blanditiis a, quidem ullam itaque.</p>
            <div align="center">
                <img src={foto} alt="señoraPerro"/>
            </div>
            <p>Nuestro equipo está conformado por un selecto y capacitado grupo de veterinarios Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi molestiae, doloremque ipsum sint explicabo, hic repudiandae aspernatur deserunt illum fugiat quos facere dolor magnam quam accusamus aliquid amet corporis est?</p>        
            <p>Nuestros principales servicios son <a href="#">Agendar citas</a> para estar siempre al tanto de la salud de su peludo amigo 
            además de proveer un cuidado especializado en cualquier momento y durante su enfermedad. También puede acceder a nuestro <a href="#">Catálogo de productos </a>
            en el cual podrá encontrar todo lo necesario para... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vero explicabo nulla quam architecto corporis ipsum repudiandae dolorum molestiae vel quidem officiis corrupti porro quisquam perferendis maiores eveniet, adipisci facere? </p>        
        </div>

        <div class="contacto sombra">
            <h3>Información de contacto</h3>
            <p>
                <IoMdMail class="logos"/><b>e-mail:</b> <br/> <a href="mailto:drgato@dr.gato.com">drgato@dr.gato.com</a>
            </p>

            <p>
                <IoLogoFacebook class="logos"/><b>Facebook:</b> <br/> <a href="https://www.facebook.com/AlvaroUribeVel" target="_blank">facebook.com/dr.gato</a> 
            </p>

            <p>
                <IoLogoInstagram class="logos"/><b>Instagram:</b> <br/> <a href="https://www.instagram.com/launion_alianzaverde/?hl=es" target="_blank">instagram.com/dr.gato</a>
            </p>

            <p>
                <IoLogoWhatsapp class="logos"/><b>Whatsapp:</b> <br/> <a href="#">+33 333-333-33-33</a> 
            </p>

            <p>
                <IoLogoPinterest class="logos"/><b>Pinterest:</b> <br/> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">quien usa eso?</a>
            </p>
        </div> 
        <script type="module" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"></script>
    </div>
    );
}
}

export default AboutUs;