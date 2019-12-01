import React from 'react'
// import styled from 'styled-components'
import ReactTable  from 'react-table'
import 'react-table/react-table.css'

export default class FabricsSearch extends React.Component {
    
    state = {
        loading: true,
        ports: [],
        columns: []
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
        const columns = [
            {
                Header: "Switch Name",
                accessor: "SwitchName",
                resizable: false,
                width: 285,
                sortable: true,
                multiSort: true,
                filterable: true
            },
            {
                Header: "Port",
                accessor: "Port",
                resizable: false,
                width: 115,
                sortable: true,
                multiSort: true,
                filterable: true
            },
            {
                Header: "Status",
                accessor: "Status",
                resizable: false,
                width: 156,
                sortable: true,
                multiSort: true,
                filterable: true
            },
            {
                Header: "System_Port",
                accessor: "SystemName_Port",
                resizable: false,
                width: 301,
                sortable: true,
                multiSort: true,
                filterable: true
            },
            {
                Header: "Port wwn",
                accessor: "SystemWWN",
                resizable: false,
                width: 245,
                sortable: true,
                multiSort: true,
                filterable: true
            },
            {
                Header: "Air Rack",
                accessor: "AirRackName",
                resizable: false,
                width: 250,
                sortable: true,
                multiSort: true,
                filterable: true
            },
            {
                Header: "Air Port",
                accessor: "AirRackPort",
                resizable: false,
                width: 100,
                sortable: true,
                multiSort: true,
                filterable: true
            },

        ]
        return (
            <div className="container-fluid">
                {this.state.loading || !this.state.ports ? (
                    <div></div>
                ) : (
                    
                        <ReactTable className="-striped -highlight"
                            data= { this.state.ports }
                            columns= { columns }
                            defaultPageSize= { 10 }
                            showPageSizeOptions= { true }
                            minRows= { 0 }
                        />
                    
                )}
            </div>
        )
    }
}

// import React from 'react';
// import { Table } from 'reactstrap';
// // import SearchBy from '../Search';


// export default class FabricsSearch extends React.Component {
    
//     state = {
//         loading: true,
//         ports: []
//     }

//     async componentDidMount(){
//         const url = '/api/ports'
//         const response = await fetch(url);
//         console.log(response.ok)
//         console.log("this is response " + response)
//         const data = await response.json();
        
//         console.log("this is data " + JSON.stringify(data))
//         console.log(response.status)
//         this.setState({ports: data.allPorts, loading: false})

//     }
    
//     render() {
//         return (
//             <div className="container-fluid">
                
//                 <div >
//                 {this.state.loading || !this.state.ports ? (
//                 <div>Loading...</div> 
//                 ) : (
//                     <div>
                        
//                         <Table striped>
//                             <thead>
//                                 <tr>
//                                     <th>Switch Name </th>
//                                     <th>Port</th>
//                                     <th>Status</th>
//                                     <th>Name_Port</th>
//                                     <th>Port wwn</th>
//                                     <th>Air Rack</th>
//                                     <th>Air Port</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {this.state.ports.map((port,i) => (
//                                 <tr key={port.ID}>
//                                     <td> {port.SwitchName}</td>
//                                     <td> {port.Port}</td>
//                                     <td> {port.Status}</td>
//                                     <td> {port.SystemName_Port}</td>
//                                     <td> {port.SystemWWN}</td>
//                                     <td> {port.AirRackName}</td>
//                                     <td> {port.AirRackPort}</td>

//                                 </tr>
//                                 ))}
//                             </tbody>
//                         </Table>
                        
//                     </div>
//                 )}
//                 </div>
//             </div>
//         )
//     }
// }