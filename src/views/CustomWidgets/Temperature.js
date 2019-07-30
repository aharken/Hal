import React, { Component } from 'react';
import {Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { AppSwitch } from '@coreui/react';

class Temperature extends React.Component {
    render() {
        return (
            <div class="card-body">
                <h4 class="card-title">Current Temperature</h4>
                <button class="btn btn-primary"><i class="cui-chevron-top"></i></button>
                <h5 class="card-text">78° F</h5>
                <button class="btn btn-primary"><i class="cui-chevron-bottom"></i></button>
            </div>
        )
    }
}