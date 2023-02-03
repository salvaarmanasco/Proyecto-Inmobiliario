import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Heading>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Heading>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 10 }}
          pb={{ base: 20, md: 5 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            <Text as={"span"} color={"red.500"}>
              R
            </Text>
            ealiza{" "}
            <Text as={"span"} color={"red.500"}>
              A
            </Text>
            hora{" "}
            <Text as={"span"} color={"red.500"}>
              E
            </Text>
            se{" "}
            <Text as={"span"} color={"red.500"}>
              S
            </Text>
            ueño
          </Heading>
        </Stack>
      </Container>
    </>
  );
}
