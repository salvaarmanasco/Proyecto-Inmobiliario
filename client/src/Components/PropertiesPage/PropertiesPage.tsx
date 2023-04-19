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
  Button,
} from "@chakra-ui/react";
import { BsArrowUpRight, BsHeartFill, BsHeart } from "react-icons/bs";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../Redux/reducer/Properties";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import { useColorModeValue } from "@chakra-ui/react";
import Users from "../../Interfaces/Users";
import { useAuth0 } from "@auth0/auth0-react";
import {
  deleteWishList,
  fetchUsersEmail,
  modifyWishList,
} from "../../Redux/reducer/Users";
const lightColor = "transparent";
const darkColor = "red.500";

// ---------------------------------------FetchProperties-------------------------------------------------------
const PropertiesPage = () => {
  const textColor = useColorModeValue("black", "white");
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const allProperties = useSelector(
    (state: RootState) => state.properties.propertiesFilter
  );
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

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchUsersEmail(user.email)).then((action) => {
        if (action.payload) setUsuario(action.payload);
      });
    }
  }, [dispatch, user, usuario]);

  //  ---------------------------------------Favourties--------------------------------------------------------
  const [num] = useState<any>([0]);

  const handleFavourite = (id: any, usuario: any) => {
    const idUsuario = usuario.id;
    usuario?.wishList?.includes(id)
      ? dispatch(deleteWishList({ userId: idUsuario, wishListId: id }))
      : dispatch(modifyWishList({ userId: idUsuario, wishListId: id }));
  };

  // -----------------------------------------------------------------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(12);

  const lastPostIndex = currentPage * cardsPerPage;
  const firstPostIndex = lastPostIndex - cardsPerPage;
  const currentCards = allProperties.slice(firstPostIndex, lastPostIndex);

  let pages = [];
  for (let i = 1; i <= Math.ceil(allProperties.length / cardsPerPage); i++) {
    pages.push(i);
  }

  let pagesBreakout = pages.slice(
    currentPage - 3 >= 0 ? currentPage - 3 : 0,
    currentPage + 2
  );
  // -----------------------------------------------------------------------------------------------------------
  return (
    <Box minH="100vh">
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        pt={10}
        w={{ base: "100%", md: "90%" }}
      >
        <Filter />
      </Box>

      <Center py={6}>
        {allProperties.length > 0 ? (
          <SimpleGrid
            columns={{ base: 1, md: 2, xl: 4 }}
            alignItems="flex-start"
            spacingX="10px"
            spacingY="20px"
          >
            {currentCards.map(
              ({ id, title, description, Conditions, firstImage }) => (
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
              )
            )}
          </SimpleGrid>
        ) : (
          <Box overflow={"hidden"} bg="white" borderColor="black" pt={100}>
            <Text fontSize="2xl">
              Lo sentimos no encontramos propiedades, intente modificando el
              filtro...
            </Text>
          </Box>
        )}
      </Center>
      <Flex flexDirection="row" justifyContent="center">
        <Button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          width={20}
          height={20}
          fontWeight={600}
          fontSize={16}
          my={0}
          mx={3}
          borderRadius={6}
          cursor="pointer"
          transition="all 0.3s ease"
          background="transparent"
          color="#eee"
          borderColor="#eee"
          _active={{
            fontWeight: 900,
            borderColor: "#101010",
            background: "#ffffff",
            color: "#101010",
          }}
        >
          <Text color={textColor}>First</Text>
        </Button>
        {pages.length <= 5
          ? pages?.map((page, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  width={20}
                  height={20}
                  fontWeight={600}
                  fontSize={16}
                  my={0}
                  mx={3}
                  background={currentPage === page ? "red.500" : "transparent"}
                  borderRadius={6}
                  cursor="pointer"
                  transition="all 0.3s ease"
                  color="#eee"
                  borderColor="#eee"
                  _active={{
                    fontWeight: 900,
                    borderColor: "#101010",
                    background: "#ffffff",
                    color: "#101010",
                  }}
                >
                  <Text color={textColor}>{page}</Text>
                </Button>
              );
            })
          : pagesBreakout?.map((page, index) => {
              return (
                <Button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  width={20}
                  height={20}
                  fontWeight={600}
                  fontSize={16}
                  my={0}
                  mx={3}
                  background={currentPage === page ? "red.500" : "transparent"}
                  borderRadius={6}
                  cursor="pointer"
                  transition="all 0.3s ease"
                  // background="transparent"
                  color="#eee"
                  borderColor="#eee"
                  _active={{
                    fontWeight: 900,
                    borderColor: "#101010",
                    background: "#ffffff",
                    color: "#101010",
                  }}
                >
                  <Text color={textColor}>{page}</Text>
                </Button>
              );
            })}
        <Button
          onClick={() => setCurrentPage(pages.length)}
          width={20}
          height={20}
          fontWeight={600}
          fontSize={16}
          my={0}
          mx={3}
          borderRadius={6}
          cursor="pointer"
          transition="all 0.3s ease"
          background="transparent"
          color="#eee"
          borderColor="#eee"
          _active={{
            fontWeight: 900,
            borderColor: "#101010",
            background: "#ffffff",
            color: "#101010",
          }}
          disabled={currentPage === pages.length}
        >
          <Text color={textColor}>Last</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default PropertiesPage;
