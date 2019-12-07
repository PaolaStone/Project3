import React, { Fragment} from "react";
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
// import { Col } from '../Grid';
import { Col, Card, CardTitle, CardText } from 'reactstrap';
import "./Dashboard.css";

// import Dashboard from '../Dashboard'
import ReservePorts from '../ReservePorts'

import FabricsSearch from '../FabricsSearch'

import Maps from '../Maps'


export default class Dashboard extends React.Component {

  render(){
    return (
      <div className="container">
      <div className="wrapper ">
        <div className="box item1">
                  Fabrics
                  
                  <Link className="inMenu" to= {'/Search'}> |Search </Link>  |
                  <Link className="inMenu"to= {'/ReservePorts'}> Reserve |</Link>
        </div>
        <div className="box item2">
                Maps
                
                <Link className="inMenu" to= {'/Maps'}> | Lab 1  </Link> |
                <Link className="inMenu"to= {'#'}> Lab 3  |</Link>
              </div>
            
              <div className="box item3">Network</div>
           <div className="box item4">Wiki</div>
            <div className="box item5">Import</div>
            <div className="box item6">Add</div>
                      
        <Switch>
        {/*     <Route exact path='/Dashboard' component={ Dashboard } /> */}
            <Route exact path='/Search' component={ FabricsSearch } />
            <Route exact path='/ReservePorts' component={ ReservePorts } />
            <Route exact path='/Maps' component={ Maps} />

          </Switch>
      
    </div>
    </div>

    )
    }

}
