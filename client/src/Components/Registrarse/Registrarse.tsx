import { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  VStack,
} from "@chakra-ui/react";

import Swal from "sweetalert2";

import Users from "../../Interfaces/Users";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../Redux/store";
import { createUsuario } from "../../Redux/reducer/Users";

import { useHistory } from "react-router-dom";

export default function Registrarse() {
  const history = useHistory();
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [user, setUser] = useState<Users>({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: 0,
    photo: "",
    wishList: [],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      Swal.fire({
        text: "Estas seguro que deseas crear este Usuario?",
        width: "30%",
        padding: "10px",
        allowEnterKey: true,
        allowEscapeKey: true,
        icon: "question",
        background: "black",
        showCancelButton: true,
        confirmButtonColor: "#00711a",
        cancelButtonColor: "#b50707",
        confirmButtonText: "Si, crealo!",
      }).then((response) => {
        if (response.isConfirmed) {
          dispatch(createUsuario(user));
          history.push("/");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch" alignItems="center">
        <FormControl id="name" w="50%">
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl id="lastname" w="50%">
          <FormLabel>Apellido</FormLabel>
          <Input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl id="email" w="50%">
          <FormLabel>E-Mail</FormLabel>
          <Input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl id="phone" w="50%">
          <FormLabel>Telefono</FormLabel>
          <Input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl id="photo" w="50%">
          <FormLabel>Foto</FormLabel>
          <Input type="text" name="photo" onChange={handleInputChange} />
        </FormControl>
        <Grid pb="4">
          <Button type="submit">Guardar</Button>
        </Grid>
      </VStack>
    </form>
  );
}
