import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";

export function PresentationIconsMobile() {
  const display = useBreakpointValue({ base: "flex", md: "none" });

  return (
    <>
      <Flex justify="space-around" mt="9" display={display}>
        <Flex flexDir="column" align="center">
          <Flex align="center">
            <Box
              borderRadius="full"
              backgroundColor="yellow.900"
              h="8px"
              w="8px"
              mr="2"
            />
            <Text fontWeight="500" fontSize="md">
              vida norturna
            </Text>
          </Flex>
          <Flex align="center" mt="7">
            <Box
              borderRadius="full"
              backgroundColor="yellow.900"
              h="8px"
              w="8px"
              mr="2"
            />
            <Text fontWeight="500" fontSize="md">
              moderno
            </Text>
          </Flex>
        </Flex>

        <Flex flexDir="column">
          <Flex align="center">
            <Box
              borderRadius="full"
              backgroundColor="yellow.900"
              h="8px"
              w="8px"
              mr="2"
            />
            <Text fontWeight="500" fontSize="md">
              praia
            </Text>
          </Flex>
          <Flex align="center" mt="7">
            <Box
              borderRadius="full"
              backgroundColor="yellow.900"
              h="8px"
              w="8px"
              mr="2"
            />
            <Text fontWeight="500" fontSize="md">
              clássico
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex align="center" justify="center" mt="7" display={display}>
        <Box
          borderRadius="full"
          backgroundColor="yellow.900"
          h="8px"
          w="8px"
          mr="2"
        />
        <Text fontWeight="500" fontSize="md">
          e mais...
        </Text>
      </Flex>
    </>
  );
}
