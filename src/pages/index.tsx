import { Banner } from "@/components/Banner";
import { Carousel } from "@/components/Carousel/Carousel";
import { PresentationIconsDesktop } from "@/components/PresentationIcons/PresentationIconsDesktop";
import { PresentationIconsMobile } from "@/components/PresentationIcons/PresentationIconsMobile";
import { Header } from "@/components/shared/Header";
import { Box, Flex, Text } from "@chakra-ui/react";
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
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
      <PresentationIconsDesktop />
      <PresentationIconsMobile />

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

      <Carousel />
    </>
  );
}
