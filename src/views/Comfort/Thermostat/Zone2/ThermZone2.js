import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Bar, Line } from 'react-chartjs-2';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Average Energy Usage',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20, 35, 40, 42, 45, 70, 80, 78, 79, 65, 33, 18],
    },
  ],
};

class ThermZone2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: 78,
      ThermHeadState: "p-3 mb-2 bg-success text-white"
    };

    this.handleDownClick = this.handleDownClick.bind(this);
    this.handleUpClick = this.handleUpClick.bind(this);
    this.toggleOn = this.toggleOn.bind(this);
  }

  toggleOn() {
    if (this.state.ThermHeadState == "p-3 mb-2 bg-success text-white") {
      this.setState (state => ({
        ThermHeadState: "p-3 mb-2 bg-dark text-white"
      }))}
    else {// (this.state.ThermHeadState = "p-3 mb-2 bg-dark text-white") {
      this.setState (state => ({
        ThermHeadState: "p-3 mb-2 bg-success text-white"
      }))}
  }

  handleUpClick(){
    this.setState (state => ({
      currentTemp: state.currentTemp + 1
    }));
  }

  handleDownClick() {
    this.setState (state => ({
      currentTemp: state.currentTemp - 1
    }));
  }
  
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
              <div class={this.state.ThermHeadState}>
                <strong>Thermostat | Room 1</strong>
                <div className="card-header-actions">
                  <AppSwitch className={'float-right mb-0'} label checked color={'info'} size={'sm'}  onClick={this.toggleOn}/>
                </div>
                </div>
              </CardHeader>
              <CardBody>
                <div class="row">
                <div class="col-sm">
                <Card>
                  <CardBody>
                  <div class="card-body">
                    <h4 class="card-title">Current Temperature</h4>
                    <button class="btn btn-primary" onClick={this.handleUpClick}><i class="cui-chevron-top"></i></button>
                    <h5 class="card-text">{this.state.currentTemp}° F</h5>
                    <button class="btn btn-primary" onClick={this.handleDownClick}><i class="cui-chevron-bottom"></i></button>
                  </div>
                  </CardBody>
                </Card>
                </div>
                <div class="col-sm">
                <Card>
                  <CardBody>
                  <div class="card-body">
                    <h4 class="card-title">Mode</h4>
                    <button class="btn btn-primary">Heat</button>
                    <button class="btn btn-primary">Cool</button>
                    </div>
                  </CardBody>
                </Card>
                </div>
                <div class="col-sm">
                <Card>
                  <CardBody>
                  <div class="card-body">
                    <h4 class="card-title"><i class="cui-sun"></i> Outside Temperature (85027)</h4>                    
                    <h5 class="card-text">105° F</h5>                  
                    </div>
                  </CardBody>
                </Card>
                </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <Card>
                  <CardHeader>
                    Average Energy Usage 2018
                  </CardHeader>
                  <CardBody>
                    <div className="chart-wrapper">
                      <Line data={line}/>
                    </div>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ThermZone2;
