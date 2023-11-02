import NavbarTop from '../components/Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  console.log(location);
  const data = location.state ? location.state.ind : null;


  return (
    <>
      <NavbarTop />
      <Container style={{marginTop: '100px'}}>
      <Col>
      <p className="normal-text">✨ Profile ✨</p>
        <Row md={3} >
          {
            data !== null ? data.map((item, index) => {
                  return (
                      <Card className="mx-3 my-3 shadow-lg" style={{width: '30%'}} key={index}>
                          <Card.Body> 
                          <Card.Title className="small-text" >Workout-{item+1}  </Card.Title>
                          <img src="../../genie.png" alt="Placeholder" img-fluid/>
                          <Card.Text className="small-text">This is a small description for the workout - {item+1}</Card.Text>
                          </Card.Body>
                          <br />
                    </Card>
                  ) 
              }) : null
          } 
        </Row>
      </Col>
     </Container>
    </>
  );
}

export default Profile;
