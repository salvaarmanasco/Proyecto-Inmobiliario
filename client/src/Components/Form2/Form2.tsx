import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPropertiesId } from "../../Redux/reducer/Properties";
import { RootState } from "../../Redux/store";
import { ThunkDispatch } from "redux-thunk";
import Property from "../../Interfaces/Property";

interface ItemDetailsProps {
  state: {
    itemProp: {
      id: string;
      title: string;
      antiquity: number;
      address: string;
      bedrooms: number;
      bathrooms: number;
      environments: number;
      pool: boolean;
      elevator: boolean;
      floor_th: number;
      orientation: string;
      m2_totals: number;
      m2_covered: number;
      garage: boolean;
      amenities: boolean;
      description: string;
      furnished: boolean;
      balcony: boolean;
      sign: boolean;
      firstImage: string;
      lat: any;
      long: any;
    };
  };
}

function Form2({ location }: { location: ItemDetailsProps }) {
  const itemProp2 = location.state.itemProp.id;

  // const dispatch: ThunkDispatch<RootState, undefined, any> = useDispatch();
  // const [detailProp, setDetailProp] = useState<Property | null>(null);

  // useEffect(() => {
  //   dispatch(fetchPropertiesId(itemProp2))
  //     .then((action) => {
  //       if (action.payload) {
  //         setDetailProp(action.payload);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching properties:", error);
  //     });
  // }, [dispatch]);

  // console.log(detailProp);

  return <Text>{itemProp2}</Text>;
}

export default Form2;
