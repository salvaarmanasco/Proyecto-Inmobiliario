import React, { useEffect, useState } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Divider,
  Stack,
  Checkbox,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Input,
  NumberInput,
  NumberInputField,
  Box,
  Switch,
} from "@chakra-ui/react";

const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const [m2Terrrain, setM2Terrain] = useState({
    min: 0,
    max: 5000,
  });
  const [m2cover, setM2cover] = useState({
    min: 0,
    max: 1500,
  });

  useEffect(() => {
    setM2Terrain({ min: 0, max: 5000 });
    setM2cover({ min: 0, max: 1500 });
  }, [isOpen]);

  return (
    <>
      <Button colorScheme="red" ml={2} ref={btnRef} onClick={onOpen}>
        Mas filtros
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        size="3xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="3xl">Mas filtros</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack mt={5}>
              <Text fontSize="xl" as="b">
                Tipo de operación
              </Text>
              <Divider />
              <Flex direction="column">
                <Checkbox colorScheme="red">Venta</Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Alquiler
                </Checkbox>
              </Flex>
            </Stack>
            <Stack mt={5}>
              <Text fontSize="xl" as="b">
                Ubicacion o palabra clave
              </Text>
              <Divider />
              <Input focusBorderColor="red.500" />
            </Stack>
            <Stack mt={5}>
              <Text fontSize="xl" as="b">
                Tipo de inmueble
              </Text>
              <Divider />
              <Flex direction="column">
                <Checkbox colorScheme="red">Casa</Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Departamento
                </Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Local
                </Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Oficina
                </Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Cochera
                </Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Galpón
                </Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Quinta
                </Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Terreno
                </Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Campo
                </Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Monoambiente
                </Checkbox>
                <Checkbox colorScheme="red" mt={2}>
                  Interno
                </Checkbox>
              </Flex>
            </Stack>
            <Stack mt={5}>
              <Text fontSize="xl" as="b">
                Superficie del terreno
              </Text>
              <Divider />
              <RangeSlider
                defaultValue={[0, 5000]}
                min={0}
                max={10000}
                colorScheme="red"
                onChange={(value) =>
                  setM2Terrain({ min: value[0], max: value[1] })
                }
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Text>
                {m2Terrrain.min} m2 - {m2Terrrain.max} m2
              </Text>
            </Stack>
            <Stack mt={5}>
              <Text fontSize="xl" as="b">
                Superficie cubierta
              </Text>
              <Divider />
              <RangeSlider
                defaultValue={[0, 1500]}
                min={0}
                max={3000}
                colorScheme="red"
                onChange={(value) =>
                  setM2cover({ min: value[0], max: value[1] })
                }
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Text>
                {m2cover.min} m2 - {m2cover.max} m2
              </Text>
            </Stack>
            <Stack mt={5}>
              <Text fontSize="xl" as="b">
                Otras Caracteristicas
              </Text>
              <Divider />
              <Flex direction="column">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text>Habitaciones</Text>
                  <NumberInput w={100} min={0}>
                    <NumberInputField />
                  </NumberInput>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  mt={2}
                  justifyContent="space-between"
                >
                  <Text>Baños</Text>
                  <NumberInput w={100} min={0}>
                    <NumberInputField />
                  </NumberInput>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  mt={2}
                  justifyContent="space-between"
                >
                  <Text>Cochera</Text>
                  <Switch colorScheme="red" size="md" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  mt={5}
                  justifyContent="space-between"
                >
                  <Text>Patio</Text>
                  <Switch colorScheme="red" size="md" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  mt={5}
                  justifyContent="space-between"
                >
                  <Text>Gas Natural</Text>
                  <Switch colorScheme="red" size="md" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  mt={5}
                  justifyContent="space-between"
                >
                  <Text>Cloacas</Text>
                  <Switch colorScheme="red" size="md" />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  mt={5}
                >
                  <Text>Antiguedad</Text>
                  <NumberInput w={100} min={0}>
                    <NumberInputField />
                  </NumberInput>
                </Box>
              </Flex>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Filter;
