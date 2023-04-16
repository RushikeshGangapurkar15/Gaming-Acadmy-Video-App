import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function Videos() {
  const videosArr = [
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: '100%' }}
        ></video>

        <VStack
          alignItems={'flex-start'}
          padding={'8'}
          w={'full'}
          overflowX={'auto'}
        >
          <Heading>Sample videos</Heading>
          <Text>
            This is Video Discription : Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quisquam rerum dolor, quos eius inventore officia
            commodi adipisci at ab et unde sapiente esse dignissimos placeat
            nulla nostrum itaque reprehenderit, tempore ducimus minima harum.
            Necessitatibus qua!{' '}
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme="orange"
            onClick={() => setVideoSrc(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
}

export default Videos;
