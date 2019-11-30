import React from 'react';
import { Table } from 'reactstrap';
import SearchBy from '../Search';
// import TableRow from '../TableRow';
// import axios from 'axios'
// import PORTS from '../../utils/PORTS';




// class FabricsSearch extends React.Component {

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
        console.log
        console.log(response.status)
        this.setState({ports: data.allPorts, loading: false})

        //this works//
        // fetch('/api/ports',{ mode: 'cors'})
        //     .then(function(response) {
        //         return response.json();
        //     }).then(function(response) {
        //         console.log("responds  " + JSON.stringify(response) )
                
        //     })

        //This works
    }
    
   render() {
       return (
           <div>
               {this.state.loading || !this.state.ports ? (
               <div>loading</div> 
               ) : (
               <div>
                   <table>
                        {this.state.ports.map((port,i) => (
                            <tr key={port.ID}>
                                <td> {port.ID}</td>
                                <td> {port.SwitchName}</td>
                                <td> {port.Port}</td>
                                <td> {port.Status}</td>
                            </tr>
                       ))}
                   </table>
                   <br/>
                   {this.state.ports[0].ID}
                   {this.state.ports[1].ID}
               </div>) 
                  
               }
           </div>
       )
   }
}



//    componentDidMount() {
        
//         fetch('/api/ports')
        
//         .then(res => {
//             console.log("this is res " + res.allPorts[0]);
//             return res.json()
            
//         })
//         .then(ports => {
            
//             this.setState({ports})
//             console.log("this is ports " + ports);
//         })
//     }
    // state = {
    //    ports: [],
    //    SwitchName: "",
    //    Port: "",
    //    Status: "",
    //    SystemName_Port: "",
    //    SystemWWN: "",
    //    AirRackName: "",
    //    AirRackPort: ""
    // }

    // componentDidMount() {

        // this.loadPorts();

    // }

    // loadPorts = () => {
    //     PORTS.getPorts()
        
    //         .then(res => 
    //            this.setState({
    //                 ports: res.data,
    //                 SwitchName: "",
    //                 Port: "",
    //                 Status: "",
    //                 SystemName_Port: "",
    //                 SystemWWN: "",
    //                 AirRackName: "",
    //                 AirRackPort: ""
    //             })
                
    //             )
                
    //         .catch(err => console.log(err))
    //         console.log("this is ports" + this.state.ports)
    // }
    

    // render() {
    //     return (
    //         <div>
    //             <SearchBy/>
    //             <Table striped>
    //                 <thead>
    //                     <tr>
    //                         <th>Switch </th>
    //                         <th>Port</th>
    //                         <th>Status</th>
    //                         <th>System Name and Port</th>
    //                         <th>System www</th>
    //                         <th>Air Rack</th>
    //                         <th>Air Port</th>
    //                     </tr>
    //                 </thead>
                    {/* {this.state.ports.length ? (
                        
                        <tbody>
                            {this.state.ports.map((port,i) => (
                                
                                <tr key={port.i}>
                                    <td>{port.i.SwitchName}</td>
                                    <td>{port.i.Status}</td>
                                    <td>{port.i.SystemName_Port}</td>
                                    <td>{port.i.SystemWWN}</td>
                                    <td>{port.i.AirRackName}</td>
                                    <td>{port.i.AirRackPort}</td>
                                </tr>
                            ))}
                        </tbody>


                    
                    ) : (
                        console.log("noting to display")
                        // <h3>No Results to Display</h3>
                    )

                    } */}
                   
//                 </Table>
//            </div>
//         )
            
        

        

//     }
// }

// export default FabricsSearch;

   
