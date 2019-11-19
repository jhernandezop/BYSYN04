
import React, { Component } from 'react';
import './Nota.css';

class VerNotas extends Component {
    

  render() {
    return ( 
               
            <div id="contenedorNotas">
                <div className="top">
                    <i className="fas fa-arrow-circle-up"></i>
                    <div className="tituloNota">Proceso y Resultados</div>
                    <div className="detalleNota">Encontraras detalle del estado en el proceso.</div>
                    
                </div>
                <div className="left">
                    <i className="fas fa-arrow-circle-left"></i>
                    <span className="tituloNota" >Casos</span>
                    <div className="detalleNota">Veras los casos asignados.</div>
                </div>
                <div className="right">
                    <span className="tituloNota" >Historia</span>
                    <i className="fas fa-arrow-circle-right"></i>
                    <div className="detalleNota">Recibe un contexto histórico.</div>
                </div>
            </div>
                
        
    );
  }
}
export default VerNotas;

