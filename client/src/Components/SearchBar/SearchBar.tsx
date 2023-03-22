import { Box, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <Box textAlign="center" fontSize="xl" mb="20" mt="10">
      <Stack
        justifyContent="center"
        align="center"
        direction={{ base: "column", sm: "column", md: "row" }}
      >
        <Link to="/properties">
          <Button colorScheme="red" size="lg">
            Ver mas propiedades
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default SearchBar;
