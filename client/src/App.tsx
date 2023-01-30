import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import NavBar from "./Components/NavBar/NavBar";
import Tittle from "./Components/Tittle/Tittle";
import SearchBar from "./Components/SearchBar/SearchBar";
import Cards from "./Components/Cards/Cards";
import Carrousel from "./Components/Carrousel/Carrousel";
import Newsletter from "./Components/Newsletter/Newsletter";
import JoinTeam from "./Components/JoinTeam/JoinTeam";
import Counter from "./Components/Counter/Counter";
import Footer from "./Components/Footer/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl"></Box>
    <NavBar />
    <Tittle />
    <SearchBar />
    <Carrousel />
    <Cards />
    <Newsletter />
    <JoinTeam />
    <Counter />
    <Footer />
  </ChakraProvider>
);
