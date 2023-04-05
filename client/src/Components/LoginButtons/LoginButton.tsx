import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersEmail, createUsuario } from "../../Redux/reducer/Users";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  useEffect(() => {
    if (user) {
      dispatch(fetchUsersEmail(user.email)).then((res) => {
        if (res.payload === null) {
          dispatch(
            createUsuario({
              name: user.name,
              email: user.email,
              lastname: user.family_name,
              photo: user.picture,
            })
          );
        } else {
          if (res.payload.deleted === true) {
            alert("Su usuario ah sido eliminado");
            logout();
          } else {
            console.log("The user is already exist");
          }
        }
      });
    }
  }, [dispatch, logout, user]);

  return (
    <Box>
      {!isAuthenticated && (
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction="row"
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            onClick={() => loginWithRedirect()}
          >
            Ingresar
          </Button>
          <Link to="/registrarse">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"red.500"}
              _hover={{
                bg: "red.300",
              }}
            >
              Registrarse
            </Button>
          </Link>
        </Stack>
      )}
    </Box>
  );
};

export default LoginButton;
