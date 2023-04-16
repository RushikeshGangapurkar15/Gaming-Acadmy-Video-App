import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscibe Our Plan
          </Heading>
          <HStack
            border={'2px solid white'}
            borderRadius={'25px 25px 25px 25px'}
            // py={'2'}
          >
            <Input
              placeholder="Enter Email Id"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'2'}
              colorScheme={'orange'}
              variant={'solid'}
              borderRadius={'0 20px 20px 0'}
            >
              <b>{'>'}</b>
            </Button>
          </HStack>
        </VStack>

        <VStack w={'full'} borderLeft={['none', '1px solid white']}>
          <Heading
            textColor="ButtonFace"
            textTransform={'uppercase'}
            textAlign={'center'}
          >
            Gaming Acadmy
          </Heading>

          <Text>Copyright © 2023. Made with ♥ by RUSHIKESH</Text>
        </VStack>
        <VStack w={'full'} borderLeft={['none', '1px solid white']}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <HStack>
            <Button variant={'link'} colorScheme="orange">
              <a target="blank" href="/">
                LinkedIn
              </a>
            </Button>

            <Button variant={'link'} colorScheme="orange">
              <a target="blank" href="/">
                GitHub
              </a>
            </Button>

            <Button variant={'link'} colorScheme="orange">
              <a target="blank" href="/">
                Twitter
              </a>
            </Button>

            <Button variant={'link'} colorScheme="orange">
              <a target="blank" href="/">
                Youtube
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
