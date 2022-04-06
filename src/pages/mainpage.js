import '../css/stylesheet.css';
import '../css/stylesheet.css';
import React from 'react';

class MainPage extends React.Component{
  render(){
  return (
    <div>
        <main className="contenedor sombra">
            <h2>Nuestros servicios</h2>
            <div className="servicios">
                <section className="servicio">
                    <h3>Venta de productos para tus mascotas</h3>
                    <div className="iconos">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="3" y1="21" x2="21" y2="21" />
                            <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                            <line x1="5" y1="21" x2="5" y2="10.85" />
                            <line x1="19" y1="21" x2="19" y2="10.85" />
                            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                        </svg>
                    </div>
                    

                      <p>Maecenas sem ex, accumsan sit amet sollicitudin ut, ultrices sit amet tellus. Etiam ultrices felis nec molestie tristique. Phasellus mollis lectus a libero consectetur, vel volutpat massa consectetur. Duis id neque sit amet lacus eleifend consectetur nec quis urna. Vivamus ultricies malesuada ex, eu pellentesque massa sagittis eu. Duis non justo eu libero dictum facilisis at sagittis lectus</p>
                </section>

                <section className="servicio">
                    <h3>Consultas Veterinarias</h3>

                    <div className="iconos">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-hospital" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="3" y1="21" x2="21" y2="21" />
                            <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                            <line x1="10" y1="9" x2="14" y2="9" />
                            <line x1="12" y1="7" x2="12" y2="11" />
                        </svg>
                    </div>
                    

                      <p>Maecenas sem ex, accumsan sit amet sollicitudin ut, ultrices sit amet tellus. Etiam ultrices felis nec molestie tristique. Phasellus mollis lectus a libero consectetur, vel volutpat massa consectetur. Duis id neque sit amet lacus eleifend consectetur nec quis urna. Vivamus ultricies malesuada ex, eu pellentesque massa sagittis eu. Duis non justo eu libero dictum facilisis at sagittis lectus</p>
                </section>
            </div>
        </main>
   </div>
  );
  }
}

export default MainPage;
