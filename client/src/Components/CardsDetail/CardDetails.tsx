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
              TITULO PROPIEDAD
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
                Ubicación: Lote en Tierra de Sueños Puerto San Martin. Manzana
                78, lote 1814.Esta Ubicado sobre Autopista Rosario- Santa Fe y
                RP. No18. Brinda una propuesta de vida que reúne todos los
                requisitos para la mayor comodidad de una familia en la
                actualidad.El barrio cuenta con red eléctrica, salón multi
                evento, red de AGUA POTABLE, telefonía, forestación, bar,
                restaurant, piscina con parque acuático, canchas de futbol 5 y
                tenis, entre otros. Y actualmente estan haciendo las cloacas.
                Descripción: Terreno de 12 metros de frente x 24 metros de
                fondo, superficie total de 288m2 Son 2300 Lotes en 122
                Hectáreas.
              </Text>
              {/* <Text fontSize={"lg"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text> */}
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
          {/* <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack> */}
        </Stack>
        <Image
          rounded={"md"}
          alt={"maps preventivo"}
          src={mapsImage}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
          mt={10}
        />
      </SimpleGrid>
    </Container>
  );
}
