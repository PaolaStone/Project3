import React from 'react';

import { Table } from 'reactstrap';
// import PortsList from './PortsList.json';
import SearchBy from '../Search';
// import List from '../List';

// const loadData = () => JSON.parse(JSON.stringify(PortsList));

class FabricsSearch extends React.Component {
    render() {
        return (
            <div className="container">
                <br/>
                <SearchBy/>
                <br/>
                {/* <Table striped>
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
                            {PortsList.map(function(port, i) {
                                return <tr port={port} Key={i}>      
                                    <td>{PortsList[i].SwitchName}</td>
                                    <td>{PortsList[i].Port}</td>
                                    <td>{PortsList[i].Status}</td>
                                    <td>{PortsList[i].SystemName_Port}</td>
                                    <td>{PortsList[i].SystemWWN}</td>
                                    <td>{PortsList[i].AirRackName}</td>
                                    <td>{PortsList[i].AirRackPort}</td>
                                </tr>
                            })
                            }
                        </tbody>
                </Table> */}
            </div>
        )
    };
}

   
export default FabricsSearch;