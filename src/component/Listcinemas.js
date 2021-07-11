import React , {useState,useEffect} from 'react'
import {ListGroup} from 'react-bootstrap'
import Salles from './Salles'

function  Listcinemas({villehref})
{
    const[cinemas,setCinemas]=useState([])
    const [currentcinema,setCurrentcinema]=useState([]);

   useEffect(()=>{
       
    fetch(villehref).then(v=>v.json()).then(cin=>{
        
        setCinemas(cin._embedded.cinemas);
      
    }
        
    )
    },[currentcinema])
        
  
    return (<div className="card">
   <div className="card-header">
<h3> List cinemas</h3>
 </div>
 <div className="card-body">
  <div className="row">
  <ListGroup horizontal>
      {cinemas.map(c=>(
         <ListGroup.Item className={c._links.Salles.href==currentcinema?'active':' '} > <a key={c.id} onClick={()=>{
             console.log(c._links.Salles.href);
            setCurrentcinema(c._links.Salles.href)
         }}> {c.name} </a></ListGroup.Item>

      ))}
 
</ListGroup>
  </div>
  <div className="row">
     
         <Salles  sallehref={currentcinema}></Salles>
    

  </div>
 </div>
        
    </div>)
}

export default Listcinemas