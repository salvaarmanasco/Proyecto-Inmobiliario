import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPropertyCategory,
  createPropertyCondition,
  createPropertyCountry,
  createPropertyGarden,
  createPropertyServices,
  createPropertyState,
  createPropertyImage,
} from "../../Redux/reducer/Relations";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import { useHistory } from "react-router-dom";
import {
  fetchCategory,
  fetchCondition,
  fetchCountry,
  fetchGarden,
  fetchServices,
  fetchState,
} from "../../Redux/reducer/Tables";
import { createImage } from "../../Redux/reducer/Images";
import { FormLabel, Box, Button, Center, Text, Select } from "@chakra-ui/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import ItemDetailsProps from "../../Interfaces/ItemDetailsProps";
import { useAuth0 } from "@auth0/auth0-react";

const firebaseConfig = {
  apiKey: "AIzaSyD-vnKOH8h79lYgBVn_TYDNfuB9OZCd2Zs",
  authDomain: "urbe-7ccb5.firebaseapp.com",
  projectId: "urbe-7ccb5",
  storageBucket: "urbe-7ccb5.appspot.com",
  messagingSenderId: "15986602173",
  appId: "1:15986602173:web:c8a0e2647eef122c7fc7d4",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Form2({ location }: { location: ItemDetailsProps }) {
  const itemProp2 = location.state.itemProp.id;
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const [category, setCategory] = useState<any>([]);
  const [condition, setCondition] = useState([]);
  const [state, setState] = useState([]);
  const [country, setCountry] = useState([]);
  const [garden, setGarden] = useState<
    { id: number; garden_name: string | null | undefined }[]
  >([]);
  const [services, setServices] = useState<
    { id: number; services_name: string | null | undefined }[]
  >([]);

  const [categorySelected, setCategorySelected] = useState("");
  const [conditionSelected, setConditionSelected] = useState("");
  const [stateSelected, setStateSelected] = useState("");
  const [countrySelected, setCountrySelected] = useState("");
  const [gardenSelected, setGardenSelected] = useState<Set<number>>(new Set());
  const [servicesSelected, setServicesSelected] = useState<Set<number>>(
    new Set()
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const { user } = useAuth0();
  const userDB = useSelector((state: RootState) => state.users.usersDetail);

  useEffect(() => {
    dispatch(fetchCategory())
      .then((action) => {
        if (action.payload) {
          setCategory(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching categories:", error);
      });
    dispatch(fetchCondition())
      .then((action) => {
        if (action.payload) {
          setCondition(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching conditions:", error);
      });
    dispatch(fetchCountry())
      .then((action) => {
        if (action.payload) {
          setCountry(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching countries:", error);
      });
    dispatch(fetchGarden())
      .then((action) => {
        if (action.payload) {
          setGarden(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching gardens:", error);
      });
    dispatch(fetchServices())
      .then((action) => {
        if (action.payload) {
          setServices(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching services:", error);
      });
    dispatch(fetchState())
      .then((action) => {
        if (action.payload) {
          setState(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching states:", error);
      });
  }, [dispatch]);

  // -------------------------------------------FIREBASE--------------------------------------------------------
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const fileList = Array.from(event.target.files);
      setFiles(fileList);
      setProgress(100);
    }
  };

  // ----------------------------------------------------------------------------------------------------------

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (files.length >= 1) {
      try {
        const imageIds: number[] = [];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const storageRef = ref(storage, file.name);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.on("state_changed", (snapshot) => {
            const percentage =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
          });

          await uploadTask;
          const downloadURL = await getDownloadURL(storageRef);
          console.log(`File uploaded successfully: ${downloadURL}`);

          const newImage = {
            image_url: downloadURL.toString(),
            image_description: "hola",
          };
          const action = await dispatch(createImage(newImage));
          const response = action.payload;
          imageIds.push(response.id);
        }

        const propertyImages = imageIds.map((id) => ({
          PropertyId: itemProp2.toString(),
          ImageId: id,
        }));

        const propertyCondition = {
          PropertyId: itemProp2.toString(),
          ConditionId: Number(conditionSelected),
        };
        const propertyCountry = {
          PropertyId: itemProp2.toString(),
          CountryId: Number(countrySelected),
        };
        const propertyState = {
          PropertyId: itemProp2.toString(),
          StateId: Number(stateSelected),
        };
        const propertyGardens = Array.from(gardenSelected).map((gardenId) => ({
          PropertyId: itemProp2.toString(),
          GardenId: gardenId,
        }));
        const propertyServices = Array.from(servicesSelected).map(
          (serviceId) => ({
            PropertyId: itemProp2.toString(),
            ServiceId: serviceId,
          })
        );
        const propertyCategory = {
          PropertyId: itemProp2.toString(),
          CategoryId: Number(categorySelected),
        };

        await Promise.all(
          propertyGardens.map((garden) =>
            dispatch(createPropertyGarden(garden))
          )
        );
        await Promise.all(
          propertyServices.map((service) =>
            dispatch(createPropertyServices(service))
          )
        );
        await Promise.all(
          propertyImages.map((img) => dispatch(createPropertyImage(img)))
        );
        await dispatch(createPropertyCondition(propertyCondition));
        await dispatch(createPropertyCategory(propertyCategory));
        await dispatch(createPropertyState(propertyState));
        await dispatch(createPropertyCountry(propertyCountry));
        setIsSubmitting(false);
        history.push({
          pathname: "/",
        });
      } catch (error) {
        console.log("Error creating properties:", error);
        setIsSubmitting(false);
      }
    } else {
      try {
        const propertyCondition = {
          PropertyId: itemProp2.toString(),
          ConditionId: Number(conditionSelected),
        };
        const propertyCountry = {
          PropertyId: itemProp2.toString(),
          CountryId: Number(countrySelected),
        };
        const propertyState = {
          PropertyId: itemProp2.toString(),
          StateId: Number(stateSelected),
        };
        const propertyGardens = Array.from(gardenSelected).map((gardenId) => ({
          PropertyId: itemProp2.toString(),
          GardenId: gardenId,
        }));
        const propertyServices = Array.from(servicesSelected).map(
          (serviceId) => ({
            PropertyId: itemProp2.toString(),
            ServiceId: serviceId,
          })
        );
        const propertyCategory = {
          PropertyId: itemProp2.toString(),
          CategoryId: Number(categorySelected),
        };

        await Promise.all(
          propertyGardens.map((garden) =>
            dispatch(createPropertyGarden(garden))
          )
        );
        await Promise.all(
          propertyServices.map((service) =>
            dispatch(createPropertyServices(service))
          )
        );
        await dispatch(createPropertyCondition(propertyCondition));
        await dispatch(createPropertyCategory(propertyCategory));
        await dispatch(createPropertyState(propertyState));
        await dispatch(createPropertyCountry(propertyCountry));
        setIsSubmitting(false);
        history.push({
          pathname: "/",
        });
      } catch (error) {
        console.log("Error creating properties:", error);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      {(user && userDB.userType === 1) || (user && userDB.userType === 2) ? (
        <Center my={4}>
          <form onSubmit={handleSubmit}>
            <FormLabel>Tipo de propiedad</FormLabel>
            <Select
              value={categorySelected}
              onChange={(e) => setCategorySelected(e.target.value)}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              {category.map(
                (opcion: {
                  id: number;
                  category_name: any | null | undefined;
                }) => (
                  <option key={opcion.id} value={opcion.id}>
                    {opcion.category_name}
                  </option>
                )
              )}
            </Select>
            <FormLabel>Condición</FormLabel>
            <Select
              value={conditionSelected}
              onChange={(e) => setConditionSelected(e.target.value)}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              {condition.map(
                (opcion: {
                  id: number;
                  condition_name: any | null | undefined;
                }) => (
                  <option key={opcion.id} value={opcion.id}>
                    {opcion.condition_name}
                  </option>
                )
              )}
            </Select>
            <FormLabel>Pais</FormLabel>
            <Select
              value={countrySelected}
              onChange={(e) => setCountrySelected(e.target.value)}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              {country.map(
                (opcion: {
                  id: number;
                  country_name: any | null | undefined;
                }) => (
                  <option key={opcion.id} value={opcion.id}>
                    {opcion.country_name}
                  </option>
                )
              )}
            </Select>
            <FormLabel>Provincia</FormLabel>
            <Select
              value={stateSelected}
              onChange={(e) => setStateSelected(e.target.value)}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              {state.map(
                (opcion: {
                  id: number;
                  state_name: any | null | undefined;
                }) => (
                  <option key={opcion.id} value={opcion.id}>
                    {opcion.state_name}
                  </option>
                )
              )}
            </Select>
            <FormLabel>Patios</FormLabel>
            <Select
              value=""
              onChange={(e) => {
                const gardenId = Number(e.target.value);
                if (gardenId && !gardenSelected.has(gardenId)) {
                  setGardenSelected(new Set([...gardenSelected, gardenId]));
                }
              }}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              {garden.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.garden_name}
                </option>
              ))}
            </Select>
            {gardenSelected.size > 0 ? (
              <Box mt={2} mb={4}>
                <Text fontWeight="bold" mb="2">
                  Opciones seleccionadas:
                </Text>
                {garden
                  .filter((option) => gardenSelected.has(option.id))
                  .map((option) => (
                    <Text key={option.id}>{option.garden_name}</Text>
                  ))}
              </Box>
            ) : null}
            <FormLabel>Servicios</FormLabel>
            <Select
              value=""
              onChange={(e) => {
                const serviceId = Number(e.target.value);
                if (serviceId && !servicesSelected.has(serviceId)) {
                  setServicesSelected(
                    new Set([...servicesSelected, serviceId])
                  );
                }
              }}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>
              {services.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.services_name}
                </option>
              ))}
            </Select>
            {servicesSelected.size > 0 ? (
              <Box mt={2} mb={4}>
                <Text fontWeight="bold" mb="2">
                  Opciones seleccionadas:
                </Text>
                {services
                  .filter((option) => servicesSelected.has(option.id))
                  .map((option) => (
                    <Text key={option.id}>{option.services_name}</Text>
                  ))}
              </Box>
            ) : null}
            <Box my={5}>
              <input type="file" onChange={handleFileChange} multiple />
              <progress value={progress} max="100" />
            </Box>
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
      ) : (
        <Center minH="100vh">
          <Text fontSize="4xl">
            "Para acceder al formulario usted debe ser Asesor"
          </Text>
        </Center>
      )}
    </>
  );
}

export default Form2;
