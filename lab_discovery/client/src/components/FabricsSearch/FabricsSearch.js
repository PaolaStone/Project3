import React from 'react';
import { Table } from 'reactstrap';
import SearchBy from '../Search';
import axios from 'axios'




class FabricsSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            allPorts:[]
        }
    }
    
    componentDidMount() {
        axios.get('./server/routes/api/allPorts')
        .then (res => {
            this.setState({
                allPorts:res.data
                
            })
            .then(profileState => {
                console.log(JSON.stringify(this.state.allPorts))
            })
            .catch((error) => {
                console.log(error)
                
            })
        }
            
        
        )
    }

    render() {
        return (
            <div>
                <SearchBy/>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Switch </th>
                            <th>Port</th>
                            <th>Status</th>
                            <th>System Name and Port</th>
                            <th>System www</th>
                            <th>Air Rack</th>
                            <th>Air Port</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allPorts.map( ports => 
                        <tr >      
                        <td>{ports.SwitchName}</td>
                        <td>{ports.Status}</td>
                        <td>{ports.SystemName_Port}</td>
                        <td>{ports.SystemWWN}</td>
                        <td>{ports.AirRackName}</td>
                        <td>{ports.AirRackPort}</td>
                    </tr>
                            )}
                        
                    </tbody>
                </Table>
           </div>
        )
            
        

        

    }
}

export default FabricsSearch;

   
