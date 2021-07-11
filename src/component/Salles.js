import React , {useState,useEffect} from 'react'
import {ListGroup} from 'react-bootstrap'
import Projection from './Projection'

function  Salles({sallehref})
{
    const[salles,setSalles]=useState([])
    const [currentsalle,setCurrentsalle]=useState([]);

   useEffect(()=>{
      
    fetch(sallehref).then(v=>v.json()).then(sal=>{
        
        setSalles(sal._embedded.salles);
      
    }
        
    )
    },[sallehref])
        
  
    return ( <>
    { salles.map(s=>(
       <div className="card col-6 mt-3">
       <div className="card-header">
    <h3> {s.name}   </h3>
     </div>
     <div className="card-body">
    
      <div className="row">
      <Projection prohref={s._links.projections.href}/>
    
      </div>
     </div>
            
        </div>
    )) 
    }
    </>)
}

export default Salles