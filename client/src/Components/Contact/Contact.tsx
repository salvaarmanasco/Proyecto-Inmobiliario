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
//import emailjs from 'emailjs-com';
import emailjs from "@emailjs/browser";
import { useState } from "react";

interface TemplateParams {
  to_email: string;
  to_name: string;
  message: string;
  [key: string]: any;
}

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail({ email, name, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = ({
    email,
    name,
    message,
  }: {
    email: string;
    name: string;
    message: string;
  }): void => {
    let templateParams: TemplateParams = {
      to_email: email,
      to_name: name,
      message: message,
    };
    emailjs
      .send(
        "service_xyto8bh" || "",
        "template_i0zdc59" || "",
        templateParams,
        "nhM0DlwGbTJ7yikMd" || ""
      )
      .then(
        function (response) {
          console.log("Correo enviado con éxito: " + response.status);
        },
        function (error) {
          console.log("Error al enviar el correo: " + JSON.stringify(error));
        }
      );
  };

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

            <form onSubmit={handleSubmit}>
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
                        <Input
                          type="text"
                          name="name"
                          placeholder="Tu Nombre"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Tu Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Mensaje</FormLabel>

                      <Textarea
                        placeholder="Escribe tu mensaje aquí..."
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </FormControl>

                    <Button type="submit" colorScheme="blue" size="lg" w="full">
                      Enviar
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </form>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default Contact;
