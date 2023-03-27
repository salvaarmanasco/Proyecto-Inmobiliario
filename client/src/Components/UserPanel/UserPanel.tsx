/* import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  GridItem,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import Cards from "../Cards/Cards";

export default function UserPanel() {
  return (
    <Center py={6}>
      <SimpleGrid columns={1}>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Lindsey James
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @lindsey_jam3s
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Actress, musician, songwriter and artist. PM for work inquires or{" "}
            <Link href={"#"} color={"blue.400"}>
              #tag
            </Link>{" "}
            me in your posts
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #music
            </Badge>
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Follow
            </Button>
          </Stack>
        </Box>
        <Cards />
      </SimpleGrid>
    </Center>
  );
} */

import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersId } from "../../Redux/reducer/Users";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import { RouteComponentProps } from "react-router-dom";

import Users from "../../Interfaces/Users";
import { fetchProperties } from "../../Redux/reducer/Properties";

interface WishlistItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface MatchParams {
  id: string;
}

export const UserPanel = ({ match }: RouteComponentProps<MatchParams>) => {
  const [showWishlist, setShowWishlist] = useState(false);

  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [UserProp, setUserProp] = useState<Users | null>(null);

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
            <GridItem padding="5" colSpan={3}>
              <Button onClick={() => setShowWishlist(!showWishlist)}>
                {showWishlist ? "Hide Wishlist" : "Show Wishlist"}
              </Button>
              {showWishlist &&
                UserProp.wishList?.map((item, i) => (
                  <Box key={i}>
                    <Heading as="h3" size="md">
                      {item}
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
