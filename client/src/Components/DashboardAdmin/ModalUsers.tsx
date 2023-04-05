import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React from "react";

function ModalUsers({ id, name }: { id: string; name: string }) {
  const propiedades = [
    {
      id: 1,
      nombre: "Propiedad 1",
      ubicacion: "Ubicación 1",
      precio: 123123,
      asesor: "juan perez",
    },
    {
      id: 2,
      nombre: "Propiedad 2",
      ubicacion: "Ubicación 2",
      precio: 123123,
      asesor: "juan sd",
    },
    {
      id: 3,
      nombre: "Propiedad 3",
      ubicacion: "Ubicación 3",
      precio: 123123,
      asesor: "juan aaa",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef(null);
  return (
    <>
      <Button ref={btnRef} onClick={onOpen} colorScheme="red">
        Ver propiedades del usuario
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        size="5xl"
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="2xl">{name}</Text>
            <Text fontSize="xl" fontWeight="bold" mt={8} mb={2}>
              Propiedades:
            </Text>
            <Table variant="striped" colorScheme="red">
              <Thead>
                <Tr>
                  <Th>
                    <Th>ID</Th>
                    <Th>Nombre</Th>
                    <Th>Ubicación</Th>
                    <Th>Precio</Th>
                    <Th>Modificar</Th>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tbody>
                  {propiedades.map((propiedad) => (
                    <Tr key={propiedad.id}>
                      <Td>{propiedad.id}</Td>
                      <Td>{propiedad.nombre}</Td>
                      <Td>{propiedad.ubicacion}</Td>
                      <Td>{propiedad.precio}</Td>

                      <Td>
                        <Button mr={3} colorScheme="red">
                          Eliminar
                        </Button>
                        <Button colorScheme="red">Editar</Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalUsers;
