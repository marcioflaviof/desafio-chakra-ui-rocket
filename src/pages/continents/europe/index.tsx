import { Header } from "@/components/Header";
import { Box, Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";

export default function Europe() {
  return (
    <>
      <Header />
      <Box position="relative">
        <Flex overflow="hidden" h={500} align="center" justify="center">
          <Image
            src="/images/europe/banner.png"
            alt="London clocktower"
            position="absolute"
            height="500px"
            width="1440px"
            zIndex={-1}
          />
          <Text
            color="white.700"
            fontSize="5xl"
            fontWeight="600"
            m="270px 995px 0 0"
          >
            Europa
          </Text>
        </Flex>
        <Flex justify="center" align="center" mt="20">
          <Box w="600px" mr="20">
            <Text fontSize="2xl" fontWeight="400" textAlign="justify">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>

          <Flex>
            <HStack spacing="5rem">
              <Flex flexDir="column" align="center">
                <Text fontSize="4xl" color="yellow.900">
                  50
                </Text>
                <Text fontSize="2xl">países</Text>
              </Flex>

              <Flex flexDir="column" align="center">
                <Text fontSize="4xl" color="yellow.900">
                  60
                </Text>
                <Text fontSize="2xl">línguas</Text>
              </Flex>

              <Flex flexDir="column" align="center">
                <Text fontSize="4xl" color="yellow.900">
                  27
                </Text>
                <Text fontSize="2xl">cidades +100</Text>
              </Flex>
            </HStack>
          </Flex>
        </Flex>
        <Flex mt="20" justify="center" w="100vw">
          <Text fontSize="4xl" mr="935px">
            Cidades +100
          </Text>
        </Flex>

        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          mx={[0, 0, 0, "0", "32", "72"]}
          mt="10"
        >
          <Flex display="column" background="white.900" maxW="255px">
            <Image src="/images/europe/cities/london.png" alt="london" />
            <Flex justify="space-between" m="5">
              <Flex display="column" fontFamily="Barlow">
                <Text fontWeight="600" fontSize="xl">
                  Londres
                </Text>
                <Text fontWeight="500" fontSize="md" color="gray.400">
                  Reino Unido
                </Text>
              </Flex>
              <Image
                src="/images/europe/icons/england.jpg"
                alt="new england"
                borderRadius="50%"
                w="30px"
                h="30px"
                mt="4"
              />
            </Flex>
          </Flex>

          <Flex display="column" background="white.900" maxW="255px">
            <Image src="/images/europe/cities/paris.png" alt="paris" />
            <Flex justify="space-between" m="5">
              <Flex display="column" fontFamily="Barlow">
                <Text fontWeight="600" fontSize="xl">
                  Paris
                </Text>
                <Text fontWeight="500" fontSize="md" color="gray.400">
                  França
                </Text>
              </Flex>
              <Image
                src="/images/europe/icons/france.jpg"
                alt="france"
                borderRadius="50%"
                w="30px"
                h="30px"
                mt="4"
              />
            </Flex>
          </Flex>

          <Flex display="column" background="white.900" maxW="255px">
            <Image src="/images/europe/cities/rome.png" alt="rome" />
            <Flex justify="space-between" m="5">
              <Flex display="column" fontFamily="Barlow">
                <Text fontWeight="600" fontSize="xl">
                  Roma
                </Text>
                <Text fontWeight="500" fontSize="md" color="gray.400">
                  Itália
                </Text>
              </Flex>
              <Image
                src="/images/europe/icons/italy.jpg"
                alt="italy"
                borderRadius="50%"
                w="30px"
                h="30px"
                mt="4"
              />
            </Flex>
          </Flex>

          <Flex display="column" background="white.900" maxW="255px">
            <Image src="/images/europe/cities/prague.png" alt="prague city" />
            <Flex justify="space-between" m="5">
              <Flex display="column" fontFamily="Barlow">
                <Text fontWeight="600" fontSize="xl">
                  Praga
                </Text>
                <Text fontWeight="500" fontSize="md" color="gray.400">
                  República Tcheca
                </Text>
              </Flex>
              <Image
                src="/images/europe/icons/czech-republic.jpg"
                alt="czech republic"
                borderRadius="50%"
                w="30px"
                h="30px"
                mt="4"
              />
            </Flex>
          </Flex>

          <Flex display="column" background="white.900" maxW="255px">
            <Image src="/images/europe/cities/amsterdan.png" alt="amsterdan" />
            <Flex justify="space-between" m="5">
              <Flex display="column" fontFamily="Barlow">
                <Text fontWeight="600" fontSize="xl">
                  Amsterdã
                </Text>
                <Text fontWeight="500" fontSize="md" color="gray.400">
                  Holanda
                </Text>
              </Flex>
              <Image
                src="/images/europe/icons/netherlands.jpg"
                alt="netherlands"
                borderRadius="50%"
                w="30px"
                h="30px"
                mt="4"
              />
            </Flex>
          </Flex>
        </Grid>
      </Box>
    </>
  );
}
