import React from 'react'
import ReactTable  from 'react-table'
import 'react-table/react-table.css'
import Search from '../SearchPorts'
import { Col } from 'reactstrap';
import './FabricsSearch.css';

export default class FabricsSearch extends React.Component {
    state = {
        loading: true,
        ports: [],
        columns: []
    }

    async componentDidMount(){
        const url = '/api/ports'
        const response = await fetch(url);
        // console.log(response.ok)
        // console.log("this is response " + response)
        const data = await response.json();
        
        // console.log("this is data " + JSON.stringify(data))
        // console.log(response.status)
        this.setState({ports: data.allPorts, loading: false})

    }
    
    render() {

        const changeTheFabricSearch = (ports) => {
            this.setState({ports})
        }
        
        const columns = [
            {
                Header: "id",
                accessor: "_id",
                resizable: false,
                width: 100,
                sortable: true,
                multiSort: true,
                filterable: true,
                show:false
            },
            {
                Header: "Switch Name",
                accessor: "SwitchName",
                resizable: false,
                width: 270,
                sortable: true,
                multiSort: true,
                filterable: true
            },
            {
                Header: "Port",
                accessor: "Port",
                resizable: false,
                width: 100,
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
                width: 180,
                sortable: true,
                multiSort: true,
                filterable: true
            },
            {
                Header: "Port wwn",
                accessor: "SystemWWN",
                resizable: false,
                width: 250,
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
            {
                Header: "Action",
                accessor: "",
                maxWidth: 100,
                
                
                Cell: function(props) {
                    return (
                        <span>
                            <Search
                                id={ props.original._id}  
                                SwitchName={ props.original.SwitchName }
                                Port={ props.original.Port }
                                Status={ props.original.Status }
                                SystemName_Port={ props.original.SystemName_Port }
                                SystemWWN={ props.original.SystemWWN }
                                AirRackName={ props.original.AirRackName }
                                AirRackPort={ props.original.AirRackPort }
                                changeTheFabricSearch = {changeTheFabricSearch}
                            />
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
            <div className="row">
                <Col></Col>
                <Col className="searchTable">
                    {this.state.loading || !this.state.ports ? (
                        <div></div>
                    ) : (
                            
                        <ReactTable  
                            className="-striped -highlight"
                            data= { this.state.ports }
                            columns= { columns }
                            defaultPageSize= { 10 }
                            showPageSizeOptions= { true }
                            minRows= { 0 }
                            defaultFilterMethod={filterCaseInsensitive}
                            maxWidth= {1000}
                            
                        />
                    )}
                </Col>
                <Col></Col>
                <br/>
            </div>
        )
    }
}