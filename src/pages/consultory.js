import '../css/stylesheet.css';
import React from 'react';

class Consultory extends React.Component{
render(){
    return(
    <main>
        <h2>Agendar Citas</h2>
        <div className="contenedor citas">
            <div align="center" className="sombra citas-form">
               <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSenvb6M4SGSpzKpskkaCevwiAxagK4RfAMKQmEzKUbr8wzZ9w/viewform?embedded=true" width="75%" height="462" frameBorder="0" marginHeight="0" marginWidth="0">Cargando…</iframe>

            </div>
            <aside class="citas-info sombra">
                <h2>Info</h2>
                <p>In hac habitasse platea dictumst. In tincidunt lacus quis luctus dapibus. Curabitur in dapibus dui, quis accumsan neque. Nunc et mi ut purus gravida accumsan. Sed iaculis ornare lorem et consectetur. Sed cursus tellus et mauris accumsan suscipit. Sed nisi ex, finibus consectetur convallis et, porttitor id libero. Nam vestibulum commodo mi ut tempus. Suspendisse vestibulum enim id massa iaculis bibendum.</p>
            </aside>
        </div>
       
    </main>
    );
}
}

export default Consultory;