import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box position="relative">
      <Flex justify="space-between" align="center" overflow="hidden" h={335}>
        <Image
          src="/images/Background.svg"
          alt="background"
          minW="100%"
          minH="100%"
          position="absolute"
          zIndex={-1}
        />

        <Flex direction="column" w={470} ml="12.5rem">
          <Text color="white.700" fontSize="4xl" fontWeight="700">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize="lg" mt="20px" color="white.700">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Box>
          <Image
            src="/images/Airplane.svg"
            alt="airplane image"
            transform="rotate(3deg)"
            position="absolute"
            right={["0", "0", "0", "0", "100px", "230px"]}
            top="65px"
          />
        </Box>
      </Flex>
    </Box>
  );
}
