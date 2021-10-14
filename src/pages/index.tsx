import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { PresentationIcons } from "@/components/PresentationIcons";
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Home() {
  const display = useBreakpointValue({ base: "none", md: "flex" });
  const displayMobile = useBreakpointValue({ base: "flex", md: "none" });

  return (
    <>
      <Header />
      <Banner />

      {/* Desktop */}
      <Flex justify="center" mt={20} mr="20px" display={display}>
        <HStack spacing="32">
          <PresentationIcons
            src="images/cocktail.svg"
            alt="cocktail image"
            text="vida noturna"
          />
          <PresentationIcons
            src="images/Group.svg"
            alt="beach image"
            text="praia"
          />
          <PresentationIcons
            src="images/building.svg"
            alt="building image"
            text="moderno"
          />
          <PresentationIcons
            src="images/museum.svg"
            alt="museum image"
            text="classico"
          />
          <PresentationIcons
            src="images/earth.svg"
            alt="earth image"
            text="e mais..."
          />
        </HStack>
      </Flex>

      {/* Mobile */}

      <Flex justify="space-around" mt="9" display={displayMobile}>
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

      <Flex align="center" justify="center" mt="7" display={displayMobile}>
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

      <Flex mt={{ base: 9, md: 20 }} justify="center">
        <Box color="gray.600" borderTop="2px" width="90px" />
      </Flex>
      <Flex align="center" flexDir="column" mt={{ base: 8, md: 12 }}>
        <Text fontSize={{ base: "xl", md: "4xl" }} fontWeight="500">
          Vamos nessa?
        </Text>
        <Text fontSize={{ base: "xl", md: "4xl" }} fontWeight="500">
          Então escolha seu continente
        </Text>
      </Flex>
      <Swiper
        navigation
        pagination
        mousewheel
        cssMode
        keyboard
        className="mySwiper"
        style={{
          maxWidth: "1240px",
          width: "100%",
          marginTop: "80px",
          marginBottom: "80px",
        }}
      >
        <SwiperSlide>
          <Image
            src="/images/europe.jpg"
            alt="europe image"
            h={{ base: "250px", md: "450px" }}
          />
          <Box
            position="absolute"
            textAlign="center"
            top={{ base: "110px", md: "170px" }}
            width="100%"
          >
            <Text
              fontSize={{ base: "2xl", md: "5xl" }}
              fontWeight="700"
              color="gray.200"
            >
              Europa
            </Text>
            <Text
              fontSize={{ base: "sm", md: "2xl" }}
              fontWeight="700"
              color="gray.200"
            >
              O continente mais antigo.
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/america.jpg"
            alt="america image"
            h={{ base: "250px", md: "450px" }}
          />
          <Box
            position="absolute"
            textAlign="center"
            top={{ base: "110px", md: "170px" }}
            width="100%"
          >
            <Text
              fontSize={{ base: "2xl", md: "5xl" }}
              fontWeight="700"
              color="gray.200"
            >
              America
            </Text>
            <Text
              fontSize={{ base: "sm", md: "2xl" }}
              fontWeight="700"
              color="gray.200"
            >
              Diversos climas, locais e paisagens
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/asia.jpg"
            alt="asia image"
            h={{ base: "250px", md: "450px" }}
          />
          <Box
            position="absolute"
            textAlign="center"
            top={{ base: "110px", md: "170px" }}
            width="100%"
          >
            <Text
              fontSize={{ base: "2xl", md: "5xl" }}
              fontWeight="700"
              color="gray.200"
            >
              Asia
            </Text>
            <Text
              fontSize={{ base: "sm", md: "2xl" }}
              fontWeight="700"
              color="gray.200"
            >
              Onde o antigo e o novo se misturam
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/africa.jpg"
            alt="africa image"
            h={{ base: "250px", md: "450px" }}
          />
          <Box
            position="absolute"
            textAlign="center"
            top={{ base: "110px", md: "170px" }}
            width="100%"
          >
            <Text
              fontSize={{ base: "2xl", md: "5xl" }}
              fontWeight="700"
              color="gray.200"
            >
              Africa
            </Text>{" "}
            <Text
              fontSize={{ base: "sm", md: "2xl" }}
              fontWeight="700"
              color="gray.200"
            >
              Entre em maior contato com a natureza
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/oceania.jpg"
            alt="oceania image"
            h={{ base: "250px", md: "450px" }}
          />
          <Box
            position="absolute"
            textAlign="center"
            top={{ base: "110px", md: "170px" }}
            width="100%"
          >
            <Text
              fontSize={{ base: "2xl", md: "5xl" }}
              fontWeight="700"
              color="gray.200"
            >
              Oceania
            </Text>
            <Text
              fontSize={{ base: "sm", md: "2xl" }}
              fontWeight="700"
              color="gray.200"
            >
              O continente mais isolado.
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
