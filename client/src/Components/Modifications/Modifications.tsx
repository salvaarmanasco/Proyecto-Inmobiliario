import { useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import { fetchPropertiesId } from "../../Redux/reducer/Properties";
import MatchParams from "../../Interfaces/MatchParams";
import { RouteComponentProps } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { createProperty } from "../../Redux/reducer/Properties";
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
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

// -----------------------------------------------GOOGLE MAPS-------------------------------------------------
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import { MarkerProps } from "../../Interfaces/Marker&&MapProps";
import FormData2 from "../../Interfaces/FormData";

const initialFormData: FormData2 = {
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
  firstImage: "",
  lat: -31.657441,
  long: -60.710534,
  price: 1,
  zone: "",
};

// ------------------------------------------------------------------------------------------------------------

const Modifications = ({ match }: RouteComponentProps<MatchParams>) => {
  const [formData, setFormData] = useState<FormData2>(initialFormData);
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
    price,
    zone,
  } = formData;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchPropertiesId(id))
      .then((action) => {
        if (action.payload) {
          setFormData({
            antiquity: action.payload.antiquity,
            address: action.payload.adress,
            title: action.payload.title,
            bedrooms: action.payload.bedrooms,
            bathrooms: action.payload.bathrooms,
            environments: action.payload.environments,
            pool: action.payload.pool,
            elevator: action.payload.elevator,
            floor_th: action.payload.floor_th,
            orientation: action.payload.orientation,
            m2_covered: action.payload.m2_covered,
            m2_totals: action.payload.m2_totals,
            garage: action.payload.garage,
            amenities: action.payload.amenities,
            description: action.payload.description,
            furnished: action.payload.furnished,
            balcony: action.payload.balcony,
            sign: action.payload.sign,
            lat: action.payload.lat,
            long: action.payload.long,
            price: action.payload.price,
            zone: action.payload.zone,
            firstImage: action.payload.firstImage,
          });
        }
      })
      .catch((error) => {
        console.log("Error fetching properties:", error);
      });
  }, [dispatch, match.params]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await dispatch(createProperty(formData));
      const createdProperty = response.payload;
      setIsSubmitting(false);
      console.log(formData);
      console.log("Property created:", createdProperty);
    } catch (error) {
      console.log("Error creating properties:", error);
      setIsSubmitting(false);
    }
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
    formData
      ? setFormData({
          ...formData,
          [name]: newValue,
        })
      : console.log("nO hay que modificar");
  };

  const [marker, setMarker] = useState<MarkerProps | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });

  const handleMarkerClick = () => {
    console.log("Marker clicked");
  };

  const handleMapClick = (event: any) => {
    setMarker({
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      onClick: handleMarkerClick,
    });
    setFormData({
      ...formData,
      lat: marker?.position.lat,
      long: marker?.position.lng,
    });
    console.log(marker?.position);
  };

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("cambio imagen");
  }, [formData?.firstImage]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: any = event.target.files;
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
    setFormData({
      ...formData,
      firstImage: file.secure_url,
    });
    setLoading(false);
  };

  useEffect(() => {
    if (marker) {
      setFormData({
        ...formData,
        lat: marker.position?.lat,
        long: marker.position?.lng,
      });
      console.log(marker.position);
    }
  }, [marker]);

  return (
    <Center my={4}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} width={500}>
          <FormControl id="title" isRequired>
            <FormLabel>Título de la publicación</FormLabel>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="price" isRequired>
            <FormLabel>Precio</FormLabel>
            <Input
              type="number"
              name="price"
              value={price}
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
          <GridItem colSpan={2}>
            <FormControl id="zone" isRequired>
              <FormLabel>Barrio</FormLabel>
              <Input
                type="text"
                name="zone"
                value={formData?.zone}
                onChange={handleInputChange}
              />
            </FormControl>
          </GridItem>
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
              <FormLabel>M2 totales</FormLabel>
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
                <FormLabel>Imagen principal</FormLabel>
                <Input
                  type="file"
                  name="firstImage"
                  onChange={handleImageUpload}
                />
              </FormControl>
              {formData.firstImage && (
                <Box mt={4}>
                  <Image src={formData.firstImage} alt={"Imagen principal"} />
                </Box>
              )}
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
        </Stack>
        <Text textAlign="center" my={5} fontSize={20} fontWeight={10}>
          Colocar ubicación{" "}
        </Text>
        <div style={{ height: "50vh", width: "100%" }}>
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={{ height: "100%", width: "100%" }}
              zoom={12}
              center={{ lat: -31.64881, lng: -60.70868 }}
              onClick={handleMapClick}
            >
              {marker && (
                <Marker position={marker.position} onClick={marker.onClick} />
              )}
            </GoogleMap>
          )}
        </div>
        <Button
          type="submit"
          isLoading={isSubmitting}
          loadingText="Submitting..."
          width={500}
          my={10}
        >
          Crear
        </Button>
      </form>
    </Center>
  );
};

export default Modifications;
