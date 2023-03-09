import React, { useState } from "react";
import {
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
  Stack,
  Center,
  GridItem,
} from "@chakra-ui/react";

import FormData from "../../Interfaces/FormData";

const initialFormData: FormData = {
  title: "",
  antiquity: 0,
  address: "",
  bedrooms: 0,
  bathrooms: 0,
  environments: 0,
  pool: false,
  elevator: false,
  floor_th: 0,
  orientation: "",
  m2_totals: 0,
  m2_covered: 0,
  garage: false,
  amenities: false,
  description: "",
  furnished: false,
  balcony: false,
  sign: false,
  firstImage: "https://www.raesinversiones.com:8899/Imagenes/Oficina/6.jpg",
  lat: -31.657441,
  long: -60.710534,
};

export default function Form() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    title,
    antiquity,
    address,
    bedrooms,
    bathrooms,
    environments,
    pool,
    elevator,
    floor_th,
    orientation,
    m2_totals,
    m2_covered,
    garage,
    amenities,
    description,
    furnished,
    balcony,
    sign,
    firstImage,
    lat,
    long,
  } = formData;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitting(false);
    console.log(formData);
    setFormData(initialFormData);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    const newValue =
      event.target instanceof HTMLInputElement &&
      event.target.type === "checkbox"
        ? event.target.checked
        : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return (
    <Center my={4}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} width={500}>
          <FormControl id="title" isRequired>
            <FormLabel>Título de la publicación</FormLabel>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Dirección</FormLabel>
            <Input
              type="text"
              name="address"
              value={address}
              onChange={handleInputChange}
            />
          </FormControl>
          <SimpleGrid columns={2} gap={2}>
            <FormControl id="bedrooms" isRequired>
              <FormLabel>Dormitorios</FormLabel>
              <Input
                type="number"
                name="bedrooms"
                value={bedrooms}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="bathrooms" isRequired>
              <FormLabel>Baños</FormLabel>
              <Input
                type="number"
                name="bathrooms"
                value={bathrooms}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="antiquity" isRequired>
              <FormLabel>Antiguedad (años)</FormLabel>
              <Input
                type="number"
                name="antiquity"
                value={antiquity}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="environments" isRequired>
              <FormLabel>Ambientes</FormLabel>
              <Input
                type="number"
                name="environments"
                value={environments}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="floor_th">
              <FormLabel>Piso</FormLabel>
              <Input
                type="number"
                name="floor_th"
                value={floor_th}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="orientation" isRequired>
              <FormLabel>Orientación</FormLabel>
              <Input
                type="text"
                name="orientation"
                value={orientation}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="m2_totals" isRequired>
              <FormLabel>TM2 totales</FormLabel>
              <Input
                type="number"
                name="m2_totals"
                value={m2_totals}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="m2_covered" isRequired>
              <FormLabel>M2 cubiertos</FormLabel>
              <Input
                type="number"
                name="m2_covered"
                value={m2_covered}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="lat" isRequired>
              <FormLabel>Latitud</FormLabel>
              <Input
                type="number"
                name="lat"
                value={lat}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="long" isRequired>
              <FormLabel>Longitud</FormLabel>
              <Input
                type="number"
                name="long"
                value={long}
                onChange={handleInputChange}
              />
            </FormControl>
            <GridItem colSpan={2}>
              <FormControl id="description" isRequired>
                <FormLabel>Descripción</FormLabel>
                <Textarea
                  name="description"
                  value={description}
                  onChange={handleInputChange}
                  height={200}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="firstImage" isRequired>
                <FormLabel>Link imagen principal</FormLabel>
                <Input
                  type="text"
                  name="firstImage"
                  value={firstImage}
                  onChange={handleInputChange}
                />
              </FormControl>
            </GridItem>
          </SimpleGrid>
          <FormLabel textAlign="center">Extras</FormLabel>
          <SimpleGrid columns={2}>
            <FormControl id="pool" mb={3}>
              <Checkbox
                name="pool"
                isChecked={pool}
                onChange={handleInputChange}
              >
                Tiene piscina?
              </Checkbox>
            </FormControl>
            <FormControl id="elevator" mb={3}>
              <Checkbox
                name="elevator"
                isChecked={elevator}
                onChange={handleInputChange}
              >
                Tiene ascensor?
              </Checkbox>
            </FormControl>
            <FormControl id="garage" mb={3}>
              <Checkbox
                name="garage"
                isChecked={garage}
                onChange={handleInputChange}
              >
                Tiene cochera?
              </Checkbox>
            </FormControl>
            <FormControl id="amenities" mb={3}>
              <Checkbox
                name="amenities"
                isChecked={amenities}
                onChange={handleInputChange}
              >
                Tiene amenities?
              </Checkbox>
            </FormControl>
            <FormControl id="furnished" mb={3}>
              <Checkbox
                name="furnished"
                isChecked={furnished}
                onChange={handleInputChange}
              >
                Se vende amoblado?
              </Checkbox>
            </FormControl>
            <FormControl id="balcony" mb={3}>
              <Checkbox
                name="balcony"
                isChecked={balcony}
                onChange={handleInputChange}
              >
                Tiene balcon?
              </Checkbox>
            </FormControl>
            <FormControl id="sign" mb={3}>
              <Checkbox
                name="sign"
                isChecked={sign}
                onChange={handleInputChange}
              >
                Tiene cartel de venta/alquiler?
              </Checkbox>
            </FormControl>
          </SimpleGrid>
          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingText="Submitting..."
          >
            Crear
          </Button>
        </Stack>
      </form>
    </Center>
  );
}
