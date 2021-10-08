import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <>
      <Flex h={100} align={"center"} justify={"center"}>
        <Image src="/Logo.svg" alt="Logo" />
      </Flex>
    </>
  );
}
