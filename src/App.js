import Navbar from './Navbar';
import Home from './Home';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './create';
import Blogdetails from './blogdetails';
import Notfound from './notfound';


function App() {
 
  return (
    <div className="App">
       <Router>
      <Navbar ></Navbar>
     <div className="content">
    
   <Switch>
    <Route exact path="/">
       <Home/>
    </Route>
    <Route path="/create">
    <Create/>
    </Route>
     <Route path="/blogs/:id">
     <Blogdetails/>

    </Route>
    <Route path="*">
      <Notfound/>
    </Route>
   </Switch>

     </div>
       </Router>
    </div>
     
  );
}

export default App;
