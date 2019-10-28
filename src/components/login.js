import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  
  componentDidMount() {
    const variables_sesion=JSON.parse(localStorage.getItem("constantes"))
    console.log(variables_sesion)
    //localStorage.clear();
    if(variables_sesion.usuario && variables_sesion.clave && variables_sesion.usuario!="" && variables_sesion.clave!=""){
      document.getElementById("id_pass").value = variables_sesion.usuario
      document.getElementById("pass").value = variables_sesion.clave
      document.getElementById("login").click();
      document.getElementById("login").setAttribute("disabled","disabled");
    }else{

    }
  }

  pedirGrupoCandidato(datosLogin){

    //datosLogin.data[4]["grupos"]=["opCER_ivr","opCER_anexo","opCER_web"]
    //this.props.estadoLogin(datosLogin.data[4])
    //console.log(datosLogin)

    //return false;

    const usuario=document.getElementById("id_pass").value;
    const clave=document.getElementById("pass").value;
    /**/
    fetch("https://bs2.openpartner.cl/face", {
          "method": "POST",
          "headers": {
            "content-type": "text/plain"
          },
          "body":  JSON.stringify({
                "tx": "FD0",
                "op":"UG0",
                //"face_user":"3099",
                "face_user":datosLogin.data[4].anexo,
                "ts":"2019-09-14T12:17:00.000"
            })
      })
      .then(res => res.json())
      .then(response => {
          console.log(response);
          //console.log(response.data[4].contraseña+"/"+clave)
          if(response.estatus=="OK"){
              const variables_sesion= JSON.parse(localStorage.getItem("constantes"));
              console.log(variables_sesion)
              variables_sesion.usuario=usuario;
              variables_sesion.clave=clave;
              //variables_sesion["gruposCandidatos"]={};
              localStorage.setItem("constantes", JSON.stringify(variables_sesion));

              datosLogin.data[4]["gruposCandidatos"]=response.grupos
              this.props.estadoLogin(datosLogin.data[4])

          }
      })
      .catch(err => {console.log(err);});
    
    //this.actualizarGruposCandidatos(datosLogin.grupos_candidatos)
    //console.log(datosLogin.grupos_candidatos)
  }

  login= ()=> {

    
    const usuario=document.getElementById("id_pass").value
    const clave=document.getElementById("pass").value
    //console.log(localStorage.getItem("constantes"))
    //return false;

    fetch("https://bsadmin.openpartner.cl/gdm", {
          "method": "POST",
          "headers": {
            "content-type": "text/plain"
          },
          "body":  JSON.stringify({
            "tx": "BS0",
            "query": {
              "query": {
                "bool": {
                  "must": [
                    {
                      "term": {
                        "usuario": usuario
                      }
                    }
                  ]
                }
              }
            }
          })
        })
      .then(res => res.json())
        .then(response => {
          //console.log(response);
          //console.log(response.data[4].contraseña+"/"+clave)
          if(response.estatus=="OK"){

            if(response.data[4].contraseña==clave && response.data[4].usuario==usuario && response.data[4].anexo!=""){
              
              //this.props.estadoLogin(response.data[4])
              //const variables_sesion= JSON.parse(localStorage.getItem("constantes"))
              //variables_sesion.usuario=usuario;
              //variables_sesion.clave=clave;
              //localStorage.setItem("constantes", JSON.stringify(variables_sesion))
              this.pedirGrupoCandidato(response)
            }else{
              //alert("invalido")
               document.getElementById("msj").innerHTML="Datos invalidos";
              
            }

          }
        })
        .catch(err => {
          //console.log(err);
        });
  
  }

  render(){
    if(this.props.tipoLogin=="standar"){
      return ( <div id="log" className="fondo">
              <div className="inicio">
                <div className="logoini"></div>
                <form name="login">
                  <span id="div_login">
                    <div>Inicio de Sesión</div>
                    <input id="id_pass" name="id_pass"  className="form-control form-control-lg" type="text" placeholder="Usuario" />
                    <input id="pass" name="pass" className="form-control form-control-lg" type="password" placeholder="Password"  />
                    <div id="msj" className=""></div>
                    <button type="button" id="login" className="btn btn-success btn-lg btn-block confirma_intencion"  onClick={this.login}>LOGIN</button>
                    <div className="ir_recuperar">¿Olvidaste tu clave?</div>
                  </span>
                  <span id="div_recuperar" style={{display:"none"}}>
                    <div>Regeneración de Clave</div>
                    <input id="Email_olv" name="Email_olv" className="form-control" type="text" placeholder="Ingrese su E-mail" />
                    <div id="msj_olv" className=""></div>
                    <div className="btn-group btn-group-justified" role="group" aria-label="...">
                      <div className="btn-group" role="group">
                        <button type="button" id="login_recuperacion" className="btn btn-success">REGENERAR CLAVE</button>
                      </div>
                    </div>
                    <div className="ir_login">Ir al inicio</div>
                  </span>
                </form>
                <div className="sombra"></div>
               </div>
            </div> ); 
    }else if(this.props.tipoLogin=="face"){
      return ( <div id="log" className="fondo">
              <div className="inicio">
                <div className="logoini"></div>
                <form name="login">
                  <span id="div_login">
                    <div><h1>Bienvenido</h1></div> 
                    <div className="loader"></div> 
                    <input type="hidden" id="agenteID" name="agenteID"  /> 
                    <input type="hidden" id="uniqueid" name="uniqueid"/>  
                    <input type="hidden" id="idcampania" name="idcampania"/>  
                    <input type="hidden" id="id_tarea_llamando" name="id_tarea_llamando"/>  
                    <div><h3 id="msj" className="mensaje_usuario"></h3></div> 
                  </span>
                  
                </form>
                <div className="sombra"><img src="https://cabify.openpartner.cl/openpartner/img/OP.png" width="100" /></div>
               </div>
            </div> ); 
    }
  }
}

export default Login;