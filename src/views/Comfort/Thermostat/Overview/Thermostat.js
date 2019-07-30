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
                <i className="fa fa-align-justify"></i><strong>Thermostat</strong>
              </CardHeader>
              <CardBody>
                Thermostat
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Thermostat;
