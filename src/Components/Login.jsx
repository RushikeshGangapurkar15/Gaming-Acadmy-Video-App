import {
  Container,
  Heading,
  VStack,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container p={'16'} h={'100vh'} maxW={'container.xl'}>
      <form>
        <VStack
          m={'auto'}
          my={'16'}
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
        >
          <Heading>Welcome Back !!</Heading>

          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'orange.300'}
          />

          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'orange.300'}
          />

          <Button alignSelf={'end'} variant={'link'} alignContent={'right'}>
            <Link to={'/link'}>forget password?</Link>
          </Button>

          <Button colorScheme="orange" type="submit">
            LogIn
          </Button>

          <Text textAlign="right">
            New User?{' '}
            <Button alignSelf={'end'} variant={'link'} colorScheme="orange">
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
