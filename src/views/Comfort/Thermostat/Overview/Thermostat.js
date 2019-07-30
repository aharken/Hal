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

class Thermostat extends Component {
  render() {
    return (
      <div className="animated fadeIn">
      <Row>
        <Col xs="12">
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
        </Col>
      </Row>
      <Row>
          <Col xs="12">
            <div class="row">
            <div class="col-sm">
            <Card>
              <CardHeader>
                <h2>Thermostat Overview</h2>
              </CardHeader>
              <CardBody>
                <div>
                <p1>You have two T2 Honeywell thermostats in your house hold, they were installed June 3rd 2019</p1>
                <br/>
                <p1>To find out more information on each of your theromstats go to the dashboard and select the zone of that device</p1>
                < br />
                < br />
              <button class="btn btn-primary">Add Thermostat</button>
              <button class="btn btn-primary">Remove Thermostat</button>
                
                </div>
              </CardBody>
            </Card>
            </div>
            <div class="col-sm">
            <Card>
              <CardHeader>
                <h2>Energy Effiency</h2>
              </CardHeader>
              <CardBody>
                <p2 style={{color:'red'}}>You have overall low effiency</p2>
               < br />

                <p2>Click this </p2>
                <a href="https://tenor.com/search/youre-fucked-gifs">Link</a>
                <p4> to get more information on how to be more energy effiencent</p4>
              </CardBody>
            </Card>
            </div>
            <div class="col-sm">
            <Card>
              <CardHeader>
                <h2>Other</h2>
              </CardHeader>
              <CardBody>
                <p3>For more device information either go to the dashboard tabs or follow this </p3>
                <a href="https://www.honeywellstore.com/store/category/thermostats.htm">Link</a>
              </CardBody>
            </Card>
            </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Thermostat;
