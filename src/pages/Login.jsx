import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loginHandler = async () => {
    console.log(email, password) 
    navigation('/')
  }
  return (
    <Container size={800} my={80} style={{textAlign: 'start'}}>
      <Title
        align="center"
      
      >
        <span   className="gradient-text">GymGenie</span> | Login account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Don't have an account?{' '}
        <Anchor size="sm" component="button">
      
        <Link to="/signup">Signup</Link>
      
          
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
     
       
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
       
        <Button fullWidth mt="xl" size="lg" onClick={loginHandler} color='indigo'>
          Login
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;