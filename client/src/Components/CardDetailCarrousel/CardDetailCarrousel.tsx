import React, { useEffect, useState } from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  IconButton,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";

import Slider from "react-slick";

import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
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

function CardDetailCarrousel(props: { images: any }) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const [m2Terrrain, setM2Terrain] = useState({
    min: 0,
    max: 5000,
  });
  const [m2cover, setM2cover] = useState({
    min: 0,
    max: 1500,
  });

  useEffect(() => {
    setM2Terrain({ min: 0, max: 5000 });
    setM2cover({ min: 0, max: 1500 });
  }, [isOpen]);

  return (
    <>
      <Button colorScheme="red" ml={2} ref={btnRef} onClick={onOpen}>
        + Imagenes
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        size="5xl"
        // scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody margin={{ base: 2, md: 5 }}>
            <Box
              position={"relative"}
              height={"600px"}
              width={"full"}
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
              {/* Right Icon */}
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
                {props.images?.map((e: any, index: any) => (
                  <Box
                    key={index}
                    height={"auto"}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="contain"
                    backgroundImage={`url(${e.image_url})`}
                  >
                    <Container
                      size="container.xs"
                      height="600px"
                      position="relative"
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardDetailCarrousel;
