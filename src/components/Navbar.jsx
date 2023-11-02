import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css' ;
import { Link, useNavigate } from 'react-router-dom';

function NavbarTop() {
  const navigation = useNavigate();
  const toLogin = () => {
    navigation('/login');
  }
  const toSignup = () => {
    navigation('/signup');
  }
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow" style={{height: '80px'}}>
      <Container fluid>
        <Navbar.Brand href="#" className="gradient-text"><Link  to="/" >GymGenie</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" ><Link  to="/" className="navelement">Home</Link></Nav.Link>
            <Nav.Link href="#action2" ><Link  to="/" className="navelement">About</Link></Nav.Link>
            <Nav.Link href="#action3" ><Link  to="/" className="navelement">Pricing</Link></Nav.Link>
            <Nav.Link href="#action4" className="navelement">GymGenie MealPlan <span className="newLabel">NEW!</span></Nav.Link>
            <Nav.Link href="#action5" className="navelement">MacroTracker <span className="newLabel">NEW!</span></Nav.Link>
            
          </Nav>
          <div className='d-flex '>
            <Button variant="outline-primary" className="mx-2" size="md" onClick={toLogin}>Login</Button>
            <Button variant="primary" className="mx-2" size="xl" onClick={toSignup}>Signup</Button>
          </div>
     
         
     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;