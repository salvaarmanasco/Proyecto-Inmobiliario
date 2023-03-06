import React, { useEffect } from "react";
import Tittle from "../Tittle/Tittle";
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";
import Carrousel from "../Carrousel/Carrousel";
import Newsletter from "../Newsletter/Newsletter";
import JoinTeam from "../JoinTeam/JoinTeam";
import Counter from "../Counter/Counter";

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
    </>
  );
};

export default LandingPage;
