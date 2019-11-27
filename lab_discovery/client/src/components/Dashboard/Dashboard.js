import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import FabricsSearch from "../FabricsSearch";
import "./Dashboard.css";


function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');  
    // <FabricsSearch/>
}


const Dashboard = (props) => {
    return (
        <div >
            {/* <div className= "row">
                <div className="col col-md-6">
                    <Card body inverse color="warning" style={{ height: '300px' }}>
                        <CardTitle>Fabrics</CardTitle>
                        <CardText></CardText>
                        <Button onClick={handleClick
                            } color="secondary" size="sm">Search</Button>
                        <br/>
                        <Button color="secondary" size="sm">Reserve Ports</Button>
                    </Card>
                </div>
                <div className="col col-md-6">
                    <Card body inverse color="info" style={{ height: '300px' }}>
                        <CardTitle>Maps</CardTitle>
                        <CardText></CardText>
                        <Button color="secondary">Go</Button>
                    </Card>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col col-md-6">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height: '300px' }}>
                        <CardTitle>IP Database</CardTitle>
                        <CardText></CardText>
                        <Button>Go</Button>
                    </Card>
                </div>
                <div className="col col-md-6">
                    <Card body inverse color="danger" style={{ height: '300px' }}>
                        <CardTitle>Wiki</CardTitle>
                        <CardText></CardText>
                        <Button color="secondary">GO</Button>
                    </Card>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col col-md-6">
                    <Card body inverse color="primary" style={{ height: '300px' }}>
                        <CardTitle>Import</CardTitle>
                        <CardText></CardText>
                        <Button color="secondary">Go</Button>
                    </Card>
                </div>
                <div className="col col-md-6">
                    <Card body inverse color="success" style={{ height: '300px' }}>
                        <CardTitle>Add</CardTitle>
                        <CardText></CardText>
                        <Button color="secondary">Go</Button>
                    </Card>
                </div>
            </div> */}
        </div>
    )

}
export default Dashboard;