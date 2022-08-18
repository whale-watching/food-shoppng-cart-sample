import {
  ChakraProvider,
  Container,
  VStack,
  Heading,
  Text,
  Box,
  Icon,
} from '@chakra-ui/react';
import { AppProps } from 'next/app';
import {
  RiWhatsappFill,
  RiInstagramFill,
  RiFacebookBoxFill,
} from 'react-icons/ri';

import { Image } from '../src/components/Image';
import theme from '../src/styles/theme';
import ExternalLink from '../src/components/ExternalLInk';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box as="header" backgroundColor="black" padding={4} position="relative">
        <Box opacity={0.5}>
          <Image
            alt=""
            objectFit="cover"
            src="https://user-images.githubusercontent.com/4708484/115153767-97820400-a045-11eb-9fb9-40fec95c010d.jpg"
          />
        </Box>
        <VStack position="relative" zIndex={1}>
          <Box display="flex" height={36} width={36}>
            <Image
              priority
              alt="Logo"
              dimensions={[400, 400]}
              src="/logo.png"
            />
          </Box>

          <Heading color="white">BombaiMTY</Heading>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Text color="white" textAlign="center">
            Venezuelan Food 🇻🇪 - Boneless and Burgers 🔥
          </Text>

          <Box>
            <ExternalLink
              href="https://www.facebook.com/BombaiMTY/"
              icon={
                <Icon
                  _hover={{ fill: 'red' }}
                  as={RiFacebookBoxFill}
                  color="white"
                  h={6}
                  m={2}
                  w={6}
                />
              }
              title="Facebook"
            />
            <ExternalLink
              href="https://www.instagram.com/bombaimty/"
              icon={
                <Icon
                  _hover={{ fill: 'red' }}
                  as={RiInstagramFill}
                  color="white"
                  h={6}
                  m={2}
                  w={6}
                />
              }
              title="Instagram"
            />
            <ExternalLink
              href="https://wa.me/528129131222"
              icon={
                <Icon
                  _hover={{ fill: 'red' }}
                  as={RiWhatsappFill}
                  color="white"
                  h={6}
                  m={2}
                  w={6}
                />
              }
              title="Whatsapp"
            />
          </Box>
        </VStack>
      </Box>

      <Container maxW="container.lg" padding={4}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;
