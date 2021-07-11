import React , {useState,useEffect} from 'react'
import {ListGroup} from 'react-bootstrap'

function Seance({prix})
{
    const [seances,setSeances]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/seances").then(S=>S.json()).then(sea=>{
            console.log(sea._embedded.seances)
            setSeances(sea._embedded.seances)
        })
    },[prix])
    return(<ListGroup>
         <ListGroup.Item color="danger" >
            <h6> seances </h6> 
      </ListGroup.Item>
       {seances.map(s=>(
      <ListGroup.Item  key={s.heureDebut} >
            <p> {s.heureDebut} : Prix({prix}) </p>
      </ListGroup.Item>
       ))
           
       }
       
                     
                    
             
        </ListGroup>
    )

}

export default Seance