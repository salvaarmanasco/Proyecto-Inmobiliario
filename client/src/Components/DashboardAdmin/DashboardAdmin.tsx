import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
import ModalUsers from "./ModalUsers";
import { useEffect, useState } from "react";
import { getProperties, getUsers } from "./DashBoardFunctions";
import Property from "../../Interfaces/Property";

interface User {
  wishList: null | string[];
  id: string;
  name: string;
  lastname: null | string;
  email: string;
  phone: null | string;
  photo: null | string;
  createdAt: string;
  updatedAt: string;
  UserTypeId: null | number;
  UserType: null | string;
}

const DashboardAdmin = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const propertiesData = await getProperties();
      const usersData = await getUsers();

      setProperties(propertiesData);
      setUsers(usersData);
    };

    fetchData();
  }, []);

  const handleDeleteProperty = (id: string) => {
    console.log(id);
  };

  const handleDeleteUser = (id: string) => {
    console.log(id);
  };

  return (
    <Box p={4} minH="100vh">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Dashboard de Administrador
      </Text>

      <Text fontSize="xl" fontWeight="bold" mb={2}>
        Propiedades
      </Text>
      <Table variant="striped" colorScheme="red">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nombre</Th>
            <Th>Ubicación</Th>
            <Th>Precio</Th>
            <Th>Asesor</Th>
            <Th>Modificar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {properties &&
            properties.map((p) => (
              <Tr key={p.id}>
                <Td>{p.id}</Td>
                <Td>{p.title}</Td>
                <Td>{p.address}</Td>
                <Td>{p.price}</Td>
                <Td>Juan perezxs</Td>
                <Td>
                  <Button
                    mr={3}
                    colorScheme="red"
                    onClick={() => handleDeleteProperty(p.id)}
                  >
                    Eliminar
                  </Button>
                  <Button colorScheme="red">Editar</Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>

      <Text fontSize="xl" fontWeight="bold" mt={8} mb={2}>
        Usuarios
      </Text>
      <Table variant="striped" colorScheme="red">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nombre</Th>
            <Th>Correo</Th>
            <Th>Cantidad de propiedades</Th>
            <Th>Tipo de usuario</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users &&
            users.map((u) => (
              <Tr key={u.id}>
                <Td>{u.id}</Td>
                <Td>{u.name}</Td>
                <Td>{u.email}</Td>
                <Td>13</Td>
                <Td color="red">admin</Td>
                <Td>
                  <Button
                    mr={3}
                    colorScheme="red"
                    onClick={() => handleDeleteUser(u.id)}
                  >
                    Eliminar
                  </Button>
                  <ModalUsers id={u.id} name={u.name} />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DashboardAdmin;
