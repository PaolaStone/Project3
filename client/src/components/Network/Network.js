import React from 'react';
import {Col} from 'reactstrap'

class Network extends React.Component {
    render () {
      
      return (
        <div className="row">
          <Col md="3"></Col>
          <Col xs="6">
            <img src=
              "https://res.cloudinary.com/paolastone/image/upload/v1576045428/lab-discovery/network_qqybao.png"
              alt="network"
            />
          </Col>
            <Col md="3"></Col>
        </div>

      )
    }
  }
  export default Network;