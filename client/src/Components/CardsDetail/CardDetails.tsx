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
  List,
  ListItem,
} from "@chakra-ui/react";

import { AiFillHeart } from "react-icons/ai";
import { FaBed, FaBath } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";

import casaBase from "../../Assets/casaBase.jpg";
import Maps from "../Maps/Maps";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPropertiesId } from "../../Redux/reducer/Properties";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";

import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  id: string;
}

export interface Property {
  id: number;
  name: string;
  antiquity: number;
  address: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  environments: number;
  pool: boolean;
  elevator: boolean;
  floor_th: number;
  orientation: string;
  m2_totals: number;
  m2_covered: number;
  garage: boolean;
  amenities: boolean;
  description: string;
  furnished: boolean;
  balcony: boolean;
  sign: boolean;
  lat: number;
  long: number;
  deleted: boolean;
}

export default function CardDetails({
  match,
}: RouteComponentProps<MatchParams>) {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [prop1, setProp1] = useState<Property | null>(null);

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchPropertiesId(id))
      .then((action) => {
        if (action.payload) {
          setProp1(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching properties:", error);
      });
  }, [dispatch]);

  console.log(prop1);

  // ------------------------------------------------------------------------------------------------------------
  const bgColorWhiteGray800 = useColorModeValue("gray.800", "white");
  const colorWhiteGray900 = useColorModeValue("white", "gray.900");
  const colorRed300Red500 = useColorModeValue("red.500", "red.300");
  const colorGray900Gray400 = useColorModeValue("gray.900", "gray.400");
  const colorGray500Gray400 = useColorModeValue("gray.500", "gray.400");
  const colorGray200Gray600 = useColorModeValue("gray.200", "gray.600");

  return (
    <>
      {prop1 !== null ? (
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
                <Box
                  backgroundColor={"red.500"}
                  width={"80px"}
                  borderRadius="2xl"
                >
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
                  <Text>{prop1.title}</Text>
                </Heading>
                <Text
                  color={colorGray900Gray400}
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
                  color={colorRed300Red500}
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
                      <ListItem>{prop1.bedrooms} Habitaciones</ListItem>
                    </Stack>
                    <Stack direction={"row"} alignItems="center">
                      <Stack
                        justifyContent={"center"}
                        marginRight={4}
                        marginTop={2}
                      >
                        <FaBath size={"30px"} />
                      </Stack>
                      <ListItem>{prop1.bathrooms} Baños</ListItem>
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
                      <ListItem>{prop1.m2_totals} m2 totales</ListItem>
                    </Stack>
                    <Stack direction={"row"} alignItems="center">
                      <Stack
                        justifyContent={"center"}
                        marginRight={4}
                        marginTop={2}
                      >
                        <SlSizeFullscreen size={"30px"} />
                      </Stack>
                      <ListItem>{prop1.m2_covered} m2 cubiertos</ListItem>
                    </Stack>
                  </List>
                </SimpleGrid>
              </Box>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={colorGray200Gray600} />}
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={colorGray500Gray400}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    {prop1.description}
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={colorRed300Red500}
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
                        {prop1.address}
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
                        {prop1.antiquity} años
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Ascensor:
                        </Text>{" "}
                        {prop1.elevator}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Piso:
                        </Text>{" "}
                        {prop1.floor_th}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Garage:
                        </Text>{" "}
                        {prop1.garage}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Amenities:
                        </Text>{" "}
                        {prop1.amenities}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Balcon:
                        </Text>{" "}
                        {prop1.balcony}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Amoblado:
                        </Text>{" "}
                        {prop1.furnished}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Orientacion:
                        </Text>{" "}
                        {prop1.orientation}
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
                bg={bgColorWhiteGray800}
                color={colorWhiteGray900}
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
            <Maps lat={prop1.lat} long={prop1.long} />
          </SimpleGrid>
        </Container>
      ) : (
        <>
          <Text>UWU</Text>
        </>
      )}
    </>
  );
}
