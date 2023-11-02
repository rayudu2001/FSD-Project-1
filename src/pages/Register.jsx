import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]  = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const registerHandler = async () => {
    console.log(firstName, lastName, email, password, confirmPassword) 
    navigation('/login')
  }
  return (
    <Container size={800} my={80} style={{textAlign: 'start'}}>
      <Title
        align="center"
      
      >
        <span   className="gradient-text">GymGenie</span> | Create account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component="button">
      
        <Link to="/login">Login</Link>
      
          
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
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
       
        <Button fullWidth mt="xl" size="lg" onClick={registerHandler} color='indigo'>
          Sign up
        </Button>
      </Paper>
    </Container>
  );
}

export default Register;