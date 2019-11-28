import React from 'react';
import { Card, CardFooter, CardHeader, CardText, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import FabricsSearch from '../FabricsSearch';
import ReservePorts from '../ReservePorts';

const Fabrics = (props) => {
  return (
    <Router>
        <div className = "container">
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardHeader tag="h3">Search</CardHeader>
                        <CardText>Use this option to find information about systems connectivity. Search can be made using the port wwn or the system name.</CardText>
                        <CardFooter>
                            <Link to={'/FabricsSearch'}> Start search</Link>
                        </CardFooter>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardHeader tag="h3">Reserve Ports</CardHeader>
                        <CardText>Make sure you have system information including name, location, and physical port description.</CardText>
                        <CardFooter>
                            <Link to={'/ReservePorts'}> Check Ports </Link>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
            <Switch>
                <Route exact path= '/FabricsSearch' component= { FabricsSearch} />
                <Route exact path= '/ReservePOrts' component= { ReservePorts} />
            </Switch>
        </div>
    
    </Router>
  );
};

export default Fabrics;