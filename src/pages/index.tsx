import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { PresentationIcons } from "@/components/PresentationIcons";
import { Box, Flex, HStack, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Flex justify="center" mt={20} mr="20px">
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
      <Flex mt={20} justify="center">
        <Box color="gray.600" borderTop="2px" width="90px" />
      </Flex>
      <Flex align="center" flexDir="column" mt="52px">
        <Text fontSize="4xl">Vamos nessa?</Text>
        <Text fontSize="4xl">Então escolha seu continente</Text>
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
          <Image src="/images/europe.jpg" alt="europe image" />
          <Box position="absolute" textAlign="center" top="170px" width="100%">
            <Text fontSize="5xl" fontWeight="700" color="gray.200">
              Europa
            </Text>
            <Text fontSize="2xl" fontWeight="700" color="gray.200">
              O continente mais antigo.
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/america.jpg" alt="america image" />
          <Box position="absolute" textAlign="center" top="170px" width="100%">
            <Text fontSize="5xl" fontWeight="700" color="gray.200">
              America
            </Text>
            <Text fontSize="2xl" fontWeight="700" color="gray.200">
              Diversos climas, locais e paisagens
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/asia.jpg" alt="asia image" />
          <Box position="absolute" textAlign="center" top="170px" width="100%">
            <Text fontSize="5xl" fontWeight="700" color="gray.200">
              Asia
            </Text>
            <Text fontSize="2xl" fontWeight="700" color="gray.200">
              Onde o antigo e o novo se misturam
            </Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/africa.jpg" alt="africa image" />
          <Box position="absolute" textAlign="center" top="170px" width="100%">
            <Text fontSize="5xl" fontWeight="700" color="gray.200">
              Africa
            </Text>{" "}
            <Text fontSize="2xl" fontWeight="700" color="gray.200">
              Entre em maior contato com a natureza
            </Text>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/images/oceania.jpg" alt="oceania image" />
          <Box position="absolute" textAlign="center" top="170px" width="100%">
            <Text fontSize="5xl" fontWeight="700" color="gray.200">
              Oceania
            </Text>
            <Text fontSize="2xl" fontWeight="700" color="gray.200">
              O continente mais isolado.
            </Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
