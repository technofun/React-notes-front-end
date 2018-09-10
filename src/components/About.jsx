import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/30688524_442741559515521_6997447781925257216_n.jpg" className="img-thumbnail" width="200"/>
            <h3>NuMan iJaz</h3>
            <p>Student of BS(CS). Web and Mobile-Application developer with the latest technologies. Node.js React.js.</p>
            <p>I have much knowledge about React.js Node.js React-Native Android studio </p>
            <p>before started my career in I.T ,I was a student of hotel management and i worked in a five star hotel and club as a front desk manager.</p>
            <p>but i was more interested in Computer Science and started Graduation in Computer Science  and adobt it as a professional career.Now i am Working in it and enjoying my life as a developer.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
