
//Este codigo implementa  funcion spin y usa estados para que el spin sea independiente en cada componente

import { useState } from "react";
import { Card, CardBody, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUserTie, faAward } from "@fortawesome/free-solid-svg-icons";

interface FontAwesomeIconWithSpinProps {
  icon: any;
  size: any;
}

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

export default function Counter() {
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
            <Text textAlign="center">Propiedades Vendidas</Text>
            <FontAwesomeIconWithSpin icon={faKey} size="3x" />
            <Text textAlign="center" fontSize="3xl">
              450
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Text textAlign="center">Asesores</Text>
            <FontAwesomeIconWithSpin icon={faUserTie} size="3x" />
            <Text textAlign="center" fontSize="3xl">
              450
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Text textAlign="center">Años de franquicia</Text>
            <FontAwesomeIconWithSpin icon={faAward} size="3x" />
            <Text textAlign="center" fontSize="3xl">
              450
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Center>
  );
}
// //este codigo dejo los iconos fijos. el siguiente implementa el splin.
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Text,
//   Box,
//   Img,
//   Flex,
//   SimpleGrid,
//   Center,
//   Icon,
// } from "@chakra-ui/react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faKey, faUserTie, faAward } from "@fortawesome/free-solid-svg-icons";

// export default function Counter() {
//   return (
//     <Center my={5}>
//       <SimpleGrid
//         gap={4}
//         columns={3}
//         alignContent="center"
//         alignItems="flex-start"
//         justifyContent="center"
//       >
//         <Card>
//           <CardBody>
//             <Text textAlign="center">Propiedades Vendidas</Text>
//             <Center>
//               <FontAwesomeIcon
//                 icon={faKey}
//                 size="3x"
//                 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
//               />
//             </Center>
//             <Text textAlign="center" fontSize="3xl">
//               450
//             </Text>
//           </CardBody>
//         </Card>
//         <Card>
//           <CardBody>
//             <Text textAlign="center">Asesores</Text>
//             <Center>
//               <FontAwesomeIcon
//                 icon={faUserTie}
//                 size="3x"
//                 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
//               />
//             </Center>
//             <Text textAlign="center" fontSize="3xl">
//               450
//             </Text>
//           </CardBody>
//         </Card>
//         <Card>
//           <CardBody>
//             <Text textAlign="center">Años de franquicia</Text>
//             <Center>
//               <FontAwesomeIcon
//                 icon={faAward}
//                 size="3x"
//                 style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
//               />
//             </Center>
//             <Text textAlign="center" fontSize="3xl">
//               450
//             </Text>
//           </CardBody>
//         </Card>
//       </SimpleGrid>
//     </Center>
//   );
// }
