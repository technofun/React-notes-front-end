import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Jumbotron>
            <h2>BS(Hons)</h2>
            <p> Start where you are. Use what you have. Do what you can.</p>
            <Link to="/notes">
              <Button bsStyle="primary">Subjects</Button>
            </Link>
          </Jumbotron>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/25353626_861662437335721_4219417001564259275_n.jpg" circle className="profile-pic" />
              <h3>NaVid</h3>
              <p>Student of BS(CS). vicidial admin and Voipman in Avatar Dialer.With VoIP, analog voice calls are converted into packets of data</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/30688524_442741559515521_6997447781925257216_n.jpg" circle className="profile-pic" />
              <h3>NuMan</h3>
              <p>Student of BS(CS). Web and Mobile-Application developer with the latest technologies. Node.js React.js.  </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/cutmypic.png" circle className="profile-pic" />
              <h3>ArBab</h3>
              <p>Student of Networking.Cisco Certified Network Associate.CCNA is an information technology (IT) certification from Cisco. </p>
            </Col>
          </Row>
        </Grid>

        <div className="jumbotron text-center" id="myfooter47">
        <a href="https://www.facebook.com/technofun0/" className="foot">facebook</a>
        <a href="https://twitter.com/" className="foot">twitter</a>
        <a href="https://www.youtube.com/" className="foot">youtube</a>
          <p>@backbenchers</p>
        </div>
      
      </div>
    )
  }
}
