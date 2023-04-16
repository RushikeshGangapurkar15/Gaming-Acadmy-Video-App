import {
  Container,
  VStack,
  Input,
  Text,
  Button,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';

import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'}>
      <form>
        <VStack
          m={'auto'}
          my={'16'}
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
        >
          {/* <Heading>Sign Up</Heading> */}

          <Avatar alignSelf={'center'} boxSize={'32'} />

          <Input
            placeholder={'Full Name'}
            type={'text'}
            required
            focusBorderColor={'orange.300'}
          />
          <Input
            placeholder={'Email Id'}
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

          <Button colorScheme="orange" type="submit">
            SignUp
          </Button>

          <Text textAlign="right">
            Already a User?{' '}
            <Button alignSelf={'end'} variant={'link'} colorScheme="orange">
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
