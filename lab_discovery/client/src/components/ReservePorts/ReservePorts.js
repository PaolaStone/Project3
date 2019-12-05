import React from 'react'
// import styled from 'styled-components'
import ReactTable  from 'react-table'
import 'react-table/react-table.css'
import { Col, Row } from 'reactstrap';



export default class ReservePorts extends React.Component {

    state = {
        loading: true,
        switchPorts: [],
        columns: [],
        mdaPorts:[],
        columns1:[]
    }

    async componentDidMount(){
        const url = '/api/opens'
        const response = await fetch(url);
        // console.log(response.ok)
        // console.log("this is response " + response)
        const data = await response.json();
        
        // console.log("this is data " + JSON.stringify(data))
        // console.log(response.status)
        this.setState({switchPorts: data.opens, loading: false})
        const url1 = '/api/mdas'
        const response1 = await fetch(url1);
        // console.log(response.ok)
        // console.log("this is response " + response)
        const data1 = await response1.json();
        
        // console.log("this is data " + JSON.stringify(data))
        // console.log(response.status)
        this.setState({mdaPorts: data1.mdas, loading: false})

    }

    // async componentDidMount(){
        

    // }

    render() {
        const columns = [
            {
                id: "selection",
                Header: "Select",
                maxWith:20,
                Cell: ({row}) => (
                    <div>
                        <input type="checkbox"/>
                    </div>
                ),

            },
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
            }
        ]

        const columns1 = [
            {
                id: "selection",
                Header: "Select",
                maxWith:20,
                Cell: ({row}) => (
                    <div>
                        <input type="checkbox"/>
                    </div>
                ),

            },
            {
                Header: "Air Rack NAme",
                accessor: "AirRackName",
                resizable: false,
                width: 285,
                sortable: true,
                multiSort: true,
                filterable: true
            },
            {
                Header: "Air Rack Port",
                accessor: "AirRackPort",
                resizable: false,
                width: 115,
                sortable: true,
                multiSort: true,
                filterable: true
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
            <div className="container">
                <Row>
              <Col xs="6">
              {this.state.loading || !this.state.switchPorts ? (
                    <div></div>
                ) : (
                    
                        <ReactTable  className="-striped -highlight"
                            data= { this.state.switchPorts }
                            columns= { columns }
                            defaultPageSize= { 10 }
                            showPageSizeOptions= { true }
                            minRows= { 0 }
                            defaultFilterMethod={filterCaseInsensitive}
                           
                        />
                        
                )}
                  </Col>

                <Col cs="6">
                {this.state.loading || !this.state.mdaPorts ? (
                    <div></div>
                ) : (
                    
                        <ReactTable  className="-striped -highlight"
                            data= { this.state.mdaPorts }
                            columns= { columns1 }
                            defaultPageSize= { 10 }
                            showPageSizeOptions= { true }
                            minRows= { 0 }
                            defaultFilterMethod={filterCaseInsensitive}
                           
                        />
                        
                )}
                </Col>  
                </Row>
                <br/>
            </div>
        )
    }

    

}
  