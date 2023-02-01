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
      id: 1,
      img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/187204839.jpg?k=638396d2be86160db74d7cdf3971464250161d714349103e4503ff17a4535108&o=",
      barrio: "Barrio Nebel",
      titulo: "Quinta",
      descripcion:
        "quinta refaccionada a estrenar con todas las comodidas para pasar unos dias en familia",
    },
    {
      id: 2,
      img: "https://images.sparairnos.com/property/89647/images/993598/full/1fd1d812-178c-42ad-b3aa-e9f5f11a69d2",
      titulo: "CasaQuinta El Sorsal",
      barrio: "Pinar del Lago",
      descripcion:
        "Casaquinta amoblada para pasar los fin de semana sobre la costa del lago",
    },
    {
      id: 3,
      img: "data:image/jpeg;base64,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",
      titulo: "Duplex",
      barrio: "14 puñaladas",
      descripcion: "Duplex a estrenar en el centro a metros de la peatonal",
    },
    {
      id: 4,
      img: "https://http2.mlstatic.com/D_NQ_NP_600940-MLA47977549360_102021-O.jpg",
      titulo: "Casa",
      barrio: "14 puñaladas",
      descripcion: "Duplex a estrenar en el centro a metros de la peatonal",
    },
  ];

  return (
    <Center py={6}>
      {quintas.map((p) => (
        <Box
          key={p.id}
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
    </Center>
  );
}
