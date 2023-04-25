import Property from "../../Interfaces/Property";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Tooltip,
  chakra,
  GridItem,
  Center,
  CircularProgress,
  Progress,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPropertiesId } from "../../Redux/reducer/Properties";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";

import { RouteComponentProps, useHistory } from "react-router-dom";
import MatchParams from "../../Interfaces/MatchParams";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import {
  createPropertyImage,
  deletePropertyImage,
} from "../../Redux/reducer/Relations";
import { createImage, deleteImage } from "../../Redux/reducer/Images";

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

export default function Modifications3({
  match,
}: RouteComponentProps<MatchParams>) {
  const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  const { id } = match.params;
  const history = useHistory();
  const [detailProp, setDetailProp] = useState<Property>({
    id: "",
    name: "",
    antiquity: 0,
    address: "",
    title: "",
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
    lat: 0,
    long: 0,
    price: 0,
    zone: "",
    deleted: false,
    firstImage: "",
    Conditions: [],
    Categories: [],
    States: [],
    Countries: [],
    Gardens: [],
    Services: [],
    Images: [],
  });

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchPropertiesId(id))
      .then((action) => {
        if (action.payload) {
          setDetailProp(action.payload);
        }
      })
      .catch((error) => {
        console.log("Error fetching properties:", error);
      });
  }, [dispatch]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // ------------------------------------------------------------------------------------------------------------
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const fileList = Array.from(event.target.files);
      setFiles(fileList);
      setProgress(100);
    }
  };
  // ------------------------------------------------------------------------------------------------------------
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
          PropertyId: detailProp.id.toString(),
          ImageId: id,
        }));

        await Promise.all(
          propertyImages.map((img) => dispatch(createPropertyImage(img)))
        );

        setIsSubmitting(false);
        window.location.reload();
      } catch (error) {
        console.log("Error creating properties:", error);
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
      history.push({
        pathname: "/",
      });
    }
  };

  const handleDelete = async (i: any) => {
    setIsLoading(true);

    try {
      // Delete the image from Firebase Storage
      const imageRef = ref(storage, i.image_url);
      await deleteObject(imageRef);

      const updatedImages = detailProp.Images.filter(
        (img: any) => img.id !== i.id
      );
      setDetailProp({ ...detailProp, Images: updatedImages });

      let relationToDelete = {
        PropertyId: id.toString(),
        ImageId: i.id,
      };

      // Delete the image from the database
      await dispatch(deletePropertyImage(relationToDelete));
      await dispatch(deleteImage(i.id));

      setIsLoading(false);
    } catch (error) {
      console.error("Error deleting image:", error);
      setIsLoading(false);
    }
  };

  console.log(detailProp);
  return (
    <form onSubmit={handleSubmit}>
      <>
        {detailProp?.Images.length <= 0 ? (
          <Center minH="60vh">
            <Text fontSize="4xl">
              "Esta propiedad no tiene imagenes asociadas"
            </Text>
          </Center>
        ) : (
          <SimpleGrid columns={4}>
            {detailProp?.Images &&
              detailProp.Images.map((i: any) => (
                <GridItem>
                  <Flex
                    p={50}
                    w={"full"}
                    // height={"full"}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      // bg={useColorModeValue("white", "gray.800")}
                      maxW="sm"
                      borderWidth="1px"
                      rounded="lg"
                      shadow="lg"
                      position="relative"
                    >
                      <Image
                        src={i.image_url}
                        alt={`Picture of ${detailProp.name}`}
                        roundedTop="lg"
                      />
                      <Box p="4">
                        <Flex
                          mt="1"
                          justifyContent="space-between"
                          alignContent="center"
                        >
                          <Button ml="auto" onClick={() => handleDelete(i)}>
                            X
                          </Button>
                        </Flex>
                      </Box>
                    </Box>
                  </Flex>
                </GridItem>
              ))}
          </SimpleGrid>
        )}
        <Center mb={4}>
          <GridItem>
            <Box my={5}>
              <input type="file" onChange={handleFileChange} multiple />
              <Progress value={progress} max={100} colorScheme="green">
                <CircularProgress
                  size="120px"
                  thickness="8px"
                  value={progress}
                  color="green.500"
                />
              </Progress>
            </Box>
            <Button
              type="submit"
              isLoading={isSubmitting}
              loadingText="Submitting..."
              width={500}
              my={10}
            >
              Agregar
            </Button>
          </GridItem>
        </Center>
      </>
    </form>
  );
}
