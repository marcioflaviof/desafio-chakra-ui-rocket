import { Header } from "@/components/Header";
import { Flex, Text, Image, Box } from "@chakra-ui/react";

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
      </Box>
    </>
  );
}
