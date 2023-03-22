import { Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormGroup, Input } from "reactstrap";

function About() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState<any>("");

  const uploadImage = async (e: any) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "proyectoinmobiliario");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxexjxoiz/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
  };
  console.log(image);
  return (
    <Center flexDirection="column">
      <Text>Subir imagenes</Text>
      <FormGroup>
        <Input type="file" name="file" onChange={uploadImage} />
      </FormGroup>
    </Center>
  );
}

export default About;
