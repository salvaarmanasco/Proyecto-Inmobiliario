import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
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
        </Stack>
      )}
    </Box>
  );
};

export default LoginButton;
