import React , {useState,useEffect} from 'react'
import Seance from './Seance'

function  Projection({prohref})
{
    const[projections,setProjections]=useState([])
    const [currentprojection,setCurrentProjection]=useState([]);
  const url = prohref.replace("{?projection}", "");
   useEffect(()=>{
        console.log(url)
    fetch(url+"?projection=p1").then(v=>v.json()).then(pro=>{
        
        setProjections(pro._embedded.filmProjections[0]);
        console.log(projections)
    
      
    }
        
    )
    },[prohref])
        
  
    if(projections.id) { 
    return ( <>
 
    <p className="text-center">  titre film : {projections.film.titre} </p>
     <div className="col-6">
      <img src={"http://localhost:8080/imageFilm/"+projections.film.id}></img>
     </div>
     <div className="col-6">
     <Seance prix={projections.prix}/>
     </div>

    </>)}else {
        return(<div>
                <p> charging</p>
            </div>
        )
    }
      
}

export default Projection