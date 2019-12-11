import React from "react";
//code breaks if Router is removed.
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import "./Dashboard.css";
import ReservePorts from '../ReservePorts'
import FabricsSearch from '../FabricsSearch'
import Maps from '../Maps'
import Wiki from '../Wiki'
import Network from "../Network";

export default class Dashboard extends React.Component {
  render(){
    return (
      <div className="container-fluid containerDashboard">
        <div className="wrapper ">
          <div className="box item1">
            Fabrics:
            <br/>
            <Link className="inMenu" to= {'/Search'}> Search </Link>  |
            <Link className="inMenu"to= {'/ReservePorts'}> Reserve </Link>
          </div>
          <div className="box item2">
            Maps:
            <br/>
            <Link className="inMenu" to= {'/Maps'}>  Lab 1  </Link> |
            <Link className="inMenu"to= {'/Maps'}> Lab 3  </Link>
          </div>
          <Link className="box item3" to={'/Network'}>Network</Link>
          <Link className="box item4" to= {'/Wiki'}>Wiki</Link>
          <div className="box item5">Import</div>
          <div className="box item6">Add</div>
                        
          <Switch>
              <Route exact path='/Search' component={ FabricsSearch } />
              <Route exact path='/ReservePorts' component={ ReservePorts } />
              <Route exact path='/Maps' component={ Maps} />
              <Route exact path='/Wiki' component={ Wiki} />
              <Route exact path='/Network' component={ Network} />
          </Switch>
        
          </div>
      </div>

    )
    }

}
