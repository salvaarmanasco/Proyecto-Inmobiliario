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
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProperties } from "../../Redux/reducer/Properties";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import Property from "../../Interfaces/Property";

export default function Cards() {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [fourProperties, setFourProperties] = useState<Property[]>([]);

  useEffect(() => {
    dispatch(fetchProperties())
      .then((action) => {
        if (action.payload) {
          setFourProperties(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching properties:", error);
      });
  }, [dispatch]);

  const [liked, setLiked] = useState(false);
  const [num] = useState<any>([0]);

  const handleFavourite = (id: any) => {
    setLiked(!liked);
    num.includes(id) ? num.splice(num.indexOf(id), 1) : num.push(id);
  };

  console.log(fourProperties);

  return (
    <Center py={6}>
      <SimpleGrid
        columns={{ base: 1, md: 3, xl: 4 }}
        alignItems="flex-start"
        spacingX="10px"
        spacingY="20px"
      >
        {fourProperties
          .slice(0, 4)
          .map(({ id, title, description, Conditions, firstImage }) => (
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
                  src={firstImage}
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
                    {Conditions?.[0]?.condition_name}
                  </Text>
                </Box>
                <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                  {title}
                </Heading>
                <Text color={"gray.500"} noOfLines={2}>
                  {description}
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
  );
}
