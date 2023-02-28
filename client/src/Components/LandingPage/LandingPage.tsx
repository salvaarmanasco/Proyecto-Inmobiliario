import React from "react";
import Tittle from "../Tittle/Tittle";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import Carrousel from "../Carrousel/Carrousel";
import Newsletter from "../Newsletter/Newsletter";
import JoinTeam from "../JoinTeam/JoinTeam";
import Counter from "../Counter/Counter";
import Maps from "../Maps/Maps";

const LandingPage = () => {
  return (
    <>
      <Tittle />
      <SearchBar />
      <Cards />
      <Carrousel />
      <Newsletter />
      <JoinTeam />
      <Counter />
      <Maps />
    </>
  );
};

export default LandingPage;
