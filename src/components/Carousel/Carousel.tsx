import { Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

const carouselContent = [
  {
    imagePath: "/images/europe.jpg",
    alt: "europe image",
    title: "Europa",
    subtitle: "O continente mais antigo",
  },
  {
    imagePath: "/images/america.jpg",
    alt: "america image",
    title: "America",
    subtitle: "Diversos climas, locais e paisagens",
  },
  {
    imagePath: "/images/asia.jpg",
    alt: "asia image",
    title: "Asia",
    subtitle: "Onde o antigo e o novo se misturam",
  },
  {
    imagePath: "/images/africa.jpg",
    alt: "africa image",
    title: "Africa",
    subtitle: "Entre em maior contato com a natureza",
  },
  {
    imagePath: "/images/oceania.jpg",
    alt: "oceania image",
    title: "Oceania",
    subtitle: "O continente mais isolado",
  },
];

export function Carousel() {
  return (
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
      {carouselContent.map(({ imagePath, alt, title, subtitle }) => (
        <SwiperSlide key={title}>
          <Image src={imagePath} alt={alt} h={{ base: "250px", md: "450px" }} />
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
              {title}
            </Text>
            <Text
              fontSize={{ base: "sm", md: "2xl" }}
              fontWeight="700"
              color="gray.200"
            >
              {subtitle}
            </Text>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
