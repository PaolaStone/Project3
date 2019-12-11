import React from 'react';
import {Col} from 'reactstrap'

class Wiki extends React.Component {
    render () {
      
      return (
        <div className="row">
          <Col xs="2"></Col>
          <Col xs="8">
            <img src=
              "https://res.cloudinary.com/paolastone/image/upload/v1576046365/lab-discovery/wiki_hpdmbd.png"
              alt="wiki"
            />
          </Col>
         <Col xs="1"></Col>
        </div>

      )
    }
  }
  export default Wiki;