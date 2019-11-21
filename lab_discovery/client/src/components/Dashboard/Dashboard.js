import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import FabricsSearch from "../FabricsSearch";

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');  
    <FabricsSearch/>
}


const Dashboard = (props) => {
    return (
        <div className="container">
            <div className= "row">
                <div className="col col-md-6">
                    <Card body inverse color="warning">
                        <CardTitle>Fabrics</CardTitle>
                        <CardText></CardText>
                        <Button onClick={handleClick
                            } color="secondary" size="sm">Search</Button>
                        <br/>
                        <Button color="secondary" size="sm">Reserve Ports</Button>
                    </Card>
                </div>
                <div className="col col-md-6">
                    <Card body inverse color="info">
                        <CardTitle>Maps</CardTitle>
                        <CardText></CardText>
                        <Button color="secondary">Go</Button>
                    </Card>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col col-md-6">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>IP Database</CardTitle>
                        <CardText></CardText>
                        <Button>Go</Button>
                    </Card>
                </div>
                <div className="col col-md-6">
                    <Card body inverse color="danger">
                        <CardTitle>Wiki</CardTitle>
                        <CardText></CardText>
                        <Button color="secondary">GO</Button>
                    </Card>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col col-md-6">
                    <Card body inverse color="primary">
                        <CardTitle>Import</CardTitle>
                        <CardText></CardText>
                        <Button color="secondary">Go</Button>
                    </Card>
                </div>
                <div className="col col-md-6">
                    <Card body inverse color="success">
                        <CardTitle>Add</CardTitle>
                        <CardText></CardText>
                        <Button color="secondary">Go</Button>
                    </Card>
                </div>
            </div>
        </div>
    )

}
export default Dashboard;