import { Box, Stack, Input, Select } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <Box textAlign="center" fontSize="xl">
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

        <Input placeholder="Busqueda" size="md" width="md" />
      </Stack>
    </Box>
  );
};

export default SearchBar;
