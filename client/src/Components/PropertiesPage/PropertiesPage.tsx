import React from "react";
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  HStack,
  SimpleGrid,
  Link,
  Input,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";

const PropertiesPage = () => {
  const [liked, setLiked] = useState(false);
  const [num] = useState<any>([0]);

  const quintas = [
    {
      id: "c0759f5c-6768-4a11-bd23-b9a5421e9b60",
      img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/187204839.jpg?k=638396d2be86160db74d7cdf3971464250161d714349103e4503ff17a4535108&o=",
      barrio: "Barrio Nebel",
      titulo: "Quinta",
      descripcion:
        "quinta refaccionada a estrenar con todas las comodidas para pasar unos dias en familia",
    },
    {
      id: "6fe953b6-34ba-4de7-b701-2a9b60b7c84f",
      img: "https://images.sparairnos.com/property/89647/images/993598/full/1fd1d812-178c-42ad-b3aa-e9f5f11a69d2",
      titulo: "CasaQuinta El Sorsal",
      barrio: "Pinar del Lago",
      descripcion:
        "Casaquinta amoblada para pasar los fin de semana sobre la costa del lago",
    },
    {
      id: "ce436638-051d-4e51-9aad-bc40747c1395",
      img: "https://i.ytimg.com/vi/8wXRq7NApec/maxresdefault.jpg",
      titulo: "Duplex",
      barrio: "14 puñaladas",
      descripcion: "Duplex a estrenar en el centro a metros de la peatonal",
    },
    {
      id: "e446f63d-6274-4963-b544-d53d6ec51dc3",
      img: "https://http2.mlstatic.com/D_NQ_NP_600940-MLA47977549360_102021-O.jpg",
      titulo: "Casa",
      barrio: "14 puñaladas",
      descripcion: "Duplex a estrenar en el centro a metros de la peatonal",
    },
  ];

  const handleFavourite = (id: any) => {
    setLiked(!liked);
    num.includes(id) ? num.splice(num.indexOf(id), 1) : num.push(id);
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end" pt={10} width="90%">
        <Input
          width={{ base: "50%", sm: "30%", md: "25%" }}
          focusBorderColor="red.500"
        />
        <Filter />
      </Box>

      <Center py={6}>
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 4 }}
          alignItems="flex-start"
          spacingX="10px"
          spacingY="20px"
        >
          {quintas.map(({ id, barrio, titulo, descripcion, img }) => (
            <Box
              key={id}
              w="xs" /* ancho de cards */
              rounded={"sm"}
              my={5}
              mx={[0, 5]}
              overflow={"hidden"}
              bg="white"
              border={"1px"}
              borderColor="black"
              boxShadow={"6px 6px 0 #f80404"}
            >
              <Box h={"200px"} borderBottom={"1px"} borderColor="black">
                {" "}
                {/* longitud de la card */}
                <Img
                  src={img}
                  roundedTop={"sm"}
                  objectFit="cover"
                  h="full"
                  w="full"
                  alt={"Blog Image"}
                />
              </Box>
              <Box p={4}>
                <Box
                  bg="black"
                  display={"inline-block"}
                  px={2}
                  py={1}
                  color="white"
                  mb={2}
                >
                  <Text fontSize={"xs"} fontWeight="medium">
                    {barrio}
                  </Text>
                </Box>
                <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                  {titulo}
                </Heading>
                <Text color={"gray.500"} noOfLines={2}>
                  {descripcion}
                </Text>
              </Box>
              <HStack borderTop={"1px"} color="black">
                <Flex
                  p={4}
                  alignItems="center"
                  justifyContent={"space-between"}
                  roundedBottom={"sm"}
                  cursor={"pointer"}
                  w="full"
                >
                  <Text fontSize={"md"} fontWeight={"semibold"}>
                    View more
                  </Text>
                  <Link href={`/properties/${id}`}>
                    <BsArrowUpRight />
                  </Link>
                </Flex>
                <Flex
                  p={4}
                  alignItems="center"
                  justifyContent={"space-between"}
                  roundedBottom={"sm"}
                  borderLeft={"1px"}
                  cursor="pointer"
                  onClick={() => handleFavourite(id)}
                >
                  {num.includes(id) ? (
                    <BsHeartFill fill="red" fontSize={"24px"} />
                  ) : (
                    <BsHeart fontSize={"24px"} />
                  )}
                </Flex>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};

export default PropertiesPage;
