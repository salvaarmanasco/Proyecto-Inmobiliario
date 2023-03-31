import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="red" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://www.raesinversiones.com:8899/Imagenes/Oficina/6.jpg"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(red.600 1px, transparent 1px)",
                "radial(red.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading as="h1" mb="4">
            Sobre Raes
          </Heading>
          <BlogTags tags={["Servicio", "Excelencia", "Acompañamiento"]} />
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Raes Inversiones es una compañía comprometida con generar valor en
            el mercado del Real Estate. Sus oficinas están conformadas por
            equipos de trabajo altamente capacitados, cuyas principales premisas
            son actuar con sensatez, eficiencia e inspirando confianza al
            momento de asesorar en operaciones inmobiliarias.
          </Text>
        </Box>
      </Box>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Nuestro objetivo</Heading>
        <Text as="p" fontSize="lg">
          Ofrecer un servicio inmobiliario de excelencia
        </Text>
        <Text as="p" fontSize="lg">
          Apostamos al desarrollo de emprendimientos con una visión empresarial
          y sentido profesional evaluando minuciosamente cada uno de los
          proyectos, para así desarrollar el plan de negocios que mejor se
          adapte a las condiciones del mercado actual.
        </Text>
        <Text as="p" fontSize="lg">
          Entendemos que existe una sola forma de proyectarse a futuro y sobre
          pasar adversidades: creando y desarrollando líderes en nuestros
          equipos.
        </Text>
      </VStack>
      <Heading as="h3" my={10} textAlign="center"></Heading>
      <Box backgroundColor={"red.500"} borderRadius="2xl">
        <Text
          fontSize={{ base: "16px", lg: "18px" }}
          color={"white"}
          fontWeight={"500"}
          mb={"4"}
          textAlign="center"
        >
          Nuestras herramientas comerciales junto con nuestros valores son
          nuestra fórmula para poder brindarle el mejor servicio.
        </Text>
      </Box>
    </Container>
  );
};

export default ArticleList;
