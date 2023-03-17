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
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { propertiesActions } from "../../Redux/reducer/Properties";

export interface AllFilters {
  condition: Array<string>;
  categories: Array<string>;
  minCoveredM2: number;
  maxCoveredM2: number;
  mintotalM2: number;
  maxtotalM2: number;
  numBedrooms: number;
  numBathrooms: number;
  numAntiquity: number;
  garage: boolean;
  garden: boolean;
}

const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    filterPropertiesByAntiquity,
    filterPropertiesByBathrooms,
    filterPropertiesByCategory,
    filterPropertiesByCondition,
    filterPropertiesByCoveredM2,
    filterPropertiesByGarage,
    filterPropertiesByGarden,
    filterPropertiesByRooms,
    filterPropertiesByTotalM2,
  } = propertiesActions;
  const dispatch = useDispatch();
  const btnRef = React.useRef(null);
  const [m2Terrrain, setM2Terrain] = useState({
    min: 0,
    max: 5000,
  });
  const [m2cover, setM2cover] = useState({
    min: 0,
    max: 1500,
  });

  const [filter, setFilter] = useState<AllFilters>({
    condition: [],
    categories: [],
    minCoveredM2: 0,
    maxCoveredM2: 0,
    mintotalM2: 0,
    maxtotalM2: 0,
    numBedrooms: 0,
    numBathrooms: 0,
    numAntiquity: 0,
    garage: false,
    garden: false,
  });

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const handleFilterChange = (key: string, value: any) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [key]: value,
    }));
  };

  // const handleSubmit = () => {
  //   dispatch()
  // };

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
                <Checkbox
                  colorScheme="red"
                  onChange={(e) =>
                    handleFilterChange(
                      "condition",
                      e.target.checked
                        ? ["venta", ...filter.condition]
                        : filter.condition.filter(
                            (condition) => condition !== "venta"
                          )
                    )
                  }
                  isChecked={filter.condition.includes("venta")}
                >
                  Venta
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "condition",
                      e.target.checked
                        ? ["alquiler", ...filter.condition]
                        : filter.condition.filter(
                            (condition) => condition !== "alquiler"
                          )
                    )
                  }
                  isChecked={filter.condition.includes("alquiler")}
                >
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
                <Checkbox
                  colorScheme="red"
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["casa", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "casa"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("casa")}
                >
                  Casa
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["departamento", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "departamento"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("departamento")}
                >
                  Departamento
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["local", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "local"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("local")}
                >
                  Local
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["oficina", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "oficina"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("oficina")}
                >
                  Oficina
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["cochera", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "cochera"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("cochera")}
                >
                  Cochera
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["galpon", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "galpon"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("galpon")}
                >
                  Galpón
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["quinta", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "quinta"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("quinta")}
                >
                  Quinta
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["terreno", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "terreno"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("terreno")}
                >
                  Terreno
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["campo", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "campo"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("campo")}
                >
                  Campo
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["monoambiente", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "monoambiente"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("monoambiente")}
                >
                  Monoambiente
                </Checkbox>
                <Checkbox
                  colorScheme="red"
                  mt={2}
                  onChange={(e) =>
                    handleFilterChange(
                      "categories",
                      e.target.checked
                        ? ["interno", ...filter.categories]
                        : filter.categories.filter(
                            (categories) => categories !== "interno"
                          )
                    )
                  }
                  isChecked={filter.categories.includes("interno")}
                >
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
                defaultValue={[m2Terrrain.min, m2Terrrain.max]}
                min={0}
                max={5000}
                colorScheme="red"
                onChange={(value) => {
                  setM2Terrain({ min: value[0], max: value[1] });
                  setFilter({
                    ...filter,
                    mintotalM2: value[0],
                    maxtotalM2: value[1],
                  });
                }}
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
                defaultValue={[m2cover.min, m2cover.max]}
                min={0}
                max={1500}
                colorScheme="red"
                onChange={(value) => {
                  setM2cover({ min: value[0], max: value[1] });
                  setFilter({
                    ...filter,
                    minCoveredM2: value[0],
                    maxCoveredM2: value[1],
                  });
                }}
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
                    <NumberInputField
                      name="numBedrooms"
                      placeholder="Hasta..."
                      value={filter.numBedrooms}
                      onChange={(e) =>
                        handleFilterChange(
                          "numBedrooms",
                          Number(e.target.value)
                        )
                      }
                    />
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
                    <NumberInputField
                      name="numBathrooms"
                      placeholder="Hasta..."
                      value={filter.numBathrooms}
                      onChange={(e) =>
                        handleFilterChange(
                          "numBathrooms",
                          Number(e.target.value)
                        )
                      }
                    />
                  </NumberInput>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  mt={2}
                  justifyContent="space-between"
                >
                  <Text>Cochera</Text>
                  <Checkbox
                    colorScheme="red"
                    size="md"
                    onChange={(e) =>
                      handleFilterChange(
                        "garage",
                        e.target.checked ? true : false
                      )
                    }
                    isChecked={filter.garage}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  mt={5}
                  justifyContent="space-between"
                >
                  <Text>Patio</Text>
                  <Checkbox
                    colorScheme="red"
                    size="md"
                    onChange={(e) =>
                      handleFilterChange(
                        "garden",
                        e.target.checked ? true : false
                      )
                    }
                    isChecked={filter.garden}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  mt={5}
                >
                  <Text>Antiguedad</Text>
                  <NumberInput w={100} min={0}>
                    <NumberInputField
                      name="numAntiquity"
                      placeholder="Hasta..."
                      value={filter.numAntiquity}
                      onChange={(e) =>
                        handleFilterChange(
                          "numAntiquity",
                          Number(e.target.value)
                        )
                      }
                    />
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
