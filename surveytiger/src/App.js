
import {Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import surveyTiger from "./surveytiger.png";
import Menu from './components/Menu.js';
import CreateSurvey from './components/CreateSurvey.js';
import Published from './components/Published.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [squestions, setSquestions] = useState([])
  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 text-center">
         <Router>
         <Link to="/">
         <img className="col-md-6" alt="logo" src={surveyTiger}/>
         </Link>
           <Switch>
             <Route path="/" component={Menu} exact/>
             <Route path="/create"  exact>
               <CreateSurvey squestions={squestions} setSquestions={setSquestions}></CreateSurvey>
             </Route>
             <Route path="/published"  exact>
               <Published questions={squestions} />
             </Route>
             {/* <Route path="/published" component={Published}/> */}
           </Switch>
         </Router>
      </div>
    </>
  );
}

export default App;
