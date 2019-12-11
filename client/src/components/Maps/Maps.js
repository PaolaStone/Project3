import React from 'react';
import {Col} from 'reactstrap'

class Maps extends React.Component {
    render () {
      
      return (
        <div className="container">
          <Col md="1"></Col>
          <Col xs="8">
            <img src=
              "https://res.cloudinary.com/paolastone/image/upload/v1576041383/lab-discovery/lab3_eai7bg.png"
              alt="map"
            />
          </Col>
         <Col md="1"></Col>
        </div>

      )
    }
  }
  export default Maps;