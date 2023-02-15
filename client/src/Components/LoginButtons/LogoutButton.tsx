import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <Box>
      {isAuthenticated && (
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            onClick={() => logout()}
          >
            Cerrar sesion
          </Button>
        </Stack>
      )}
    </Box>
  );
};

export default LogoutButton;
