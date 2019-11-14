import React, { Component } from 'react';
import moment from 'moment';
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';
import './reportes.css';

class ReporteSupervisor extends Component {

  constructor(props) {
    super(props);
    this.state = {  
       desde:moment().format("YYYY-MM-DD"),
       hasta:moment().format("YYYY-MM-DD"),
       rangovwiu:false
     }
     this.verrango=this.verrango.bind(this)
     this.handleSelect=this.handleSelect.bind(this)
  }
  handleSelect(date){
    //console.log(date); // Momentjs object
    //console.log(this.state);
    this.setState({desde:moment(date.startDate._d).format("YYYY-MM-DD")});
    this.setState({hasta:moment(date.endDate._d).format("YYYY-MM-DD")});
    if(date.startDate._d != date.endDate._d){
      //this.verrango();
      this.setState({rangovwiu:false})
    }

  }
  verrango() {
    //console.log("SS")
    this.setState({rangovwiu:true})
    /*this.setState(state => ({
      rangovwiu: !state.rangovwiu
    }));*/
  }

          
  render(){
    const hasta=moment(this.state.hasta).add('days', 1).format("YYYY-MM-DD");
    return ( 
      <div className="col-12 ">
        <div className="row h-100">
          <div type="button"  className="perioreporte">
            <div className={this.state.rangovwiu ? 'display' : 'no-display'}>
              <DateRange 
                
                onChange={this.handleSelect}
              />
            </div>
              <button  type="button" onClick={this.verrango} className="btn btn-secondary btn-lg btn-block">Periodo, desde: {this.state.desde}, hasta: {this.state.hasta}</button>
          </div>
          <iframe src={"https://bs2.openpartner.cl/kibana/s/gildemeister/app/kibana#/dashboard/16f60cf0-04bf-11ea-a4c8-1f1331ad1aa2?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'"+this.state.desde+"T03:00:00.000Z',to:'"+hasta+"T02:59:59.999Z'))&_a=(description:'',filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,field:supervisor,index:cea9dd80-ff0c-11e9-a4c8-1f1331ad1aa2,key:supervisor,negate:!f,params:(query:"+this.props.cargo+"),type:phrase,value:"+this.props.cargo+"),script:(script:(lang:painless,params:(value:"+this.props.cargo+"),source:'boolean%20compare(Supplier%20s,%20def%20v)%20%7Breturn%20s.get()%20%3D%3D%20v;%7Dcompare(()%20-%3E%20%7B%20def%20nombre%3D%20doc%5B!'caso_grupoC.keyword!'%5D.value;%0D%0A%0D%0Aif%20(nombre%3D%3D%20%22WEB_Vitacura:5%22)%20%7Breturn%20%22sup_sv%22%7D%0D%0Aif%20(nombre%3D%3D%20%22WEB_Macul-Aut:5%22)%20%7Breturn%20%22sup_sv%22%7D%0D%0Aif%20(nombre%3D%3D%20%22WEB_Macul-Vic:5%22)%20%7Breturn%20%22sup_sv%22%7D%0D%0Aif%20(nombre%3D%3D%20%22WEB_Alameda:5%22)%20%7Breturn%20%22sup_sv%22%7D%0D%0Aif%20(nombre%3D%3D%20%22WEB_Concepcion:5%22)%20%7Breturn%20%22sup_sv%22%7D%0D%0Aif%20(nombre%3D%3D%20%22WEB_Vi%C3%B1a:5%22)%20%7Breturn%20%22sup_sv%22%7D%0D%0Aif%20(nombre%3D%3D%20%22WEB_Antofagasta:5%22)%20%7Breturn%20%22sup_sv%22%7D%0D%0Aif%20(nombre%3D%3D%20%22WEB_Pudahuel:5%22)%20%7Breturn%20%22sup_sv%22%7D%0D%0Aif%20(nombre%3D%3D%20%22WEB_Cerrillos_Hyu:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22WEB_Cerrillos-Otras:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3586_JefeServ:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3585_JefeInt:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3600_vtaRep:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3601_vtaRep:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3615_vtaRep:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_4939_vtaRep:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3607_sTec:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3611_sTec:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3614_sTec:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3605_sTec:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3603_sTec:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3606_sTec:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3321_vtaHyu:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3590_vtaHyu:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3591_vtaHyu:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_5083_vtaHyu:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_3588_vtaOtras:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_5082_vtaOtras:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_5461_vtaSemi:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22TEL_5467_vtaSemi:5%22)%20%7Breturn%20%22sup_cerrillos%22%7D%0D%0Aif%20(nombre%3D%3D%20%22op_anexo:5%22)%20%7Breturn%20%22sup_open%22%7D%0D%0Aif%20(nombre%3D%3D%20%22op_web:5%22)%20%7Breturn%20%22sup_open%22%7D%0D%0Aif%20(nombre%3D%3D%20%22op_default:5%22)%20%7Breturn%20%22sup_open%22%7D%0D%0A%0D%0Aelse%20%7Breturn%20%22sin%20asignar%22%7D%20%20%7D,%20params.value);')))),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(title:Controladores),gridData:(h:5,i:'79259027-dfa7-45b1-8e1e-7370c2448137',w:24,x:0,y:0),id:b10be5b0-0269-11ea-a4c8-1f1331ad1aa2,panelIndex:'79259027-dfa7-45b1-8e1e-7370c2448137',title:Controladores,type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Tasa%20de%20contactabilidad'),gridData:(h:5,i:'4da5f516-18d5-45f4-82ee-43dbe31cff2d',w:11,x:24,y:0),id:'79b7aee0-00d0-11ea-a4c8-1f1331ad1aa2',panelIndex:'4da5f516-18d5-45f4-82ee-43dbe31cff2d',title:'Tasa%20de%20contactabilidad',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Tasa%20de%20exito'),gridData:(h:5,i:e6846930-72b9-4db2-8767-3a3bafffb357,w:13,x:35,y:0),id:cc68f6d0-00d0-11ea-a4c8-1f1331ad1aa2,panelIndex:e6846930-72b9-4db2-8767-3a3bafffb357,title:'Tasa%20de%20exito',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Casos%20ingresados%20por%20canal'),gridData:(h:4,i:'80cdb862-bfcb-4dd7-9051-921a4f4b6cfd',w:48,x:0,y:5),id:'3f51cf30-0240-11ea-a4c8-1f1331ad1aa2',panelIndex:'80cdb862-bfcb-4dd7-9051-921a4f4b6cfd',title:'Casos%20ingresados%20por%20canal',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Casos%20en%20cola'),gridData:(h:12,i:'965b0d70-c265-4d12-b872-aa1e1cab7e58',w:7,x:0,y:9),id:cc2bb1b0-000a-11ea-a4c8-1f1331ad1aa2,panelIndex:'965b0d70-c265-4d12-b872-aa1e1cab7e58',title:'Casos%20en%20cola',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Casos%20ingresados'),gridData:(h:6,i:'0fb67e3b-dde0-4c5b-aba3-d4edc8293834',w:10,x:7,y:9),id:'91436ec0-00ce-11ea-a4c8-1f1331ad1aa2',panelIndex:'0fb67e3b-dde0-4c5b-aba3-d4edc8293834',title:'Casos%20ingresados',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Histograma%20casos%20ingresados%20y%20gestionados',vis:(legendOpen:!f)),gridData:(h:12,i:'3193d9d4-8962-4098-9da5-bf787f01408f',w:31,x:17,y:9),id:a0d23700-00a0-11ea-a4c8-1f1331ad1aa2,panelIndex:'3193d9d4-8962-4098-9da5-bf787f01408f',title:'Histograma%20casos%20ingresados%20y%20gestionados',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Casos%20asignados%20sin%20gestion'),gridData:(h:6,i:de36a15a-a2e7-4efe-9534-b86900eb62b9,w:10,x:7,y:15),id:'61e6d9e0-056b-11ea-a4c8-1f1331ad1aa2',panelIndex:de36a15a-a2e7-4efe-9534-b86900eb62b9,title:'Casos%20asignados%20sin%20gestion',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Estado%20de%20casos%20por%20area'),gridData:(h:18,i:'1416c91d-952b-4d72-8f47-985c4012fad3',w:23,x:0,y:21),id:'07c588c0-0265-11ea-a4c8-1f1331ad1aa2',panelIndex:'1416c91d-952b-4d72-8f47-985c4012fad3',title:'Estado%20de%20casos%20por%20area',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Gestiones%20por%20caso'),gridData:(h:8,i:'74ca7fc1-abce-411d-b3e2-007184316880',w:25,x:23,y:21),id:d5c6b060-00cf-11ea-a4c8-1f1331ad1aa2,panelIndex:'74ca7fc1-abce-411d-b3e2-007184316880',title:'Gestiones%20por%20caso',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Casos%20gestionados%20por%20area',vis:(legendOpen:!f)),gridData:(h:10,i:'58fc88e7-c96b-493d-be28-576cdcb686b8',w:25,x:23,y:29),id:a4f65160-0265-11ea-a4c8-1f1331ad1aa2,panelIndex:'58fc88e7-c96b-493d-be28-576cdcb686b8',title:'Casos%20gestionados%20por%20area',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Estado%20de%20casos%20por%20grupo%20candidato'),gridData:(h:11,i:f4368131-9544-42c2-af72-17f1e5c1c05e,w:48,x:0,y:39),id:f974a640-0267-11ea-a4c8-1f1331ad1aa2,panelIndex:f4368131-9544-42c2-af72-17f1e5c1c05e,title:'Estado%20de%20casos%20por%20grupo%20candidato',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Total%20casos%20gestionados'),gridData:(h:4,i:'59e34d4c-61ff-463d-958f-d497c2bd4d97',w:14,x:0,y:50),id:'1277e180-00d2-11ea-a4c8-1f1331ad1aa2',panelIndex:'59e34d4c-61ff-463d-958f-d497c2bd4d97',title:'Total%20casos%20gestionados',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Total%20gestiones'),gridData:(h:4,i:'4ae99b97-782b-4274-848e-de638ddaca6d',w:13,x:14,y:50),id:'994792c0-0562-11ea-a4c8-1f1331ad1aa2',panelIndex:'4ae99b97-782b-4274-848e-de638ddaca6d',title:'Total%20gestiones',type:visualization,version:'7.4.2'),(embeddableConfig:(legendOpen:!t,title:'Resultado%20de%20gestiones',vis:(legendOpen:!f)),gridData:(h:15,i:'0560d075-55a9-48f7-8211-7c0b040582a8',w:21,x:27,y:50),id:'79b09f70-00cf-11ea-a4c8-1f1331ad1aa2',panelIndex:'0560d075-55a9-48f7-8211-7c0b040582a8',title:'Resultado%20de%20gestiones',type:visualization,version:'7.4.2'),(embeddableConfig:(title:'Casos%20gestionados%20por%20usuario'),gridData:(h:11,i:'2f580afa-970e-4bb2-ba2d-b2ddfdf1186b',w:27,x:0,y:54),id:'95bb4b10-026a-11ea-a4c8-1f1331ad1aa2',panelIndex:'2f580afa-970e-4bb2-ba2d-b2ddfdf1186b',title:'Casos%20gestionados%20por%20usuario',type:visualization,version:'7.4.2')),query:(language:kuery,query:''),timeRestore:!f,title:'Face%200.4%20-%20supervisores',viewMode:view)"} height="100%" width="100%" style={{border: "0px",  "margin-top": "-40px"}} ></iframe>

        </div>
      </div>        
    )
      

  }
}

export default ReporteSupervisor;

