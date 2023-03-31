import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Button,
  Image,
  Flex,
  Img,
  HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersId } from "../../Redux/reducer/Users";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import { Link, RouteComponentProps } from "react-router-dom";

import Users from "../../Interfaces/Users";
import Property from "../../Interfaces/Property";

import { fetchProperties } from "../../Redux/reducer/Properties";
import { BsArrowUpRight } from "react-icons/bs";

interface MatchParams {
  id: string;
}

export const UserPanel = ({ match }: RouteComponentProps<MatchParams>) => {
  const [showWishlist, setShowWishlist] = useState(false);

  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [UserProp, setUserProp] = useState<Users | null>(null);

  const [Properties, setProperties] = useState<Property | null | any>(null);

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchUsersId(id))
      .then((action) => {
        if (action.payload) {
          setUserProp(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, [dispatch]);

  console.log(UserProp);

  useEffect(() => {
    dispatch(fetchProperties())
      .then((action) => {
        if (action.payload) {
          setProperties(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  }, [dispatch]);

  console.log(Properties?.[0]?.id);

  const favorites: any[] = [];

  // eslint-disable-next-line array-callback-return
  Properties?.map((p: any) => {
    // eslint-disable-next-line array-callback-return
    UserProp?.wishList.map((w) => {
      if (p.id === w) favorites.push(p);
    });
  });
  console.log(favorites);

  return (
    <>
      {UserProp !== null ? (
        <Box>
          <Grid justifyContent="center">
            <Heading>Panel de Usuario</Heading>
          </Grid>
          <Grid templateColumns="repeat(2, 1fr)" alignItems="center">
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={UserProp.photo}
                fit={"contain"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
                mt={10}
              />
            </Flex>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <Text fontWeight="bold">Nombre:</Text>
                <Text>{UserProp.name}</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Apellido:</Text>
                <Text>{UserProp.lastname}</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Email:</Text>
                <Text>{UserProp.email}</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Telefono:</Text>
                <Text>{UserProp.phone}</Text>
              </GridItem>
            </Grid>
            <GridItem display="flex" padding="5" colSpan={3}>
              <GridItem>
                <Button onClick={() => setShowWishlist(!showWishlist)}>
                  {showWishlist ? "Hide Wishlist" : "Show Wishlist"}
                </Button>
              </GridItem>
              {showWishlist &&
                favorites?.map((item, i) => (
                  <Box key={i}>
                    <Heading as="h3" size="md">
                      <Box
                        key={item.id}
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
                        <Box
                          h={"200px"}
                          borderBottom={"1px"}
                          borderColor="black"
                        >
                          {" "}
                          {/* longitud de la card */}
                          <Img
                            src={item.firstImage}
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
                              {item.Conditions?.[0]?.condition_name}
                            </Text>
                          </Box>
                          <Heading
                            color={"black"}
                            fontSize={"2xl"}
                            noOfLines={1}
                          >
                            {item.title}
                          </Heading>
                          <Text color={"gray.500"} noOfLines={2} height={50}>
                            {item.description}
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
                            <Link href={`/properties/${item.id}`} to={""}>
                              <BsArrowUpRight />
                            </Link>
                          </Flex>
                          {/*     <Flex
                            p={4}
                            alignItems="center"
                            justifyContent={"space-between"}
                            roundedBottom={"sm"}
                            borderLeft={"1px"}
                            cursor="pointer"
                            onClick={() => handleFavourite(item.id)}
                          >
                            {num.includes(item.id) ? (
                              <BsHeartFill fill="red" fontSize={"24px"} />
                            ) : (
                              <BsHeart fontSize={"24px"} />
                            )}
                          </Flex> */}
                        </HStack>
                      </Box>
                    </Heading>
                  </Box>
                ))}
            </GridItem>
          </Grid>
        </Box>
      ) : (
        <>
          <Text>El usuario es puto si no aparece</Text>
        </>
      )}
    </>
  );
};
