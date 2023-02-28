import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";

import { AiFillHeart } from "react-icons/ai";
import { FaBed, FaBath } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { MdLocalShipping } from "react-icons/md";

import mapsImage from "../../Assets/maps.png";
import casaBase from "../../Assets/casaBase.jpg";
import Maps from "../Maps/Maps";

export default function CardDetails() {
  return (
    <Container maxW={"7xl"}>
      <Flex>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={casaBase}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
          mt={10}
        />
      </Flex>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Box backgroundColor={"red.500"} width={"80px"} borderRadius="2xl">
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={"white"}
                fontWeight={"500"}
                mb={"4"}
                textAlign="center"
              >
                Venta
              </Text>
            </Box>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              CASA EN COSTANERA ESTE. IDEAL INVERSOR
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              marginTop={{ base: "3", md: "6" }}
            >
              $80.000 USD (Dolares)
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("red.500", "red.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Caracteristicas
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }}>
              <List spacing={2}>
                <Stack direction={"row"} alignItems="center">
                  <Stack marginRight={4} marginTop={2}>
                    <FaBed size={"30px"} />
                  </Stack>
                  <ListItem>3 Habitaciones</ListItem>
                </Stack>
                <Stack direction={"row"} alignItems="center">
                  <Stack
                    justifyContent={"center"}
                    marginRight={4}
                    marginTop={2}
                  >
                    <FaBath size={"30px"} />
                  </Stack>
                  <ListItem>2 Baños</ListItem>
                </Stack>
              </List>
              <List spacing={2} marginTop={{ base: 4, md: 0 }}>
                <Stack direction={"row"} alignItems="center">
                  <Stack
                    justifyContent={"center"}
                    marginRight={4}
                    marginTop={2}
                  >
                    <SlSizeFullscreen size={"30px"} />
                  </Stack>
                  <ListItem>200 m2 totales</ListItem>
                </Stack>
                <Stack direction={"row"} alignItems="center">
                  <Stack
                    justifyContent={"center"}
                    marginRight={4}
                    marginTop={2}
                  >
                    <SlSizeFullscreen size={"30px"} />
                  </Stack>
                  <ListItem>120 m2 cubiertos</ListItem>
                </Stack>
              </List>
            </SimpleGrid>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                Ubicación: El Estadio Brigadier General Estanislao López también
                conocido popularmente como el Cementerio de los Elefantes, es un
                estadio de fútbol ubicado en la ciudad de Santa Fe, Argentina.
                Fue inaugurado en 1946 y es propiedad del Club Atlético Colón,
                que ejerce allí su localía. En 1952 se adoptó el nombre de
                Estadio Eva Perón, en honor a la primera dama, quien apoyó la
                afiliación de Colón a la AFA en 1948,7​ y más tarde ayudo
                económicamente a la institución para la construcción de las
                primeras tribunas de cemento y la iluminación artificial. Sin
                embargo, tras el golpe de Estado que derrocó al militar Juan
                Domingo Perón, los nombres del mandatario y de su esposa fueron
                prohibidos, por lo que el estadio fue renombrado como Brigadier
                General Estanislao López, en honor al caudillo argentino que
                gobernó la provincia de Santa Fe entre 1818 y 1838. Desde hace
                tiempo también se lo conoce como el Cementerio de los
                Elefantes,nota 1​ debido a las victorias de Colón frente a
                grandes equipos que visitaron Santa Fe. Uno de ellos fue el
                famoso Santos de Pelé que en 1964 cayó por 2-1.8​ Dicho conjunto
                brasilero poseía un récord de 43 partidos invicto y era
                bicampeón intercontinental en aquel momento. El mismo equipo de
                Colón, más tarde le ganó a la propia selección argentina por
                2-0.9​ Otros conjuntos que salieron derrotados del estadio
                fueron: Peñarol de Montevideo en 1967 (campeón de la Copa
                Intercontinental 1966),10​ Millonarios de Colombia (con un
                presente muy exitoso en ese momento), Olimpia, U. de Chile,
                Alianza Lima, Atlético Mineiro, entre otros. Hectáreas.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("red.500", "red.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Detalles
              </Text>
              <List spacing={2}>
                <SimpleGrid columns={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Direccion:
                    </Text>{" "}
                    San martin 2000
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Servicios:
                    </Text>{" "}
                    Luz / Agua / Gas / Cloacas
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Ciudad:
                    </Text>{" "}
                    Santa Fe Capital
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Tipo de propiedad:
                    </Text>{" "}
                    Departamento
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Provincia:
                    </Text>{" "}
                    Santa Fe
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Patio:
                    </Text>{" "}
                    Si (Verde)
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Pais:
                    </Text>{" "}
                    Argentina
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Barrio:
                    </Text>{" "}
                    Centro
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Antiguedad:
                    </Text>{" "}
                    10 años
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Ascensor:
                    </Text>{" "}
                    Si (1)
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Piso:
                    </Text>{" "}
                    2
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Garage:
                    </Text>{" "}
                    No
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Amenities:
                    </Text>{" "}
                    No
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Balcon:
                    </Text>{" "}
                    Si (1)
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Amoblado:
                    </Text>{" "}
                    No
                  </ListItem>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      Orientacion:
                    </Text>{" "}
                    Norte
                  </ListItem>
                </SimpleGrid>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            mr={"4"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            <Text mr={1}>Agregar a favoritos</Text>
            <AiFillHeart />
          </Button>
        </Stack>
        <Maps />
      </SimpleGrid>
    </Container>
  );
}
