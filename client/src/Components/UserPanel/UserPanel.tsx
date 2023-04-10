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
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersEmail, modifyUser } from "../../Redux/reducer/Users";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import { Link, RouteComponentProps } from "react-router-dom";

import Users from "../../Interfaces/Users";
import Property from "../../Interfaces/Property";

import { fetchProperties } from "../../Redux/reducer/Properties";
import { BsArrowUpRight } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

interface MatchParams {
  id: string;
}

interface UserChanges {
  id: string;
  name: string;
  lastname: string;
  phone: number;
  photo: string;
  userType: number;
}

const UserPanel = ({ match }: RouteComponentProps<MatchParams>) => {
  const [showWishlist, setShowWishlist] = useState(false);

  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [Properties, setProperties] = useState<Property | null | any>(null);

  const [usuario, setUsuario] = useState<Users>({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: 0,
    photo: "",
    wishList: [],
  });
  const { user } = useAuth0();

  const [editing, setEditing] = useState(false);

  const [changes, setChanges] = useState<UserChanges>({
    id: "",
    name: "",
    lastname: "",
    phone: 0,
    photo: "",
    userType: 3,
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setChanges({ ...changes, [event.target.name]: event.target.value });
  };

  /*   Swal.fire({
    text: "Estas seguro que deseas crear este Usuario?",
    width: "30%",
    padding: "10px",
    allowEnterKey: true,
    allowEscapeKey: true,
    icon: "question",
    background: "black",
    showCancelButton: true,
    confirmButtonColor: "#00711a",
    cancelButtonColor: "#b50707",
    confirmButtonText: "Si, crealo!",
  }).then((response) => {
    if (response.isConfirmed) {
      dispatch(createUsuario(user));
      history.push("/");
    }
  }); */

  async function handleSave(changes: any) {
    try {
      Swal.fire({
        text: "Estas seguro que deseas modificar el Usuario?",
        width: "30%",
        padding: "10px",
        allowEnterKey: true,
        allowEscapeKey: true,
        icon: "question",
        background: "black",
        showCancelButton: true,
        confirmButtonColor: "#00711a",
        cancelButtonColor: "#b50707",
        confirmButtonText: "Si modificalo!",
      }).then(async (response: { isConfirmed: any }) => {
        if (response.isConfirmed) {
          const respuesta = await dispatch(modifyUser(changes));
          window.location.reload();
          console.log("Usuario modificado con éxito", respuesta);
        }
      });
    } catch (error) {
      console.error("Ocurrió un error al modificar el usuario", error);
    }
  }

  useEffect(() => {
    if (user) {
      dispatch(fetchUsersEmail(user.email)).then((action) => {
        if (action.payload) {
          setUsuario(action.payload);
          setChanges({
            id: action.payload.id,
            name: action.payload.name,
            lastname: action.payload.lastname,
            phone: parseInt(action.payload.phone),
            photo: action.payload.photo,
            userType: 1,
          });
        }
      });
    }
  }, [dispatch, user]);

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

  const favorites: any[] = [];

  // eslint-disable-next-line array-callback-return
  Properties?.map((p: any) => {
    // eslint-disable-next-line array-callback-return
    usuario?.wishList?.map((w) => {
      if (p.id === w) favorites.push(p);
    });
  });

  return (
    <>
      <Box>
        <Grid justifyContent="center">
          <Heading>Panel de Usuario</Heading>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" alignItems="center">
          <Flex>
            <Text fontWeight="bold">Foto:</Text>
            {editing ? (
              <Input
                name="photo"
                value={changes.photo}
                onChange={handleChange}
              />
            ) : (
              <Image
                rounded={"md"}
                alt={"product image"}
                src={usuario.photo}
                fit={"contain"}
                align={"center"}
                w={"100%"}
                h={{ base: "100%", sm: "400px", lg: "500px" }}
                mt={10}
              />
            )}
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={28}>
            <GridItem>
              <Text fontWeight="bold">Nombre:</Text>
              {editing ? (
                <Input
                  name="name"
                  value={changes.name}
                  onChange={handleChange}
                />
              ) : (
                <Text>{usuario.name}</Text>
              )}
            </GridItem>
            <GridItem>
              <Text fontWeight="bold">Apellido:</Text>
              {editing ? (
                <Input
                  name="lastname"
                  value={changes.lastname}
                  onChange={handleChange}
                />
              ) : (
                <Text>{usuario.lastname}</Text>
              )}
            </GridItem>
            <GridItem>
              <Text fontWeight="bold">Email:</Text>
              <Text>{usuario.email}</Text>
            </GridItem>
            <GridItem>
              <Text fontWeight="bold">Teléfono:</Text>
              {editing ? (
                <Input
                  type="number"
                  name="phone"
                  value={changes.phone}
                  onChange={handleChange}
                />
              ) : (
                <Text>{usuario.phone}</Text>
              )}
            </GridItem>
            <Grid ml={52}>
              {editing ? (
                <>
                  <GridItem pb={5}>
                    <Button
                      fontSize={"sm"}
                      fontWeight={400}
                      color={"white"}
                      bg={"green.500"}
                      _hover={{
                        bg: "green.300",
                      }}
                      mr={2}
                      onClick={() => handleSave(changes)}
                    >
                      Guardar cambios
                    </Button>
                  </GridItem>
                  <GridItem ml={5}>
                    <Button
                      fontSize={"sm"}
                      fontWeight={400}
                      color={"white"}
                      bg={"gray.500"}
                      _hover={{
                        bg: "gray.300",
                      }}
                      onClick={() => setEditing(false)}
                    >
                      Cancelar
                    </Button>
                  </GridItem>
                </>
              ) : (
                <Button
                  fontSize={"sm"}
                  fontWeight={400}
                  color={"white"}
                  bg={"red.500"}
                  _hover={{
                    bg: "red.300",
                  }}
                  onClick={handleEdit}
                >
                  Modificar usuario
                </Button>
              )}
            </Grid>
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
                      <Box h={"200px"} borderBottom={"1px"} borderColor="black">
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
                        <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
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
    </>
  );
};

export default UserPanel;
