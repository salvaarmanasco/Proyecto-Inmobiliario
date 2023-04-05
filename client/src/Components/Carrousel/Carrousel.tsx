import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carrousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  const cards = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/urbe-7ccb5.appspot.com/o/Untitledfranquicia.png?alt=media&token=230fc6b2-5a20-4987-a429-35bb5503d59e",
      colorTitle: "black",
    },
    {
      title: "Poner en ALQUILER",
      text: "",
      image:
        "https://img.freepik.com/free-photo/happy-couple-with-coffee-cups-relaxing-their-new-home_329181-19961.jpg?w=996&t=st=1675288520~exp=1675289120~hmac=fcc006ac3bc0108b3b3a9d3aa1e2c6dc91114ae64aaad523a51398062d8545ef",
      colorTitle: "black",
    },
    {
      title: "Sobre Nosotros",
      text: "",
      image:
        "https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=1060&t=st=1675288873~exp=1675289473~hmac=4df8bea6567c5c242b803eb00d989e26659a6184783ecae632e3274416e76de4",
      colorTitle: "white",
    },
  ];

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        position={"relative"}
        height={"600px"}
        width={"75%"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"l"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              backgroundImage={`url(${card.image})`}
            >
              <Container
                size="container.lg"
                height="600px"
                position="relative"
                display={"flex"}
                alignItems={"self-start"}
                paddingTop={20}
                textAlign={"center"}
              >
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  transform="translate(0, -50%)"
                >
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    textAlign={"center"}
                    fontFamily={"sans-serif"}
                    color={card.colorTitle}
                  >
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
