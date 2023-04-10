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
import Form from "./Components/Form/Form";
import Form2 from "./Components/Form2/Form2";
import UserPanel from "./Components/UserPanel/UserPanel";
import DashboardAdmin from "./Components/DashboardAdmin/DashboardAdmin";
import Registrarse from "./Components/Registrarse/Registrarse";

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/properties" component={PropertiesPage} />
      <Route exact path="/properties/:id" component={CardDetails} />
      <Route exact path="/about" component={About} />
      <Route exact path="/franchise" component={Franchise} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/form2" component={Form2} />
      <Route path="/profile/:id" component={UserPanel} />
      <Route path="/profile" component={UserPanel} />
      <Route path="/admin" component={DashboardAdmin} />
      <Route path="/registrarse" component={Registrarse} />
      <Route path="*" component={Page404} />
    </Switch>
    <Footer />
  </ChakraProvider>
);
