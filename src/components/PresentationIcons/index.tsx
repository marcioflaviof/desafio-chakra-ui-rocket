import { Flex, Image, Text } from "@chakra-ui/react";

type PresentationIconsType = {
  src: string;
  alt: string;
  text: string;
};

export function PresentationIcons({ src, alt, text }: PresentationIconsType) {
  return (
    <Flex flexDir="column" align="center">
      <Image src={src} alt={alt} />
      <Text fontSize="md" fontWeight="600" mt={6}>
        {text}
      </Text>
    </Flex>
  );
}
