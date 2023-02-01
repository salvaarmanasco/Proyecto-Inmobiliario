/* import { Box, Text, Button, Center } from "@chakra-ui/react";

const Cards = () => {
  return (
    <Box>
      <Center>
        <Button>ver mas</Button>
      </Center>
      <Center fontSize="xl">Cards</Center>
    </Box>
  );
}; */

import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";

export default function Cards() {
  const [liked, setLiked] = useState(false);

  const quintas = [
    {
      img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/187204839.jpg?k=638396d2be86160db74d7cdf3971464250161d714349103e4503ff17a4535108&o=",
      barrio: "Barrio Nebel",
      titulo: "Quinta",
      descripcion:
        "quinta refaccionada a estrenar con todas las comodidas para pasar unos dias en familia",
    },
    {
      img: "https://images.sparairnos.com/property/89647/images/993598/full/1fd1d812-178c-42ad-b3aa-e9f5f11a69d2",
      titulo: "CasaQuinta El Sorsal",
      barrio: "Pinar del Lago",
      descripcion:
        "Casaquinta amoblada para pasar los fin de semana sobre la costa del lago",
    },
    {
      img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/187204839.jpg?k=638396d2be86160db74d7cdf3971464250161d714349103e4503ff17a4535108&o=",
      titulo: "Duplex",
      barrio: "14 puñaladas",
      descripcion: "Duplex a estrenar en el centro a metros de la peatonal",
    },
  ];

  return (
    <Center py={6}>
      {quintas.map((p) => (
        <Box
          w="xs" /* ancho de cards */
          rounded={"sm"}
          my={5}
          mx={[0, 5]}
          overflow={"hidden"}
          bg="white"
          border={"1px"}
          borderColor="black"
          /*  boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 #f80404")} */
        >
          <Box h={"200px"} borderBottom={"1px"} borderColor="black">
            {" "}
            {/* longitud de la card */}
            <Img
              src={p.img}
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
                {p.barrio}
              </Text>
            </Box>
            <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
              {p.titulo}
            </Heading>
            <Text color={"gray.500"} noOfLines={2}>
              {p.descripcion}
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
              <BsArrowUpRight />
            </Flex>
            <Flex
              p={4}
              alignItems="center"
              justifyContent={"space-between"}
              roundedBottom={"sm"}
              borderLeft={"1px"}
              cursor="pointer"
              onClick={() => setLiked(!liked)}
            >
              {liked ? (
                <BsHeartFill fill="red" fontSize={"24px"} />
              ) : (
                <BsHeart fontSize={"24px"} />
              )}
            </Flex>
          </HStack>
        </Box>
      ))}
      <Box
        w="xs" /* ancho de cards */
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 #f80404")}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black">
          {" "}
          {/* longitud de la card */}
          <Img
            src={
              "https://images.sparairnos.com/property/89647/images/993598/full/1fd1d812-178c-42ad-b3aa-e9f5f11a69d2"
            }
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
              Pinar del Lago
            </Text>
          </Box>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            CasaQuinta "El Sorsal"
          </Heading>
          <Text color={"gray.500"} noOfLines={2}>
            Casaquinta amoblada para pasar los fin de semana sobre la costa del
            lago
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
            <BsArrowUpRight />
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            borderLeft={"1px"}
            cursor="pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? (
              <BsHeartFill fill="red" fontSize={"24px"} />
            ) : (
              <BsHeart fontSize={"24px"} />
            )}
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
}
