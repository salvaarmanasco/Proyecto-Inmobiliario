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
import Swal from "sweetalert2";
import ModalUsers from "./ModalUsers";
import { useEffect, useState } from "react";
import {
  getProperties,
  getUsers,
  deleteProperty,
  deleteUser,
} from "./DashBoardFunctions";
import Property from "../../Interfaces/Property";
import { useAuth0 } from "@auth0/auth0-react";
import ModalModifyProperty from "./ModalModifyProperty";

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
  deleted: boolean;
  userType: number;
}

const DashboardAdmin = () => {
  const { user } = useAuth0();
  const [properties, setProperties] = useState<Property[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const userIsAdmin = user && users?.find((u) => u.email === user.email);

  useEffect(() => {
    const fetchData = async () => {
      const propertiesData = await getProperties();
      const usersData = await getUsers();

      setProperties(propertiesData.filter((p: Property) => p.deleted !== true));
      setUsers(usersData.filter((u: User) => u.deleted !== true));
    };

    fetchData();
  }, [users, properties]);

  const handleDeleteProperty = async (id: string) => {
    try {
      Swal.fire({
        text: "Estas seguro que deseas eliminar la Propiedad?",
        width: "30%",
        padding: "10px",
        allowEnterKey: true,
        allowEscapeKey: true,
        icon: "question",
        background: "black",
        showCancelButton: true,
        confirmButtonColor: "#00711a",
        cancelButtonColor: "#b50707",
        confirmButtonText: "Eliminar",
      }).then(async (response: { isConfirmed: boolean }) => {
        if (response.isConfirmed) {
          await deleteProperty(id);
        }
      });
    } catch (error) {
      console.error("Ocurrió un error al borrar la propiedad", error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      Swal.fire({
        text: "Estas seguro que deseas eliminar el Usuario?",
        width: "30%",
        padding: "10px",
        allowEnterKey: true,
        allowEscapeKey: true,
        icon: "question",
        background: "black",
        showCancelButton: true,
        confirmButtonColor: "#00711a",
        cancelButtonColor: "#b50707",
        confirmButtonText: "Eliminar",
      }).then(async (response: { isConfirmed: boolean }) => {
        if (response.isConfirmed) {
          await deleteUser(id);
        }
      });
    } catch (error) {
      console.error("Ocurrió un error al borrar el usuario", error);
    }
  };

  return (
    <>
      {user && userIsAdmin?.userType === 1 && (
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
                      <ModalModifyProperty id={p.id} />
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
                <Th>Avatar</Th>
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
                    <Td>
                      <img
                        src={
                          u.photo === null
                            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFnzAfdBtvvv0kjwOciFQcJhGbhGLY8fBKQ&usqp=CAU"
                            : u.photo
                        }
                        alt="avatarUser"
                        width="40px"
                        height="40px"
                      />
                    </Td>
                    <Td>{u.name}</Td>
                    <Td>{u.email}</Td>
                    <Td>13</Td>
                    <Td
                      color={
                        u.userType === 1
                          ? "red"
                          : u.userType === 2
                          ? "blue"
                          : "green"
                      }
                    >
                      {u.userType === 1
                        ? "Admin"
                        : u.userType === 2
                        ? "Asesor"
                        : "Cliente"}
                    </Td>
                    <Td>
                      <Button
                        mr={3}
                        colorScheme="red"
                        onClick={() => handleDeleteUser(u.id)}
                        isDisabled={u.email === user?.email}
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
      )}
    </>
  );
};

export default DashboardAdmin;
