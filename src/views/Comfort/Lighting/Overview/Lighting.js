import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Lighting extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Lighting</strong>
              </CardHeader>
              <CardBody>
                Lighting
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Lighting;
