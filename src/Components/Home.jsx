import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Asssets/1.jpg';
import img2 from '../Asssets/2.jpg';
import img3 from '../Asssets/3.jpg';
import img4 from '../Asssets/4.jpg';
import img5 from '../Asssets/5.jpg';
import img9 from '../Asssets/ser/1.jpg';
import img6 from '../Asssets/ser/2.jpg';
import img7 from '../Asssets/ser/3.jpg';
import img8 from '../Asssets/ser/4.jpg';

const Home = () => {
  return (
    <Box>
      <MyCarousel></MyCarousel>

      <Container maxW={'container.xl'} minH={'100vh'} p={'25'} marginTop={'10'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'1px solid'}
          m="auto"
          marginBottom={'5'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'Center'}
          direction={['column', 'row']}
        >
          <Image src={img9} w={['100px', '300px']} />
          <Image src={img6} w={['100px', '300px']} />
          <Image src={img7} w={['100px', '300px']} />
          <Image src={img8} w={['100px', '300px']} />
        </Stack>

        <Text direction={'column'} p={'10'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          repudiandae sunt explicabo, quisquam incidunt voluptatibus soluta
          quod. Ullam atque laborum saepe soluta modi sint? Molestiae animi
          natus est eum labore Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Modi excepturi quasi sapiente, voluptas porro, amet
          optio enim animi architecto labore repellat distinctio eligendi.
          Expedita, eaque beatae? Nulla, magni! Atque vero labore veniam ipsam
          eum omnis dicta dolore assumenda incidunt voluptas voluptates nam fuga
          ipsa, ea dolores expedita repellendus alias tempora quisquam? Veniam
          recusandae iste praesentium ducimus doloremque dolores consequatur.
          Velit voluptatibus omnis error, dignissimos doloribus voluptatum
          ducimus quam suscipit ratione ipsa nemo, laboriosam dolorem eum nisi
          pariatur sequi aperiam saepe? Sunt quisquam quia excepturi
          exercitationem tenetur quis optio enim iure corporis earum, animi
          adipisci voluptates a dolores rem labore possimus.
        </Text>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img5} />
    </Box>
  </Carousel>
);

export default Home;
