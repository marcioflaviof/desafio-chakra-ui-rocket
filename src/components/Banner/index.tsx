import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box position="relative">
      <Flex
        justify="space-between"
        align="center"
        h={{ base: "163px", md: "335px" }}
      >
        <Image
          src="/images/background.png"
          alt="background"
          minW="100%"
          minH="100%"
          position="absolute"
          zIndex={-1}
        />

        <Flex
          direction="column"
          w={{ md: "470px" }}
          ml={{ base: "1rem", md: "12.5rem" }}
        >
          <Text
            color="white.700"
            fontSize={{ base: "xl", md: "4xl" }}
            fontWeight={{ base: "500", md: "700" }}
          >
            5 Continentes,
            <Text display={{ base: "inline-block", md: "inline" }}>
              infinitas possibilidades.
            </Text>
          </Text>

          <Box>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              mt="20px"
              color="white.700"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
        </Flex>

        <Box>
          <Image
            src="/images/Airplane.svg"
            alt="airplane image"
            transform="rotate(3deg)"
            position="absolute"
            right={["0", "0", "0", "0", "100px", "230px"]}
            top="65px"
            display={{ base: "none", md: "block" }}
          />
        </Box>
      </Flex>
    </Box>
  );
}
