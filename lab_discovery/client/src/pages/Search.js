import React, { Component } from 'react';
import SearchBy from '../components/Search';
import FabricsSearch from '../components/FabricsSearch'


class FabricsSearchPage extends Component {
    render () {
        return(
            <div>
               <SearchBy/>
               <br/>
               <FabricsSearch/>
            </div>
        )
    }
    
}

export default FabricsSearchPage;