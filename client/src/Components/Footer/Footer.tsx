import { ReactNode } from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      target="_blank"
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={8}>
          <Stack align={{ base: "flex-start", sm: "center", md: "flex-start" }}>
            <ListHeader>Compañia</ListHeader>
            <Link href={"#"}>Sobre nosotros</Link>
            <Link href={"#"}>Unite a nuestro equipo</Link>
            <Link href={"#"}>Contacto</Link>
          </Stack>

          <Stack align={{ base: "flex-start", sm: "center", md: "flex-start" }}>
            <ListHeader>Soporte</ListHeader>
            <Link href={"#"}>Preguntas frecuentes (FAQ)</Link>
            <Link href={"#"}>Testimonios</Link>
          </Stack>

          <Stack align={{ base: "flex-start", sm: "center", md: "flex-start" }}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Politica de cookies</Link>
            <Link href={"#"}>Politicas privadas</Link>
            <Link href={"#"}>Terminos y condiciones de servicio</Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2023 Raes Urbe. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://raesinversiones.com/"}
            >
              <BiWorld />
            </SocialButton>

            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/raesurbe/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
