import NavbarTop from '../components/Navbar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css'
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const value = 1128537;
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let intervalId;

    if (currentValue < value) {
      intervalId = setInterval(() => {
        setCurrentValue(prevValue => prevValue + 1000);
      }, 0.01);
    } else {
      setCurrentValue(value);
    }

    return () => clearInterval(intervalId);
  }, [currentValue, value]);


  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    background: isHovered
      ? 'linear-gradient(to bottom right, #248c24, #3c7cfc)'
      : 'linear-gradient(to bottom right, #248c24, #3c7cfc)',
    color: '#fff',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    transition: 'all 0.2s ease-in',
    fontWeight: 'bold',
    marginRight: "1rem  "
  };



  return (
    <>
      <NavbarTop />
      <Container style={{marginTop: '100px'}}>
      <Row style={{ textAlign: 'start'}}>
        <Col md={8}>
          <div className="gradient-text1">Get Fit with AI</div>
          <p className="small-text">Introducing GymGenie: tailored workout routines for <span className="gradient-text1" style={{fontSize: '1.7rem'}}> you </span> </p>
          <p className="small-text">✨ Just Released ✨</p>
          <Card className="my-3 shadow">
            <Card.Body>
              <Card.Title className="small-text" style={{color: 'blue'}}>GymGenie MealPlan 🥗 </Card.Title>
              <Card.Text className="small-text">Supercharge your personalized workout with AI-powered meal plans tailored to your fitness goals</Card.Text>
            </Card.Body>
          </Card>

          <Card className="my-3 shadow">
            <Card.Body>
              <Card.Title className="small-text" style={{color: 'green'}}> MacroTracker ✏️ </Card.Title>
              <Card.Text className="small-text"> Effortlessly enter your food and snacks and get an instant analysis of calories, protein, carbohydrates, and fats  </Card.Text>
            </Card.Body>
          </Card>
          
          <p><span className="gradient-text1" style={{fontSize: '1.7rem'}}> {currentValue.toLocaleString()} </span> workout routines generated so far</p>
          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate('/workouts')}
          >
            Get Started to Choose Workouts
          </button>
          <button
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate('/settings')}
          >
            Settings
          </button>
        </Col>
        <Col md={4}>
          <img src="../../genie.png" alt="Placeholder" height='100%' width='120%'/>
        </Col>
      </Row>
      <br />
      <br />
      
      
    </Container>
    <div className="hero-section">
        <br />
        <br />
        <div className="bigger-text">
          Trusted by people across the world
        </div>
        <p className="description-text">
          GymGenie has helped people in USA, India, Canada, UAE, and 80 more countries
        </p>
        
        <Col>
        
            <Card className="text-center" style={{backgroundColor: '#10142c', color: '#fff'}}>
                <Card.Body className="bigger-text" >
                  100% <span style={{fontSize: '1rem'}}>Completion   |   </span>24/7<span style={{fontSize: '1rem'}}>Delivery   |   </span>100k <span style={{fontSize: '1rem'}}>Routines Generated </span>
                </Card.Body>
            </Card>
            <br />
            <br />
        </Col>
    </div>
    <Card className="text-center">
      <Card.Header className="small-text">Featured</Card.Header>
      <Card.Body>
        <Card.Title className="small-text" >SUBSCRIBE TO OUR NEWSLETTER</Card.Title>
        <Card.Text>
          The latest news, articles, and resources, sent to your inbox weekly.
        </Card.Text>
        <Button variant="primary"  >Subscribe</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2023 GymGenie. All rights reserved.</Card.Footer>
    </Card>

    </>
  );
}

export default Home;
