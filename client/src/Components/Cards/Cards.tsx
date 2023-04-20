import { useAuth0 } from "@auth0/auth0-react";

import { useState, useEffect } from "react";
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
  GridItem,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../Redux/reducer/Properties";
import {
  deleteWishList,
  fetchUsersEmail,
  modifyWishList,
} from "../../Redux/reducer/Users";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import Property from "../../Interfaces/Property";
import Users from "../../Interfaces/Users";

export default function Cards() {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [fourProperties, setFourProperties] = useState<Property[]>([]);
  const [usuario, setUsuario] = useState<Users>({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: 0,
    photo: "",
    wishList: [],
    userType: 0,
  });
  const { user } = useAuth0();

  /* const usuario2: Users = useSelector(
    (state: RootState) => state.users.usersDetail
  ); */

  useEffect(() => {
    dispatch(fetchProperties())
      .then((action) => {
        if (action.payload) {
          setFourProperties(
            action.payload.filter((e: any) => e.Conditions.length > 0)
          );
        }
      })
      .catch((error) => {
        console.log("Error fetching properties:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchUsersEmail(user.email)).then((action) => {
        if (action.payload) setUsuario(action.payload);
      });
    }
  }, [dispatch, user, usuario]);

  const handleFavourite = (id: any, usuario: any) => {
    const idUsuario = usuario.id;
    usuario?.wishList?.includes(id)
      ? dispatch(deleteWishList({ userId: idUsuario, wishListId: id }))
      : dispatch(modifyWishList({ userId: idUsuario, wishListId: id }));
  };

  return (
    <Center py={6}>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 4 }}
        alignItems="flex-start"
        spacingX="10px"
        spacingY="20px"
      >
        <GridItem colSpan={{ base: 1, md: 2, xl: 4 }}>
          <Heading
            as={"h2"}
            fontSize={{ base: "xl", sm: "2xl" }}
            textAlign={"center"}
            mb={5}
          >
            Últimos ingresos
          </Heading>
        </GridItem>
        {fourProperties
          .slice(Math.max(fourProperties.length - 4, 0))
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
                <Text color={"gray.500"} noOfLines={2} height={50}>
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
                  onClick={() => handleFavourite(id, usuario)}
                >
                  {usuario.wishList?.includes(id) ? (
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
