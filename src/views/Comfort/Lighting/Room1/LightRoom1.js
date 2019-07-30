import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class LightRoom1 extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Lighting Room 1</strong>
              </CardHeader>
              <CardBody>
                Lighting Room 1
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LightRoom1;
