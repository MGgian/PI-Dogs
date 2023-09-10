import { Home, Landing, Detail, Form } from "./views"
import { Route } from "react-router-dom"
import Navbar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();
  
  return ( 
    <div className="App">
      {location.pathname !== "/" && <Navbar/>}
      <Route exact path="/" component={Landing}/>  
      <Route exact path="/detail" component={Detail}/>  
      <Route exact path="/create" component={Form}/>  
      <Route path="/home" render={() => <Home/>}/>
      
    </div>
  );
};

export default App; 
