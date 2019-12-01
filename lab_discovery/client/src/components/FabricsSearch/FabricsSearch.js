import React from 'react';
import { Table } from 'reactstrap';
// import SearchBy from '../Search';


export default class FabricsSearch extends React.Component {
    
    state = {
        loading: true,
        ports: []
    }

    async componentDidMount(){
        const url = '/api/ports'
        const response = await fetch(url);
        console.log(response.ok)
        console.log("this is response " + response)
        const data = await response.json();
        
        console.log("this is data " + JSON.stringify(data))
        console.log(response.status)
        this.setState({ports: data.allPorts, loading: false})

    }
    
    render() {
        return (
            <div className="container-fluid">
                
                <div >
                {this.state.loading || !this.state.ports ? (
                <div>Loading...</div> 
                ) : (
                    <div>
                        
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Switch Name </th>
                                    <th>Port</th>
                                    <th>Status</th>
                                    <th>Name_Port</th>
                                    <th>Port wwn</th>
                                    <th>Air Rack</th>
                                    <th>Air Port</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.ports.map((port,i) => (
                                <tr key={port.ID}>
                                    <td> {port.SwitchName}</td>
                                    <td> {port.Port}</td>
                                    <td> {port.Status}</td>
                                    <td> {port.SystemName_Port}</td>
                                    <td> {port.SystemWWN}</td>
                                    <td> {port.AirRackName}</td>
                                    <td> {port.AirRackPort}</td>

                                </tr>
                                ))}
                            </tbody>
                        </Table>
                        
                    </div>
                )}
                </div>
            </div>
        )
    }
}