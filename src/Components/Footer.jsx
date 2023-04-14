import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend, AiFillYoutube, AiFillInstagram, AiFillGithub, AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe For Latest Update
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Type Your Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          pt={['5', '0']}
        >
          <Heading
            textAlign={'center'}
            textTransform={'uppercase'}
            color={'wh'}
          >
            Video hub
          </Heading>
          <Text>All Rights Received</Text>
        </VStack>
        <VStack w={'full'} pt={['5', '0']}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social media
          </Heading>
          <Button
            variant={'link'}
            colorScheme={'white'}
            _hover={{ color: 'red' }}
          >
            <a target={'blank'} href="https://www.youtube.com/">
              <AiFillYoutube size={'35'} />
            </a>
          </Button>
          <Button
            variant={'link'}
            colorScheme={'white'}
            _hover={{ color: '#d62976 ' }}
          >
            <a target={'blank'} href="https://www.instagram.com/maaviz__fg">
              <AiOutlineInstagram size={'35'} />
            </a>
          </Button>
          <Button
            variant={'link'}
            colorScheme={'white'}
            _hover={{ color: 'gray' }}
          >
            <a target={'blank'} href="https://github.com/Maaviz">
              <AiOutlineGithub size={'35'} />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
