import image from "./img/fondoedificio.gif";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Franchise = () => {
  return (
    <Flex
      backgroundImage={image}
      id="contact"
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      backgroundSize={"100%"}
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
              color="white"
            >
              Quieres unirte a nuestro equipo de Asesores?
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
                opacity={0.8}
              >
                <VStack spacing={5}>
                  <Box display="flex" gap={4}>
                    <FormControl isRequired>
                      <FormLabel>Nombre</FormLabel>

                      <InputGroup>
                        {/* <InputLeftElement children={<BsPerson />} /> */}
                        <Input
                          type="text"
                          name="name"
                          placeholder="Tu Nombre"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Apellido</FormLabel>

                      <InputGroup>
                        {/* <InputLeftElement children={<BsPerson />} /> */}
                        <Input
                          type="text"
                          name="subname"
                          placeholder="Tu Apellido"
                        />
                      </InputGroup>
                    </FormControl>
                  </Box>

                  <Box display="flex" gap={4}>
                    <FormControl isRequired>
                      <FormLabel>Edad</FormLabel>

                      <InputGroup>
                        {/* <InputLeftElement children={<BsPerson />} /> */}
                        <Input type="text" name="age" placeholder="Tu edad" />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
                        <Input
                          type="email"
                          name="email"
                          placeholder="Tu email"
                        />
                      </InputGroup>
                    </FormControl>
                  </Box>

                  <FormControl isRequired>
                    <FormLabel>CV</FormLabel>

                    <InputGroup>
                      {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
                      <Input type="file" name="cv" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Mensaje</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Tu mensaje"
                      rows={5}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    width={170}
                    colorScheme="blue"
                    bg="red.500"
                    color="white"
                    _hover={{
                      bg: "red.300",
                    }}
                  >
                    Enviar
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>

          <VStack
            paddingTop="40px"
            spacing="2"
            alignItems="flex-start"
            color={"gray.300"}
          >
            <Heading as="h2">What we write about</Heading>
            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
              pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
              imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
              sapien. Suspendisse placerat vulputate posuere. Curabitur neque
              tortor, mattis nec lacus non, placerat congue elit.
            </Text>

            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
              pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
              imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
              sapien. Suspendisse placerat vulputate posuere. Curabitur neque
              tortor, mattis nec lacus non, placerat congue elit.
            </Text>

            <Text as="p" fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
              pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
              imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
              sapien. Suspendisse placerat vulputate posuere. Curabitur neque
              tortor, mattis nec lacus non, placerat congue elit.
            </Text>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};
export default Franchise;
