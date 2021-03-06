import './App.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import {Switch,Route, Redirect} from "react-router-dom";

import "jquery/dist/jquery";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import Footer from './Footer';

// switch is used taki multiple pages mai sai koi ek page dikhai de jo pehle match hoje

const App = () => {
    return ( <>
    <Navbar/>
        <Switch>
        <Route exact path = "/" component = { Home }/ > 
        <Route exact path = "/about" component = { About }/ > 
        <Route exact path = "/service" component = { Service}/ > 
        <Route exact path = "/contact" component = { Contact }/> 
        <Redirect to="/"/>
        </Switch>
        <Footer/>
        
         </>
    );
}

export default App;