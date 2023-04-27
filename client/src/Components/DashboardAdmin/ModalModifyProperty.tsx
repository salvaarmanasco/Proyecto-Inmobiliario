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
  Input,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import React from "react";

function ModalModifyProperty({ id }: { id: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef(null);
  return (
    <>
      <Link href={`/modificar/${id}`}>
        <Button ref={btnRef} /* onClick={onOpen} */ colorScheme="red">
          Editar
        </Button>
      </Link>
      <Link href={`/modificar3/${id}`}>
        <Button marginLeft={3} ref={btnRef} colorScheme="red">
          Editar Imagenes
        </Button>
      </Link>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        size="5xl"
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modificar propiedad</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Text>Titulo</Text>
              <Input />
              <Text>Descripcion</Text>
              <Input />
              <Text>Primer Imagen</Text>
              <Input />
              <Text>Precio</Text>
              <Input />
              <Text>Antiguedad</Text>
              <Input />
              <Text>Direccion</Text>
              <Input />
              <Text>Zona</Text>
              <Input />
              <Text>Dormitorios</Text>
              <Input />
              <Text>Baños</Text>
              <Input />
              <Text>Ambientes</Text>
              <Input />
              <Text>Pileta</Text>
              <Checkbox />
              <Text>Asensor</Text>
              <Checkbox />
              <Text>Pisos</Text>
              <Input />
              <Text>Ameneties</Text>
              <Checkbox />
              <Text>Garage</Text>
              <Checkbox />
              <Text>Balcon</Text>
              <Checkbox />
              <Text>Letrero</Text>
              <Checkbox />
              <Text>Orientacion</Text>
              <Input />
              <Text>M2 cubiertos</Text>
              <Input />
              <Text>M2 totales</Text>
              <Input />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalModifyProperty;
