import { Button, Center, Text } from "@chakra-ui/react";

const Page404 = () => {
  return (
    <>
      <Center minH="100vh" flexDirection="column">
        <Text fontSize="3xl">Page 404</Text>
        <Button>
          <a href="http://localhost:3000/">Volver a Inicio</a>
        </Button>
      </Center>
    </>
  );
};

export default Page404;
