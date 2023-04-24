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
      image: "https://www.raesinversiones.com:8899/Imagenes/Oficina/6.jpg",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZDAqD2447phGFU52tTjqTV78Jhz0lqvsNAw&usqp=CAU",
      colorTitle: "white",
    },
  ];

  return (
    <Box display={"flex"} justifyContent={"center"} my={20}>
      <Box
        position={"relative"}
        height={"700px"}
        width={"100%"}
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
              height={"100%"}
              width={"100%"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              style={{ objectFit: "cover" }}
              backgroundImage={`url(${card.image})`}
            >
              <Container
                size="container.lg"
                height="600px"
                width={"100%"}
                position="relative"
                display={"flex"}
                alignItems={"self-start"}
                paddingTop={20}
                textAlign={"center"}
              >
                <Stack
                  spacing={6}
                  width={"100%"}
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
