import { ChakraProvider, theme } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import Franchise from "./Components/Franchise/Franchise";
import Page404 from "./Components/Page404/Page404";
import PropertiesPage from "./Components/PropertiesPage/PropertiesPage";
import CardDetails from "./Components/CardsDetail/CardDetails";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/properties" component={PropertiesPage} />
      <Route exact path="/properties/:id" component={CardDetails} />
      <Route exact path="/about" component={About} />
      <Route exact path="/franchise" component={Franchise} />
      <Route path="*" component={Page404} />
    </Switch>
    <Footer />
  </ChakraProvider>
);
