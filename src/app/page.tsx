'use client';

import TextUpdown from '@/components/animations/text-updown/TextUpdown';
import Logo from '@/components/ui/Logo';
import {Box, Center, Text, VStack} from '@chakra-ui/react';

export default function Home() {
  return (
    <main>
      <VStack
        w="100vw"
        h="100vh"
        justifyContent="space-between"
        pos="relative"
        bg="blue.900"
        p={4}
      >
        <Center h="20%" pos="relative" zIndex={3}>
          <Logo boxSize={16} />
        </Center>

        <TextUpdown
          textProps={{
            fontWeight: 400,
            fontSize: 40,
            letterSpacing: 20,
            color: 'blue.50',
            marginRight: '-20px',
          }}
          pos="relative"
          zIndex={2}
          // marginTop={-16}
          // maxH={'60%'}
          textArray={['EXPLORA', 'CONECTA', 'ALCANZA']}
        />

        <Center h="20%" pos="relative" zIndex={3}>
          <Text fontWeight="light" color="blue.100" fontSize="xs">
            Coming soon...
          </Text>
        </Center>

        <Box
          pos="absolute"
          w="100%"
          h="100%"
          zIndex={2}
          bgImg={'url("./img/bg-mountain.png")'}
          bgSize="cover"
          bgPos="bottom"
        />
        <Box
          pos="absolute"
          w="100%"
          h="100%"
          zIndex={1}
          bgImg={'url("./img/bg-mountain-light.png")'}
          bgSize="cover"
          bgPos="bottom"
        />
      </VStack>
    </main>
  );
}
