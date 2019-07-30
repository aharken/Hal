import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Thermostat extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h2>Thermostat Overview</h2>
              </CardHeader>
              <CardBody>
                
                <p1>You have two T2 Honeywell thermostats in your house hold, they were installed June 3rd 2019.</p1>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h2>Energy Effiency:</h2>
              </CardHeader>
              <CardBody>
                <p2 style={{color:'red'}}>You have overall low effiency</p2>
               < br />

                <p2>Click this </p2>
                <a href="https://tenor.com/search/youre-fucked-gifs">Link</a>
                <p4> to get more information on how to be more energy effiencent</p4>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h2>Other</h2>
              </CardHeader>
              <CardBody>
                <p3>For more device information either go to the dashboard tabs or follow this </p3>
                <a href="https://www.honeywellstore.com/store/category/thermostats.htm">Link</a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Thermostat;
