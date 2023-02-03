import { ChakraProvider, Box, theme } from "@chakra-ui/react";
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
    <NavBar />
    <Box textAlign="center" minHeight="100vh">
      <Tittle />
      <SearchBar />
      <Carrousel />
      <Cards />
      <Newsletter />
      <JoinTeam />
      <Counter />
    </Box>
    <Footer />
  </ChakraProvider>
);
