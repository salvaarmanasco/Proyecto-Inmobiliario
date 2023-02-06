import { Box, Stack, Input, Select } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Box textAlign="center" fontSize="xl" mb="20" mt="10">
      <Stack
        justifyContent="center"
        align="center"
        direction={{ base: "column", sm: "column", md: "row" }}
      >
        <Select
          icon={<ChevronDownIcon />}
          placeholder="Tipo de operacion"
          w="180px"
        >
          <option>Venta</option>
          <option>Alquiler</option>
        </Select>

        <Input
          placeholder="Busqueda"
          size="md"
          width={{ base: "80%", md: "40%" }}
        />
      </Stack>
    </Box>
  );
};

export default SearchBar;
