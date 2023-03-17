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
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex
      bg="url(https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
      align="center"
      justify="center"
      id="contact"
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
              Contactanos!
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
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>

                    <InputGroup>
                      {/* <InputLeftElement children={<BsPerson />} /> */}
                      <Input type="text" name="name" placeholder="Tu Nombre" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      {/* <InputLeftElement children={<MdOutlineEmail />} /> */}
                      <Input type="email" name="email" placeholder="Tu email" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Mensaje</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Tu mensaje"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
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
        </Box>
      </Box>
    </Flex>
  );
};
export default Contact;
