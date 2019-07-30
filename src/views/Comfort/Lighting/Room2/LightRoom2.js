import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class LightRoom2 extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Lighting Room 2</strong>
              </CardHeader>
              <CardBody>
                LightRoom2
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LightRoom2;
