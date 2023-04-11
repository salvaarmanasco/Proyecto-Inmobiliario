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
import { Link, RouteComponentProps, useHistory } from "react-router-dom";

import Users from "../../Interfaces/Users";
import Property from "../../Interfaces/Property";

import { fetchProperties } from "../../Redux/reducer/Properties";
import { BsArrowUpRight } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "@firebase/storage";
import { initializeApp } from "firebase/app";

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


const firebaseConfig = {
  apiKey: "AIzaSyD-vnKOH8h79lYgBVn_TYDNfuB9OZCd2Zs",
  authDomain: "urbe-7ccb5.firebaseapp.com",
  projectId: "urbe-7ccb5",
  storageBucket: "urbe-7ccb5.appspot.com",
  messagingSenderId: "15986602173",
  appId: "1:15986602173:web:c8a0e2647eef122c7fc7d4",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const UserPanel = ({ match }: RouteComponentProps<MatchParams>) => {
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

  const history = useHistory();

  // -------------------------------------------FIREBASE--------------------------------------------------------
  const [files, setFiles] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFiles(file);
      setProgress(100);
    }
  };

  // ----------------------------------------------------------------------------------------------------------

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setChanges({
      ...changes,
      [event.target.name]:
        event.target.name === "phone"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };

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
        if (response.isConfirmed && files) {
          const storageRef = ref(storage, files.name);
          const uploadTask = uploadBytesResumable(storageRef, files);

          uploadTask.on("state_changed", (snapshot) => {
            const percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
          });

          await uploadTask;
          const downloadURL = await getDownloadURL(storageRef);
          console.log(`File uploaded successfully: ${downloadURL}`);
          if (downloadURL) {
            dispatch(modifyUser({ ...changes, photo: downloadURL }))
              .then(() => {
                console.log("Usuario modificado con éxito");
                window.location.reload();
                //  history.push({ pathname: "/profile" });
              })
              .catch((error) => {
                console.error(
                  "Ocurrió un error al modificar el usuario",
                  error
                );
              });
          } else {
            dispatch(modifyUser(changes))
              .then(() => {
                console.log("Usuario modificado con éxito");
                history.push({ pathname: "/profile" });
              })
              .catch((error) => {
                console.error(
                  "Ocurrió un error al modificar el usuario",
                  error
                );
              });
          }
        }
      });
    } catch (error) {
      console.error("Error al manejar la modificación del usuario:", error);
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
            userType: 3,
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

  useEffect(() => {
    console.log("changes updated:", changes);
    console.log("files updated:", files);
  }, [changes, files]);

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
        <Grid mb={10} justifyContent="center">
          <Heading>Panel de Usuario</Heading>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" alignItems="center">
          <Flex ml={48} display="grid">
            <Text mb={5} fontWeight="bold">
              Foto:
            </Text>
            {editing ? (
              <Box display="grid">
                <Input
                  w="50%"
                  type="file"
                  onChange={handleFileChange}
                  multiple
                />
                <progress value={progress} max="100" />
              </Box>
            ) : (
              <Image
                /*   rounded={"md"} */
                alt={"product image"}
                src={usuario.photo}
                /*      fit={"contain"}
                align={"center"} */
                w={"80%"}
                h={{ base: "80%", sm: "400px", lg: "500px" }}
              />
            )}
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={28}>
            <GridItem>
              <Text my={5} fontWeight="bold">
                Nombre:
              </Text>
              {editing ? (
                <Input
                  w="75%"
                  name="name"
                  value={changes.name}
                  onChange={handleChange}
                />
              ) : (
                <Text>{usuario.name}</Text>
              )}
            </GridItem>
            <GridItem>
              <Text my={5} fontWeight="bold">
                Apellido:
              </Text>
              {editing ? (
                <Input
                  w="75%"
                  name="lastname"
                  value={changes.lastname}
                  onChange={handleChange}
                />
              ) : (
                <Text>{usuario.lastname}</Text>
              )}
            </GridItem>
            <GridItem>
              <Text my={5} fontWeight="bold">
                Email:
              </Text>
              <Text>{usuario.email}</Text>
            </GridItem>
            <GridItem>
              <Text my={5} fontWeight="bold">
                Teléfono:
              </Text>
              {editing ? (
                <Input
                  w="75%"
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
