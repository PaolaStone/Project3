import React from 'react';
import {Col} from 'reactstrap'

class Wiki extends React.Component {
    render () {
      
      return (
        <div className="row">
          <Col xs="3"></Col>
          <Col xs="6">
            <img src=
              "https://res.cloudinary.com/paolastone/image/upload/v1576044584/lab-discovery/wiki_zorcx2.png"
              alt="wiki"
            />
          </Col>
         <Col xs="3"></Col>
        </div>

      )
    }
  }
  export default Wiki;