import React , {useState,useEffect} from 'react'
import {ListGroup  } from "react-bootstrap";
import Listcinemas from './Listcinemas';



 function Cinema()
 {
    const [ville,setVille] = useState([]);
    const [currentville,setCurrentville]=useState([]);

   const Getvilles =()=>{
       return  fetch("http://localhost:8080/villes").then(v=>v.json())
   }
   

    useEffect(()=>{
        Getvilles().then(v=>{
             setVille(v._embedded.villes)
            
            // console.log(v._embedded.villes._links.cinemas)
             
         })
        },[currentville])
     
     return (  <>
     <div className="col-3">
          <ListGroup>
             {ville.map(v=>(
           
  <ListGroup.Item className={v._links.cinemas.href==currentville?'active':' '} key={v.name} ><a onClick={()=>{
    console.log(v._links.cinemas.href)
    setCurrentville(v._links.cinemas.href)
  }}> {v.name} </a></ListGroup.Item>
             ))}
            
     
       </ListGroup>
         </div>
         <div className="col-9">
              <div className="row">
               <Listcinemas key={currentville} villehref={currentville}/>
               </div>
              
         </div>
         </>
     );
         
     

 }
 export default Cinema