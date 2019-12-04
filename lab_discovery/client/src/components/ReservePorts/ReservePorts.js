import React from 'react'
// import styled from 'styled-components'
// import ReactTable  from 'react-table'


import 'react-table/react-table.css'
import PortModal from '../PortModal'

export default class Reserve extends React.Component {
    reservePort = () => {
        
       
        const reserveObject = {
        SwitchName: this.props.SwitchName,
        Port: this.props.Port,
        Status: this.props.Status,
        SystemName_Port: this.props.SystemName_Port,
        SystemWWN: this.props.SystemWWN,
        AirRackName: this.props.AirRackName,
        AirRackPort: this.props.AirRackPort
        }
        console.log("this is data " + JSON.stringify(reserveObject))
        
        
    }
    
   
    render() {
        return (
            
           <PortModal reservePort={this.reservePort}/>
            
            )
    }
}







// onChangeStatus (e) {
//     this.setState({ Status: e.target.value})
// }

// onChangeSystemName_Port (e) {
//     this.setState({ SystemName_Port: e.target.value})
// }

// onChangeSystemWWN (e) {
//     this.setState({ SystemWWN: e.target.value})
// }

// onChangeAirRackName (e) {
//     this.setState({ AirRackName: e.target.value})
// }

// onChangeSAirRackPort(e) {
//     this.setState({ AirRackPort: e.target.value})
// }

//     onSubmit(e) {
//         e.preventDefault()

//         const reserveObject = {
//             SwitchName: this.state.SwitchName,
//             Port: this.state.Port,
//             Status: this.state.Status,
//             SystemName_Port: this.state.SystemName_Port,
//             SystemWWN: this.state.SystemWWN,
//             AirRackName: this.state.AirRackName,
//             AirRackPort: this.state.AirRackPort
//         }
//         console.log(reserveObject)
//     }

   
   