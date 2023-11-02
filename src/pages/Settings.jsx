import NavbarTop from '../components/Navbar';
import { Container, Button } from 'react-bootstrap';
import './Home.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Paper, Group, TextInput, PasswordInput, Switch } from '@mantine/core';

function Settings() {
  const location = useLocation();
  console.log(location);
  const [email, setEmail] = useState('test@gmail.com')
  const [firstName, setFirstName] = useState('FirstTest')
  const [lastName, setLastName]  = useState('LastTest')
  const [password, setPassword] = useState('TestPassword')
  const [confirmPassword, setConfirmPassword] = useState('TestPassword')
  const registerHandler = async () => {
    console.log(firstName, lastName, email, password, confirmPassword) 
    //navigation('/login')
  }


  return (
    <>
      <NavbarTop />
     
      <Container style={{marginTop: '100px'}}>
      <p className="normal-text">✨ Settings ✨</p>
        <Paper withBorder shadow="xl" p={30} mt={30} radius="md">
          <Group>
              <TextInput 
                label="first Name" 
                name="firstName" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder="First Name" 
                size="lg"
                required 
                style={{width: '47%'}}
              />
              <TextInput 
                label="Last Name" 
                name="lastName" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Last Name" 
                size="lg"
                required 
                style={{width: '50%'}}
              />
          </Group>
        
          <TextInput 
            label="Email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Test@gmail.com" 
            size="lg"
            required 
          />
          <PasswordInput 
            label="Password" 
            value={password}
            name="password" 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Your password" 
            size="lg"
            required mt="md" 
          />
          <PasswordInput 
            label="Confirm Password" 
            value={confirmPassword}
            name="password" 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm password" 
            size="lg"
            required mt="md" 
          />
          <br />
          <Group >
          <span style={{fontWeight: '500', fontSize: '1.5rem', marginBottom: '5px'}}>
             Notifications Toggle 
          </span>
          <Switch size="lg">
            
          </Switch>
          </Group>
        
          <br />
          <Button fullWidth mt="xl" size="lg" onClick={registerHandler} color='indigo'>
            Update
          </Button>
        </Paper>
     </Container>
    </>
  );
}

export default Settings;
