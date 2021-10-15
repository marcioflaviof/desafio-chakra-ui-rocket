import { Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { PresentationIcons } from ".";

const presentationIconsContent = [
  {
    iconPath: "images/cocktail.svg",
    alt: "cocktail image",
    text: "vida noturna",
  },

  {
    iconPath: "images/Group.svg",
    alt: "beach image",
    text: "praia",
  },

  {
    iconPath: "images/building.svg",
    alt: "building image",
    text: "moderno",
  },

  {
    iconPath: "images/museum.svg",
    alt: "museum image",
    text: "clássico",
  },

  {
    iconPath: "images/earth.svg",
    alt: "earth image",
    text: "e mais...",
  },
];

export function PresentationIconsDesktop() {
  const display = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Flex justify="center" mt={20} mr="20px" display={display}>
      <HStack spacing="32">
        {presentationIconsContent.map(({ iconPath, alt, text }) => (
          <PresentationIcons key={text} src={iconPath} alt={alt} text={text} />
        ))}
      </HStack>
    </Flex>
  );
}
