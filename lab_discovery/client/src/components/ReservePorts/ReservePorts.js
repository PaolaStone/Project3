import React from 'react'
// import styled from 'styled-components'
import ReactTable  from 'react-table'


import 'react-table/react-table.css'

class Reserve extends React.Component {
    reservePort = event => {
        event.preventDefault()
        
       alert("this is the id to reserve ports  " + this.props.id )
    }
    
    onChangeStatus (e) {
        this.setState({ Status: e.target.value})
    }
    
    onChangeSystemName_Port (e) {
        this.setState({ SystemName_Port: e.target.value})
    }
    
    onChangeSystemWWN (e) {
        this.setState({ SystemWWN: e.target.value})
    }
    
    onChangeAirRackName (e) {
        this.setState({ AirRackName: e.target.value})
    }
    
    onChangeSAirRackPort(e) {
        this.setState({ AirRackPort: e.target.value})
    }
    
        onSubmit(e) {
            e.preventDefault()
    
            const reserveObject = {
                SwitchName: this.state.SwitchName,
                Port: this.state.Port,
                Status: this.state.Status,
                SystemName_Port: this.state.SystemName_Port,
                SystemWWN: this.state.SystemWWN,
                AirRackName: this.state.AirRackName,
                AirRackPort: this.state.AirRackPort
            }
            console.log(reserveObject)
        }
    
       

    render() {
        
        return <button onClick={this.reservePort}> Reserve </button>
    }
}

export default class ReservePorts extends React.Component {
    
    state = {
        loading: true,
        opens: [],
        columns: []
    }

    async componentDidMount(){
        const url = '/api/opens'
        const response = await fetch(url);
        // console.log(response.ok)
        // console.log("this is response " + response)
        const data = await response.json();
        
        // console.log("this is data " + JSON.stringify(data))
        // console.log(response.status)
        this.setState({opens: data.opens, loading: false})

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
            },
            
            {
                Header: "Action",
                accessor: "",
                width: 100,
                Cell: function(props) {
                    return (
                        <span>
                        <   Reserve id={props.original._id}/>
                        </span>
                    )
                    
                }
            }

        ]

        function filterCaseInsensitive(filter, row) {
            const id = filter.pivotId || filter.id;
            return (
                row[id] !== undefined ?
                    String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
                :
                    true
            );
        }
        
        return (
            <div className="container-fluid">
                {this.state.loading || !this.state.opens ? (
                    <div></div>
                ) : (
                    
                        <ReactTable className="-striped -highlight"
                            data= { this.state.opens }
                            columns= { columns }
                            defaultPageSize= { 10 }
                            showPageSizeOptions= { true }
                            minRows= { 0 }
                            defaultFilterMethod={filterCaseInsensitive}
                        />
                    
                )}
            </div>
        )
    }
}