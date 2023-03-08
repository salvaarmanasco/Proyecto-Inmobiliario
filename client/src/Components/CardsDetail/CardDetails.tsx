import Property from "../../Interfaces/Property";
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
  Grid,
} from "@chakra-ui/react";

import { AiFillHeart } from "react-icons/ai";
import { FaBed, FaBath } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";

import Maps from "../Maps/Maps";

import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { fetchPropertiesId } from "../../Redux/reducer/Properties";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";

import { RouteComponentProps } from "react-router-dom";
import CardDetailCarrousel from "../CardDetailCarrousel/CardDetailCarrousel";

interface MatchParams {
  id: string;
}

export default function CardDetails({
  match,
}: RouteComponentProps<MatchParams>) {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [detailProp, setDetailProp] = useState<Property | null>(null);

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchPropertiesId(id))
      .then((action) => {
        if (action.payload) {
          setDetailProp(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching properties:", error);
      });
  }, [dispatch]);

  console.log(detailProp);
  const gardenCount = detailProp?.Gardens?.length;
  const imagesCarrousel = detailProp?.Images;

  // ------------------------------------------------------------------------------------------------------------
  const bgColorWhiteGray800 = useColorModeValue("gray.800", "white");
  const colorWhiteGray900 = useColorModeValue("white", "gray.900");
  const colorRed300Red500 = useColorModeValue("red.500", "red.300");
  const colorGray900Gray400 = useColorModeValue("gray.900", "gray.400");
  const colorGray500Gray400 = useColorModeValue("gray.500", "gray.400");
  const colorGray200Gray600 = useColorModeValue("gray.200", "gray.600");

  return (
    <>
      {detailProp !== null ? (
        <Container maxW={"7xl"}>
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={detailProp.firstImage}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
              mt={10}
            />
          </Flex>
          <Flex mt={3} justifyContent="end">
            <CardDetailCarrousel images={imagesCarrousel} />
          </Flex>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            pb={{ base: 18, md: 24 }}
            pt={{ base: 10, md: 10 }}
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
                  <Text>{detailProp.title}</Text>
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
                      <ListItem>{detailProp.bedrooms} Habitaciones</ListItem>
                    </Stack>
                    <Stack direction={"row"} alignItems="center">
                      <Stack
                        justifyContent={"center"}
                        marginRight={4}
                        marginTop={2}
                      >
                        <FaBath size={"30px"} />
                      </Stack>
                      <ListItem>{detailProp.bathrooms} Baños</ListItem>
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
                      <ListItem>{detailProp.m2_totals} m2 totales</ListItem>
                    </Stack>
                    <Stack direction={"row"} alignItems="center">
                      <Stack
                        justifyContent={"center"}
                        marginRight={4}
                        marginTop={2}
                      >
                        <SlSizeFullscreen size={"30px"} />
                      </Stack>
                      <ListItem>{detailProp.m2_covered} m2 cubiertos</ListItem>
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
                    {detailProp.description}
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
                        {detailProp.address}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Servicios:
                        </Text>{" "}
                        {detailProp.Services?.[0]?.services_name}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Ciudad:
                        </Text>{" "}
                        {detailProp.States?.[0]?.state_name}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Tipo de propiedad:
                        </Text>{" "}
                        {detailProp.Categories?.[0]?.category_name}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Provincia:
                        </Text>{" "}
                        Santa Fe
                      </ListItem>
                      <ListItem>
                        <SimpleGrid columns={{ base: 1, lg: 2 }}>
                          <Text as={"span"} fontWeight={"bold"} gridColumn={-4}>
                            Patio:
                          </Text>
                          <SimpleGrid columns={2} pl={1}>
                            {detailProp.Gardens?.map(
                              (g: { garden_name: string }, index: number) => (
                                <Text>
                                  {index === gardenCount - 1
                                    ? g.garden_name
                                    : `${g.garden_name}, `}
                                </Text>
                              )
                            )}
                          </SimpleGrid>
                        </SimpleGrid>
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Pais:
                        </Text>{" "}
                        {detailProp.Countries?.[0]?.country_name}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Barrio:
                        </Text>{" "}
                        {detailProp.Zones?.[0]?.zone_name}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Antiguedad:
                        </Text>{" "}
                        {detailProp.antiquity} años
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Ascensor:
                        </Text>{" "}
                        {detailProp.elevator == false ? "No posee" : "Si"}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Piso:
                        </Text>{" "}
                        {detailProp.floor_th}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Garage:
                        </Text>{" "}
                        {detailProp.garage == false ? "No posee" : "Si"}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Amenities:
                        </Text>{" "}
                        {detailProp.amenities == false ? "No posee" : "Si"}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Piscina:
                        </Text>{" "}
                        {detailProp.pool == false ? "No posee" : "Si"}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Balcon:
                        </Text>{" "}
                        {detailProp.balcony == false ? "No posee" : "Si"}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Amoblado:
                        </Text>{" "}
                        {detailProp.furnished == false ? "No posee" : "Si"}
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Orientacion:
                        </Text>{" "}
                        {detailProp.orientation}
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
            <Maps lat={detailProp.lat} long={detailProp.long} />
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
