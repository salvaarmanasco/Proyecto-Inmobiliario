//Este codigo implementa  funcion spin y usa estados para que el spin sea independiente en cada componente
// ver en el componente propertipages el dispatch, y state.properties.properties, luego el redux de properties, ver los array que devuelve y los datso que necesito.

// estoy tratando de reproducir el useEffect del property per page y no entiendo el identado,

import { useState, useEffect } from "react";
import { Card, CardBody, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUserTie, faAward } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../Redux/reducer/Properties";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";

////------------------------------- Interfaz TS
interface FontAwesomeIconWithSpinProps {
  icon: any;
  size: any;
}

//--------------------------------- SPIN de font awesome
const FontAwesomeIconWithSpin = ({
  icon,
  size,
}: FontAwesomeIconWithSpinProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Center
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      <FontAwesomeIcon
        icon={icon}
        size={size}
        spin={isHovered}
        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
      />
    </Center>
  );
};

const Counter = () => {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  let allProperties = useSelector(
    (state: RootState) => state.properties.properties
  );
  allProperties = allProperties.filter((p) => p?.Categories.length > 0);
  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <Center my={5}>
      <SimpleGrid
        gap={4}
        columns={3}
        alignContent="center"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Card>
          <CardBody>
            <Text textAlign="center">Propiedades publicadas</Text>
            <FontAwesomeIconWithSpin icon={faKey} size="3x" />
            <Text textAlign="center" fontSize="3xl">
              {allProperties.length}
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Text textAlign="center">Asesores</Text>
            <FontAwesomeIconWithSpin icon={faUserTie} size="3x" />
            <Text textAlign="center" fontSize="3xl">
              59
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Text textAlign="center">Años de franquicia</Text>
            <FontAwesomeIconWithSpin icon={faAward} size="3x" />
            <Text textAlign="center" fontSize="3xl">
              17
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Center>
  );
};

export default Counter;
