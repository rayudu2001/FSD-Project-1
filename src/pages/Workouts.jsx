import NavbarTop from '../components/Navbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css'
import {useState} from 'react';
import { Link } from 'react-router-dom';

function Workout() {
  const data = [1,2,3,4,5,6];
  const [added, setAdded] = useState([]);
  let array = [];
  data.forEach((item, index) => {
    array.push("Add to Profile");
  })  
  const [text, setText] = useState(array);

  const addToProfile = (index) => {
     let dumArray = [...text];
     dumArray[index] = "Added ✨";
     setText(dumArray);
     setAdded([...added, index]);
  }
  return (
    <>
      <NavbarTop />
      <Container style={{marginTop: '100px'}}>
      <Col style={{ textAlign: 'start'}}>
      <p className="normal-text">✨ Workouts ✨</p>
        <Row md={3} >
        {
            data.map((item, index) => {
                return (
                    <Card className="mx-3 my-3 shadow-lg" style={{width: '30%'}} key={index}>
                        <Card.Body> 
                        <Card.Title className="small-text" >Workout-{index+1}  </Card.Title>
                        <img src="../../genie.png" alt="Placeholder" img-fluid/>
                        <Card.Text className="small-text">This is a small description for the workout - {index+1}</Card.Text>
                        </Card.Body>
                        <div className="d-flex justify-content">
                            <Button style={{fontWeight: '700'}} onClick={() => addToProfile(index)}>
                                {text[index]}
                            </Button>
                            {
                                added.includes(index) ? <Link to="/profile" state={{ ind: added }}><Button style={{fontWeight: '700'}} className="mx-3">Check Profile</Button></Link> : null
                            }
                        </div>
                        
                        <br />
                  </Card>
                ) 
            })
        } 
          

          
        
        </Row>
    
      </Col>
     </Container>
    </>
  );
}

export default Workout;
