
import './App.css';
import Navigation from './nav'
import Cinema from './component/cinema'

function App() {
  return (<div>
    
    <div className="row">
       <Navigation/>
    </div>
    <div className="row">
    <Cinema/>
    </div>
  </div>
  
   
  );
}

export default App;
