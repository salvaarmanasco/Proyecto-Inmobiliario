import { Box, Text, Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  fetchCondition,
  fetchCountry,
  fetchGarden,
  fetchServices,
  fetchState,
} from "../../Redux/reducer/Tables";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../Redux/store";

const Counter = () => {
  const tables = useSelector((state: RootState) => state.tables);
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchCondition());
    dispatch(fetchCountry());
    dispatch(fetchGarden());
    dispatch(fetchServices());
    dispatch(fetchState());
  }, [dispatch]);
  return <Center>Counter</Center>;
};

export default Counter;
